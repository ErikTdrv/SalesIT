import React from "react";
import { removeProductFromCard } from "../../services/productService";

export default function ProductCard({ product, removeProduct }) {
  return (
    <article className="card__product">
      <img src={product.images[0].imageUrl} alt="" />
      <h1>
        {product?.manufacturer}
        {product?.phonename}
      </h1>
      <span className="product__price">{product?.price}$</span>
      <button onClick={() => removeProduct(product._id)}>Remove</button>
      <button>Details</button>
    </article>
  );
}
