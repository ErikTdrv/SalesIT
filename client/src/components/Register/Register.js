import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { convertToBase64, register } from "../../services/userService";
import Copyright from "../Copyright/Copyright";
import "./Register.css";

export default function Register() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState({});
  const [mainError, setMainError] = useState();
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  let { userAuth } = useContext(AuthContext);
  async function onSubmitHandler(e) {
    e.preventDefault();
    setIsLoading(true);
    if (auth.repass !== auth.password) {
      return setMainError("Passwords must match!");
    }
    let response = await register(auth);
    if (response?.username) {
      setIsLoading(false);
      userAuth(response);
      navigate("/");
    } else if (response?.message) {
      setIsLoading(false);
      setMainError(response.message);
    }
  }

  function validateInput(type, e) {
    if (e.target.value === "") {
      setError({ ...error, [type]: `${type} is required!` });
    } else {
      setError({ ...error, [type]: "" });
    }
    if (type === "Email") {
      const emailRegex = /^[a-zA-Z0-9.-]{4,}@[a-z]+.[a-z]+$/;
      const isValidEmail = emailRegex.test(e.target.value);
      if (!isValidEmail) {
        setError({ ...error, Email: "Email must be valid!" });
      } else {
        setError({ ...error, Email: "" });
      }
    }
  }
  return (
    <>
      <div className="register">
        <h1>Register</h1>
        {mainError ? <p className="main-error">{mainError}</p> : ""}
        <form onSubmit={onSubmitHandler}>
          {auth?.avatarImg && (
            <img className="avatarImg" src={auth.avatarImg} alt="" />
          )}
          <div className="register-inputs">
            <div className="register-username">
              <input
                type="text"
                className="first"
                onChange={(e) => setAuth({ ...auth, username: e.target.value })}
                onBlur={(e) => validateInput("username", e)}
              />
              <span className={auth.username ? "value-there" : ""}>
                Username
              </span>
              {error.username && <p className="error">Username is required!</p>}
            </div>
            <div className="register-email">
              <input
                type="text"
                className="second"
                onChange={(e) => setAuth({ ...auth, email: e.target.value })}
                onBlur={(e) => validateInput("Email", e)}
              />
              <span className={auth.email ? "value-there" : ""}>Email</span>
              {error.Email && <p className="error">{error.Email}</p>}
            </div>
            <div className="register-password">
              <input
                type="password"
                className="third"
                onChange={(e) => setAuth({ ...auth, password: e.target.value })}
                onBlur={(e) => validateInput("password", e)}
              />
              <span className={auth.password ? "value-there" : ""}>
                Password
              </span>
              {error.password && <p className="error">Password is required!</p>}
            </div>
            <div className="re-password">
              <input
                type="password"
                className="fourth"
                onChange={(e) => setAuth({ ...auth, repass: e.target.value })}
                onBlur={(e) => validateInput("repass", e)}
              />
              <span className={auth.repass ? "value-there" : ""}>
                Repeat Password
              </span>
              {error.repass && (
                <p className="error">Re-Password is required!</p>
              )}
            </div>
            <div className="phone">
              <input
                type="text"
                className="fifth"
                onChange={(e) => setAuth({ ...auth, phone: e.target.value })}
                onBlur={(e) => validateInput("phone", e)}
              />
              <span className={auth.phone ? "value-there" : ""}>
                Phone Number
              </span>
              {error.phone && <p className="error">Phone is required!</p>}
            </div>
            <div className="avatarDiv">
              <label htmlFor="avatar">
                <input
                  id="avatar"
                  type="file"
                  name="avatar"
                  className={auth.avatarImg ? "fulfilled" : "empty"}
                  onClick={(e) => {
                    if (e.target.className === "fulfilled") {
                      setAuth({ ...auth, avatarImg: "" });
                    }
                  }}
                  onChange={async (e) => {
                    if (e.target.files[0]) {
                      setAuth({
                        ...auth,
                        avatarImg: await convertToBase64(e.target.files[0]),
                      });
                    }
                  }}
                />
                <i className="fa-solid fa-plus"></i>
                {auth.avatarImg ? "Remove Avatar" : "Add Avatar"}
              </label>
            </div>
          </div>
          { !isLoading &&<input type="submit" value="Register" className="register-btn" />}
        </form>
        {isLoading && <span id="register-loader" className="loader"></span>}
        <p className="reg-text">
          Don't have an account? <Link to="Login">Sign In</Link>
        </p>
      </div>
      <Copyright />
    </>
  );
}
