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
    discount
  },
}) {
  return (
    <div className="computer__card">
      { discount && discount > 0 && (
        <div className="computer__discount__div">
        <span className="computer__discount">{discount}%</span>
        </div>
      )}
      
      <div className="price-div">
        { discount === '0' ? (
          <span className="price">{price}$</span>
        ) : (
          <span id="deletedPrice" className="price deletedPrice">{price}$<span id="newPrice" className="newPrice">{price - (Number(discount)*0.01) * price}$</span></span>
        )}
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
