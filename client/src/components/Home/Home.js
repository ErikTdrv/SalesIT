import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import HomeFooter from "../Main/Home-Footer/Footer";
import "./Home.css";
import TopDiscounts from "./TopDiscounts/TopDiscounts";
import { useSelector } from "react-redux";

export default function Home() {
  const isAuth = useSelector(state => state.user.isAuth);
  
  return (
    <>
    <div className="home">
      <img src="/home-page.jpg" alt="home-page-img" className="home__image" />
      <div className="titles">
        <h1 className="first">The Ultimate Destination for Tech Lovers</h1>
        <h2 className="second">
          From laptops to accessories, we have everything you need to stay on
          top of your tech game - shop with us today!
        </h2>
        <div className="home-buttons">
        { !isAuth ? 
          <>
          <Link to='/login'><button>Login</button></Link>
          <Link to='/register'><button>Register</button></Link>
          </> 
          :
          <Link to='/all-products'><button>All Products</button></Link>}
        </div>
      </div>
    </div>
    <TopDiscounts/>
    <HomeFooter/>
    </>
  );
}
