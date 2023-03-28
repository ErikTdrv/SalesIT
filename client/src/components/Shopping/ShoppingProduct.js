import React from "react";
import { Link } from "react-router-dom";

export default function ShoppingProduct({ product, removeProduct, mode,  products }) {
  return (
    <article className="card__product">
      <img src={product.images[0].imageUrl} alt="product-img" />
      <h1>
        {product?.manufacturer}
        {product?.phonename}
      </h1>
      <span className="product__price">
        {product.discount > 0
          ? (
              product.price -
              Number(product.discount) * 0.01 * product.price
            ).toFixed(2) + `$`
          : `${Number(product.price).toFixed(2)}$`}
      </span>
      {!mode && <button onClick={() => {
        removeProduct(product._id)
      }}>Remove</button>}
      
      <Link to={`/all-products/${product._id}`}>
        <button>Details</button>
      </Link>
    </article>
  );
}
