import './Header.css';
import React from 'react';
export default function Header(){
    return (
        <header className="navigation">
        <div className="mainlogo">
            Sales<span className="itlogo">IT</span>
        </div>
        <ul className="mainul">
            <li><a>Home</a></li>
            <li><a>Add Item</a></li>
            <li><a>About</a></li>
        </ul>
        <ul className="authul">
            <li><a>Login</a></li>
            <li><a>Register</a></li>
            <li><i className="fa-solid fa-user"></i></li>
        </ul>
    </header>   
    );
}