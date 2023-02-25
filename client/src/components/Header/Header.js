import './Header.css';
import React from 'react'
import { Link } from "react-router-dom";
export default function Header(){
    return (
        <header className="navigation">
        <div className="mainlogo">
            <Link to={'/'}>
            Sales<span className="itlogo">IT</span>
            </Link>
        </div>
        <ul className="mainul">
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/add-item'}>Add Item</Link></li>
            <li><Link to={'/about'}>About</Link></li>
        </ul>
        <ul className="authul">
            <li><Link to={'/login'}>Login</Link></li>
            <li><Link to={'/register'}>Register</Link></li>
            <li><i className="fa-solid fa-user"></i></li>
        </ul>
    </header>   
    );
}