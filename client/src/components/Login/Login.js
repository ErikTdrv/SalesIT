import React, { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../../services/userService";
import Copyright from "../Copyright/Copyright";
import "./Login.css";

export default function Login() {
  const [authInfo, setAuthInfo] = useState({});
  const [error, setError] = useState({});
  const [mainError, setMainError] = useState()
  async function loginHandler(e) {
    e.preventDefault();
    let data = await login(authInfo);
    if (data.message) {
      setMainError(data.message);
    }
  }
  function validateInput(e){
    if(e.target.type == 'password'){
      if(e.target.value.length < 4){
        setError({...error, passwordErr: 'Password must contain minimum 6 characters!'})
      }else if(e.target.value.length > 10){
        setError({...error, passwordErr: 'Password must contain maximum 10 characters!'})
      }else {
        setError({...error, passwordErr: ''})
      }
    }else {
      if(e.target.value.length < 4){
        setError({...error, emailErr: 'Email must contain minimum 4 characters!'})
      }else if(e.target.value.length > 12){
        setError({...error, emailErr: 'Email must contain maximum 12 characters!'})
      }else {
        setError({...error, emailErr: ''})
      }
    }
  }
  return (
    <>
      <div className="login">
        <div className="form">
          <h1>Login</h1>
    {mainError ?  <p className="main-error">{mainError}</p> : ''}
          <form className="login-form" onSubmit={loginHandler}>
            <div className="inputs">
              <div className="email">
                <input
                  type="text"
                  onChange={(e) =>
                    setAuthInfo({ ...authInfo, email: e.target.value })
                  }
                  onBlur={validateInput}
                />
                <span className={authInfo.email ? "value-there" : ""}>
                  Email
                </span>
                {error.emailErr ? <p className="error">{error.emailErr}</p> : ''}
              </div>
              <div className="password">
                <input
                  type="password"
                  onChange={(e) =>
                    setAuthInfo({ ...authInfo, password: e.target.value })
                  }
                  onBlur={validateInput}
                />
                <span className={authInfo.password ? "value-there" : ""}>
                  Password
                </span>
                {error.passwordErr ? <p className="error">{error.passwordErr}</p> : ''}
              </div>
            </div>
            <input
              type="submit"
              value="Login"
              id="loginBtn"
              className="login-btn"
            />
          </form>
          <p className="text">
            Don't have an account? <Link to="/register">Sign Up</Link>
          </p>
        </div>
      </div>
      <Copyright />
    </>
  );
}
