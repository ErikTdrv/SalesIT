import React, { useState } from "react";
import { Link } from "react-router-dom";
import Copyright from "../Copyright/Copyright";
import "./Register.css";

export default function Register() {
  const [username, setUsername] = useState(false);
  const [password, setPassword] = useState(false);
  const [email, setEmail] = useState(false);
  const [repass, setRepass] = useState(false);

  function changeValue(e){
    if(e.target.value.length > 0){
        if(e.target.className === 'first'){
            setUsername(true)
        }else if(e.target.className === 'second'){
            setEmail(true)
        }else if(e.target.className === 'third'){
            setPassword(true)
        }else if(e.target.className === 'fourth'){
            setRepass(true)
        }
    }else {
        if(e.target.className === 'first'){
            setUsername(false)
        }else if(e.target.className === 'second'){
            setEmail(false)
        }else if(e.target.className === 'third'){
            setPassword(false)
        }else if(e.target.className === 'fourth'){
            setRepass(false)
        }
    }
  }
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
              <input type="text" className="first" onChange={changeValue}/>
              <span className={username ? "reg-username-span value-there" : "reg-username-span"}>Username</span>
            </div>
            <div className="register-email">
              <input type="text" className="second" onChange={changeValue}/>
              <span className={email == true ? "reg-email-span value-there" : "reg-email-span"}>Email</span>
            </div>
            <div className="register-password">
              <input type="password" className="third" onChange={changeValue}/>
              <span className={password ? "reg-password-span value-there" : "reg-password-span"}>Password</span>
            </div>
            <div className="re-password">
              <input type="text" className="fourth" onChange={changeValue}/>
              <span className={repass ? "repass-span value-there" : "repass-span"}>Repeat Password</span>
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
