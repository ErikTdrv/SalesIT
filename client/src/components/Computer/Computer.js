import React from "react";
import "./Computer.css";
import { Link } from "react-router-dom";

export default function Computer({
  product: {
    _id,
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
      <div className="price-div">
        <span className="price">{price}$</span>
      </div>
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
              {processor}
            </span>
            <span>
              <i className="fa-solid fa-check"></i>
              {videocard}
            </span>
          </>
        )}
        {camera && (
          <>
            <span>
              <i className="fa-solid fa-check"></i>
              {capacity}
            </span>
          </>
        )}

        {paneltype && (
          <>
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
      <Link to={`/all-products/${_id}`}>
        <button className="computer__button">Details</button>
      </Link>
    </div>
  );
}
