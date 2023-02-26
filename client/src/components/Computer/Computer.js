import React from "react";
import "./Computer.css";

export default function Computer() {
  return (
    <div className="computer__card">
      <img className="computer__image" src="computer.jpg" alt="" />
      <div className="computer__info">
        <h1 className="computer__title">Asus Veriton</h1>
        <hr />
        <span>
          <i className="fa-solid fa-check"></i>New Model
        </span>
        <span>
          <i className="fa-solid fa-check"></i>32GB RAM
        </span>
        <span>
          <i className="fa-solid fa-check"></i>500GB SSD
        </span>
        <span>
          <i className="fa-solid fa-check"></i>GeForce 3060 RTX
        </span>
        <span>
          <i className="fa-solid fa-check"></i>Good Sustainability
        </span>
      </div>
      <button className="computer__button">Details</button>
    </div>
  );
}
