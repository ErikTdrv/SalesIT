import './Header.css';
import React from 'react'
import { Link } from "react-router-dom";
export default function Header(){
    return (
        <header className="navigation">
        <div className="mainlogo">
            <Link className='Link' to='/'>
            Sales<span className="itlogo">IT</span>
            </Link>
        </div>
        <ul className="mainul">
            <li><Link className='Link' to='/'>Home</Link></li>
            <li><Link className='Link' to='/all-items'>All Items</Link></li>
            <li><Link className='Link' to='/add-item'>Add Item</Link></li>
            <li><Link className='Link' to='/about'>About</Link></li>
        </ul>
        <ul className="authul">
            <li><Link className='Link' to='/login'>Login</Link></li>
            <li><Link className='Link' to='/register'>Register</Link></li>
            <li><i className="fa-solid fa-user"></i></li>
        </ul>
    </header>   
    );
}