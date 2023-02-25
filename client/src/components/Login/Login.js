import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

export default function Login(){
    const [username, setUsername] = useState(false)
    const [password, setPassword] = useState(false)
    function changeValue(e){
        if(e.target.type == 'password' && e.target.value.length > 0){
            setPassword(true)
        }else if(e.target.value.length > 0){
            setUsername(true)
        }
    }
    return (
        <div className="login">
        <div className="form">
            <h1>Login</h1>
            <form className="login-form">
                <div className="inputs">
                    <div className="email">
                        <input type="text" onChange={changeValue}/>
                        <span className={username ? 'email-span value-there' : 'email-span'} >Email</span>
                    </div>
                    <div className="password">
                        <input type="password" onChange={changeValue}/>
                        <span className={password ? 'password-span value-there' : 'password-span'}>Password</span>
                    </div>
                </div>
                <input type="submit" value="Login" id="loginBtn" className="login-btn"/>
            </form>
            <p className="text">Don't have an account? <Link to='/register'>Sign Up</Link></p>
        </div>
    </div>
    );
}
