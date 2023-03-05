import React from "react";
import "./Computer.css";

export default function Computer(computer) {
  let {manufacturer, motherboard, processor, videocard, images, os, ssd, harddrive, price} = computer.computer;
  return (
    <div className="computer__card">
      <img className="computer__image" src="computer.jpg" alt="" />
      <div className="computer__info">
        <h1 className="computer__title">{manufacturer}</h1>
        <hr />
        <span>
          <i className="fa-solid fa-check"></i>{motherboard}
        </span>
        <span>
          <i className="fa-solid fa-check"></i>{processor}
        </span>
        <span>
          <i className="fa-solid fa-check"></i>{videocard}
        </span>
        <span>
          <i className="fa-solid fa-check"></i>{ssd}
        </span>
        <span>
          <i className="fa-solid fa-check"></i>{os}
        </span>
        <span>
          <i className="fa-solid fa-check"></i>{harddrive}
        </span>
      </div>
      <span className="price">{price}$</span>
      <button className="computer__button">Details</button>
    </div>
  );
}
