import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <>
    <div class="home">
      <img src="../../home-page.jpg" alt="" />
      <div class="titles">
        <h1 class="first">The Ultimate Destination for Tech Lovers</h1>
        <h2 class="second">
          From laptops to accessories, we have everything you need to stay on
          top of your tech game - shop with us today!
        </h2>
        <div class="home-buttons">
          <button>Login</button>
          <button>Register</button>
          <button>All Products</button>
        </div>
      </div>
    </div>
    </>
  );
}
