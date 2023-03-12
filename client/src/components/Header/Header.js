import './Header.css';
import React, { useContext } from 'react'
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from '../../contexts/AuthContext';
export default function Header(){
    let { isAuth } = useContext(AuthContext);
    return (
        <header className="navigation">
        <div className="mainlogo">
            <Link className='Link' to='/'>
            Sales<span className="itlogo">IT</span>
            </Link>
        </div>
        <ul className="mainul">
            <li><NavLink activeclassname='active' className='Link' to='/'>Home</NavLink></li>
            <li><NavLink activeclassname='active' className='Link' to='/all-products'>All Products</NavLink></li>
            { isAuth && 
            <li><NavLink activeclassname='active' className='Link' to='/add-product'>Add Product</NavLink></li>
            }
            <li><NavLink activeclassname='active' className='Link' to='/about'>About</NavLink></li>
        </ul>
        <ul className="authul">
            { isAuth ? 
            <>
            <li><i className="fa-solid fa-user"></i></li>
            <li><NavLink activeclassname='activeCard' className='Link' to='/card'><i className="fa-solid fa-cart-shopping"></i></NavLink></li> 
            </>
            :
            <>
            <li><NavLink activeclassname='active' className='Link' to='/login'>Login</NavLink></li>
            <li><NavLink activeclassname='active' className='Link' to='/register'>Register</NavLink></li>
            </>
            }
        </ul>
    </header>   
    );
}