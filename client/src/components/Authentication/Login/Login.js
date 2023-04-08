import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../../services/userService";
import Copyright from "../../Main/Copyright/Copyright";

import "./Login.css";
import { useDispatch } from "react-redux";

export default function Login() {
  const dispatch = useDispatch();
  const [authInfo, setAuthInfo] = useState({email: '', password: ''});
  const [error, setError] = useState({});
  const [mainError, setMainError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const loginClassName = isLoading ? 'login-form login-blur' : 'login-form ';

  async function loginHandler(e) {
    e.preventDefault();
    setIsLoading(true)
    let data = await login(authInfo);
    if (data.message) {
      setMainError(data.message);
      setIsLoading(false)
    }else if(data.username){
      dispatch({type: "SET_USER", payload: data})
      navigate('/')
      setIsLoading(false)
    }
  }
  function validateInput(e, type) {
    console.log(type)
    if (e.target.type === "password") {
      if (e.target.value.length < 6) {
        setError({
          ...error,
          passwordErr: "Password must contain minimum 6 characters!",
        });
      } else if (e.target.value.length > 10) {
        setError({
          ...error,
          passwordErr: "Password cannot contain more than maximum 10 characters!",
        });
      } else {
        setError({ ...error, passwordErr: "" });
      }
    } else if(type === 'Email' && e.target.value !== ''){
      const emailRegex = /^[a-zA-Z0-9.-]{4,}@[a-z]+.[a-z]+$/;
      const isValidEmail = emailRegex.test(authInfo.email);
      if (!isValidEmail) {
        setError({ ...error, emailErr: "Email must be valid!" });
      } else {
        setError({ ...error, emailErr: "" });
      }
    }else if(type === 'Email' && e.target.value === ''){
      console.log('here')
      setError({...error, emailErr: 'Email is required!'})
    }else if(type === 'Email' && e.target.value !== ''){

      setError({...error, emailErr: ''})
    }
  }
  return (
    <>
      <div className="login">
        <div className="form">
          <h1>Login</h1>
          <form className={loginClassName} onSubmit={loginHandler}>
          {mainError ? <p className="main-error">{mainError}</p> : ""}
            <div className="inputs">
              <div className="email">
                <input
                  data-testid="email-input"
                  type="text"
                  onChange={(e) =>
                    setAuthInfo({ ...authInfo, email: e.target.value })
                  }
                  onBlur={(e) => validateInput(e, 'Email')}
                />
                <span className={authInfo.email ? "value-there" : ""}>
                  Email
                </span>
                {error.emailErr ? (
                  <p className="error">{error.emailErr}</p>
                ) : (
                  ""
                )}
              </div>
              <div className="password">
                <input
                  data-testid="password-input"
                  type="password"
                  onChange={(e) =>
                    setAuthInfo({ ...authInfo, password: e.target.value })
                  }
                  onBlur={validateInput}
                />
                <span className={authInfo.password ? "value-there" : ""}>
                  Password
                </span>
                {error.passwordErr ? (
                  <p className="error">{error.passwordErr}</p>
                ) : (
                  ""
                )}
              </div>
            </div>
            { !isLoading && <input
              type="submit"
              value="Login"
              id="loginBtn"
              className="login-btn"
              disabled={
                Object.values(error).some((e) => e.length > 0) ||
                Object.values(authInfo).some((e) => e.length === 0)
              }
            />}
            
          </form>
          {isLoading && <span className="loader"></span>}
          <p className="text">
            Don't have an account? <Link to="/register">Sign Up</Link>
          </p>
        </div>
      </div>
        
      <Copyright />
    </>
  );
}
