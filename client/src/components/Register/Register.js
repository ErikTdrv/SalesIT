import React, { useState } from "react";
import { Link } from "react-router-dom";
import Copyright from "../Copyright/Copyright";
import "./Register.css";

export default function Register() {
  const [auth, setAuth ] = useState({})
  const [username, setUsername] = useState(false);
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);
  const [repass, setRepass] = useState(false);
  const [phone, setPhone] = useState(false);
  
  const fieldStateMap = {
    'first': setUsername,
    'second': setEmail,
    'third': setPassword,
    'fourth': setRepass,
    'fifth': setPhone
  };
  
  const changeValue = (e) => {
    const { value, className } = e.target;
    const setState = fieldStateMap[className];
  
    if (value.length > 0) {
      setState(true);
    } else {
      setState(false);
    }
  };
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
              <input type="text" className="first" onChange={(e) => setAuth({...auth, username: e.target.value})}/>
              <span className={auth.username ? "value-there" : ""}>Username</span>
            </div>
            <div className="register-email">
              <input type="text" className="second" onChange={(e) => setAuth({...auth, email: e.target.value})}/>
              <span className={auth.email ? "value-there" : ""}>Email</span>
            </div>
            <div className="register-password">
              <input type="password" className="third" onChange={(e) => setAuth({...auth, password: e.target.value})}/>
              <span className={auth.password ? "value-there" : ""}>Password</span>
            </div>
            <div className="re-password">
              <input type="password" className="fourth" onChange={(e) => setAuth({...auth, repass: e.target.value})}/>
              <span className={auth.repass ? "value-there" : ""}>Repeat Password</span>
            </div>
            <div className="phone">
              <input type="text" className="fifth" onChange={(e) => setAuth({...auth, phone: e.target.value})}/>
              <span className={auth.phone ? "value-there" : ""}>Phone Number</span>
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
