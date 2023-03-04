import React, { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../../services/userService";
import Copyright from "../Copyright/Copyright";
import "./Login.css";

export default function Login() {
  const [authInfo, setAuthInfo] = useState({});
  const [error, setError] = useState("");
  async function loginHandler(e) {
    e.preventDefault();
    let data = await login(authInfo);
    if (data.message) {
      setError(data.message);
    }
  }
  return (
    <>
      <div className="login">
        <div className="form">
          <h1>Login</h1>
          <form className="login-form" onSubmit={loginHandler}>
            <div className="inputs">
              <div className="email">
                <input
                  type="text"
                  onChange={(e) =>
                    setAuthInfo({ ...authInfo, email: e.target.value })
                  }
                />
                <span className={authInfo.email ? "value-there" : ""}>
                  Email
                </span>
              </div>
              <div className="password">
                <input
                  type="password"
                  onChange={(e) =>
                    setAuthInfo({ ...authInfo, password: e.target.value })
                  }
                />
                <span className={authInfo.password ? "value-there" : ""}>
                  Password
                </span>
              </div>
            </div>
            <input
              type="submit"
              value="Login"
              id="loginBtn"
              className="login-btn"
            />
          </form>
          {error && <p className="main-error">{error}</p>}
          <p className="text">
            Don't have an account? <Link to="/register">Sign Up</Link>
          </p>
        </div>
      </div>
      <Copyright />
    </>
  );
}
