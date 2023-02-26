import './Header.css';
import React from 'react'
import { Link, NavLink } from "react-router-dom";
export default function Header(){
    return (
        <header className="navigation">
        <div className="mainlogo">
            <NavLink className='Link' to='/'>
            Sales<span className="itlogo">IT</span>
            </NavLink>
        </div>
        <ul className="mainul">
            <li><NavLink activeclassname='active' className='Link' to='/'>Home</NavLink></li>
            <li><NavLink activeclassname='active' className='Link' to='/all-items'>All Products</NavLink></li>
            <li><NavLink activeclassname='active' className='Link' to='/add-item'>Add Product</NavLink></li>
            <li><NavLink activeclassname='active' className='Link' to='/about'>About</NavLink></li>
        </ul>
        <ul className="authul">
            <li><NavLink activeclassname='active' className='Link' to='/login'>Login</NavLink></li>
            <li><NavLink activeclassname='active' className='Link' to='/register'>Register</NavLink></li>
            <li><i className="fa-solid fa-user"></i></li>
        </ul>
    </header>   
    );
}