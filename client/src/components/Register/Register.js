import React, { useState } from "react";
import { Link } from "react-router-dom";
import Copyright from "../Copyright/Copyright";
import "./Register.css";

export default function Register() {
  return (
    <>
      <div className="register">
        <h1>Register</h1>
        <form>
          <img
            className="avatarImg"
            src="/blank-profile-picture-973460_1280.webp"
            alt=""
          />
          <div className="register-inputs">
            <div className="register-username">
              <input type="text" />
              <span className="reg-username-span">Username</span>
            </div>
            <div className="register-email">
              <input type="text" />
              <span className="reg-email-span">Email</span>
            </div>
            <div className="register-password">
              <input type="password" />
              <span className="reg-password-span value-there">Password</span>
            </div>
            <div className="re-password">
              <input type="text" />
              <span className="repass-span">Repeat Password</span>
            </div>
            <div className="avatar">
              <label htmlFor="avatar">
                <i className="fa-solid fa-plus"></i>Add avatar
              </label>
              <input type="file" name="avatar" />
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