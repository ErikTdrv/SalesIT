import React, { useEffect, useState } from "react";
import {
  getProductCard,
  removeProductFromCard,
} from "../../services/productService";
import "./Shopping.css";
import { Link } from "react-router-dom";

export default function ShoppingCard() {
  let [products, setProducts] = useState();
  let [isLoading, setIsLoading] = useState(true);
  let [index, setIndex] = useState(0);
  let [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    async function getProducts() {
      let products = await getProductCard();
      setProducts(products);
      setIsLoading(false);
      setTotalPrice(
        products.reduce((acc, { price }) => Number(acc) + Number(price), 0)
      );
    }
    getProducts();
  }, []);
  async function removeProduct(productId) {
    await removeProductFromCard(productId);
    let updatedProducts = products.filter(
      (product) => product._id !== productId
    );
    setProducts(updatedProducts);
  }
  function validateIndex(type) {
    if (type === "+" && index + 4 < products.length) {
      setIndex(index + 1);
    } else if (index > 0 && type === "-") {
      setIndex(index - 1);
    }
  }
  return (
    <>
      {!isLoading && products.length > 0 ? (
        <div className="shopping-container">
          <h1>Shopping Card</h1>
          <div className="card__products">
            <h3>All Added Products</h3>
            <section className="card__section">
              {products[index] && (
                <article className="card__product">
                  <img src={products[index]?.images[0].imageUrl} alt="" />
                  <h1>
                    {products[index]?.manufacturer}
                    {products[index]?.phonename}
                  </h1>
                  <span className="product__price">
                    {products[index]?.price}$
                  </span>
                  <button onClick={() => removeProduct(products[index]._id)}>
                    Remove
                  </button>
                  <Link to={`/all-products/${products[index]?._id}`}>
                    <button>Details</button>
                  </Link>
                </article>
              )}
              {products[index + 1] && (
                <article className="card__product">
                  <img src={products[index + 1]?.images[0].imageUrl} alt="" />
                  <h1>
                    {products[index + 1]?.manufacturer}
                    {products[index + 1]?.phonename}
                  </h1>
                  <span className="product__price">
                    {products[index + 1]?.price}$
                  </span>
                  <button
                    onClick={() => removeProduct(products[index + 1]._id)}
                  >
                    Remove
                  </button>
                  <Link to={`/all-products/${products[index + 1]?._id}`}>
                    <button>Details</button>
                  </Link>
                </article>
              )}
              {products[index + 2] && (
                <article className="card__product">
                  <img src={products[index + 2]?.images[0].imageUrl} alt="" />
                  <h1>
                    {products[index + 2]?.manufacturer}
                    {products[index + 2]?.phonename}
                  </h1>
                  <span className="product__price">
                    {products[index + 2]?.price}$
                  </span>
                  <button
                    onClick={() => removeProduct(products[index + 2]._id)}
                  >
                    Remove
                  </button>
                  <Link to={`/all-products/${products[index + 2]?._id}`}>
                    <button>Details</button>
                  </Link>
                </article>
              )}
              {products[index + 3] && (
                <article className="card__product">
                  <img src={products[index + 3]?.images[0].imageUrl} alt="" />
                  <h1>
                    {products[index + 3]?.manufacturer}
                    {products[index + 3]?.phonename}
                  </h1>
                  <span className="product__price">
                    {products[index + 3]?.price}$
                  </span>
                  <button
                    onClick={() => removeProduct(products[index + 3]._id)}
                  >
                    Remove
                  </button>
                  <Link to={`/all-products/${products[index + 3]?._id}`}>
                    <button>Details</button>
                  </Link>
                </article>
              )}
            </section>
            <div className="switch__buttons">
              <button className="switchers" onClick={() => validateIndex("-")}>
                &#60;
              </button>
              <button className="switchers" onClick={() => validateIndex("+")}>
                &#62;
              </button>
            </div>
            <span className="total-price">Total Price: {totalPrice}$</span>
          </div>
          <button className="buy-btn">Buy</button>
        </div>
      ) : (
        <div className="shopping-container">
          <h1>Shopping Card</h1>
          <div className="card__products">
            {products?.length === 0 ? (
              <h3>No Added Products</h3>
            ) : (
              <span className="loader"></span>
            )}
          </div>
        </div>
      )}
    </>
  );
}
