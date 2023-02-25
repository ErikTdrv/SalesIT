import React from "react";
import HomeFooter from "./Home-Footer/Footer";
import "./Home.css";
import TopDiscounts from "./TopDiscounts/TopDiscounts";

export default function Home() {
  return (
    <>
    <div className="home">
      <img src="/home-page.jpg" alt="" />
      <div className="titles">
        <h1 className="first">The Ultimate Destination for Tech Lovers</h1>
        <h2 className="second">
          From laptops to accessories, we have everything you need to stay on
          top of your tech game - shop with us today!
        </h2>
        <div className="home-buttons">
          <button>Login</button>
          <button>Register</button>
          <button>All Products</button>
        </div>
      </div>
    </div>
    <TopDiscounts/>
    <HomeFooter/>
    </>
  );
}
