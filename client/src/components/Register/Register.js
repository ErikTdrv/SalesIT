import React, { useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../../services/userService";
import Copyright from "../Copyright/Copyright";
import "./Register.css";

export default function Register() {
  const [auth, setAuth] = useState({});
  async function onSubmitHandler(e) {
    e.preventDefault();
    if(auth.avatarImg?.length > 0){
      let base64 = await convertToBase64(auth.avatarImg)
      auth.avatarImg = base64
    }
    register(auth)
  }

  async function convertToBase64(file){
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result)
      }
      fileReader.onerror = (error) => {
        reject(error)
      }
    })
  }
  return (
    <>
      <div className="register">
        <h1>Register</h1>
        <form onSubmit={onSubmitHandler}>
          <img
            className="avatarImg"
            src="/blank-profile-picture-973460_1280.webp"
            alt=""
          />
          <div className="register-inputs">
            <div className="register-username">
              <input
                type="text"
                className="first"
                onChange={(e) => setAuth({ ...auth, username: e.target.value })}
              />
              <span className={auth.username ? "value-there" : ""}>
                Username
              </span>
            </div>
            <div className="register-email">
              <input
                type="text"
                className="second"
                onChange={(e) => setAuth({ ...auth, email: e.target.value })}
              />
              <span className={auth.email ? "value-there" : ""}>Email</span>
            </div>
            <div className="register-password">
              <input
                type="password"
                className="third"
                onChange={(e) => setAuth({ ...auth, password: e.target.value })}
              />
              <span className={auth.password ? "value-there" : ""}>
                Password
              </span>
            </div>
            <div className="re-password">
              <input
                type="password"
                className="fourth"
                onChange={(e) => setAuth({ ...auth, repass: e.target.value })}
              />
              <span className={auth.repass ? "value-there" : ""}>
                Repeat Password
              </span>
            </div>
            <div className="phone">
              <input
                type="text"
                className="fifth"
                onChange={(e) => setAuth({ ...auth, phone: e.target.value })}
              />
              <span className={auth.phone ? "value-there" : ""}>
                Phone Number
              </span>
            </div>
            <div className="avatarDiv">
              <label htmlFor="avatar">
                
              <input
                id="avatar"
                type="file"
                name="avatar"
                onChange={(e) => setAuth({ ...auth, avatarImg: e.target.files[0] })}
              />
                <i className="fa-solid fa-plus"></i>Add avatar
              </label>
            </div>
          </div>
          <input type="submit" value="Register" className="register-btn" />
        </form>
        <p className="reg-text">
          Don't have an account? <Link to="Login">Sign In</Link>
        </p>
      </div>
      <Copyright />
    </>
  );
}
