import React, { useState } from "react";
import "./Shopping.css";

export default function ShoppingCard() {
  return (
    <div className="shopping-container">
      <h1>Shopping Card</h1>
      <div className="card__products">
        <h3>All Added Products</h3>
        <section className="card__section">
          <article className="card__product">
            <img src="computer.jpg" alt="" />
            <h1>Asus Veriton 32GB RAM 500GB SSD GeForce 3060 RTX</h1>
            <span className="product__price">1200$</span>
            <button>Remove</button>
          </article>
          <article className="card__product">
            <img src="computer.jpg" alt="" />
            <h1>Asus Veriton 32GB RAM 500GB SSD GeForce 3060 RTX</h1>
            <span className="product__price">1200$</span>
            <button>Remove</button>
          </article><article className="card__product">
            <img src="computer.jpg" alt="" />
            <h1>Asus Veriton 32GB RAM 500GB SSD GeForce 3060 RTX</h1>
            <span className="product__price">1200$</span>
            <button>Remove</button>
          </article>
        </section>
        <span className="total-price">Total Price: 12000$</span>
      </div>
      <button className="buy-btn">Buy</button>
    </div>
  );
}
