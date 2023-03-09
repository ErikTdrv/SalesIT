import React from "react";
import "./Computer.css";
import { Link, NavLink } from "react-router-dom";

export default function Computer({
  product: {
    manufacturer,
    motherboard,
    processor,
    videocard,
    ssd,
    harddrive,
    price,
    screenresolution,
    resolution,
    refreshrate,
    paneltype,
    phonename,
    capacity,
    displaysize,
    color,
    camera,
    battery,
    os,
    images,
  },
}) {
  return (
    <div className="computer__card">
      <img className="computer__image" src={images[0].imageUrl} alt="" />
      <div className="computer__info">
        {/* { product.computer} */}
        {manufacturer && <h1 className="computer__title">{manufacturer}</h1>}
        {phonename && <h1 className="computer__title">{phonename}</h1>}
        <hr />
        {videocard && (
          <>
            <span>
              <i className="fa-solid fa-check"></i>
              {motherboard}
            </span>
            <span>
              <i className="fa-solid fa-check"></i>
              {processor}
            </span>
            <span>
              <i className="fa-solid fa-check"></i>
              {videocard}
            </span>
            <span>
              <i className="fa-solid fa-check"></i>
              {ssd}
            </span>
            <span>
              <i className="fa-solid fa-check"></i>
              {os}
            </span>
            <span>
              <i className="fa-solid fa-check"></i>
              {harddrive}
            </span>
          </>
        )}
        {camera && (
          <>
            <span>
              <i className="fa-solid fa-check"></i>
              {camera}
            </span>
            <span>
              <i className="fa-solid fa-check"></i>
              {color}
            </span>
            <span>
              <i className="fa-solid fa-check"></i>
              {capacity}
            </span>
            <span>
              <i className="fa-solid fa-check"></i>
              {displaysize}
            </span>
            <span>
              <i className="fa-solid fa-check"></i>
              {battery}
            </span>
          </>
        )}

        {paneltype && (
          <>
            <span>
              <i className="fa-solid fa-check"></i>
              {screenresolution}
            </span>
            <span>
              <i className="fa-solid fa-check"></i>
              {paneltype}
            </span>
            <span>
              <i className="fa-solid fa-check"></i>
              {resolution}
            </span>
            <span>
              <i className="fa-solid fa-check"></i>
              {refreshrate}
            </span>
          </>
        )}
      </div>
      <span className="price">{price}$</span>
      <Link to="/all-products/computer">
        <button className="computer__button">Details</button>
      </Link>
    </div>
  );
}
