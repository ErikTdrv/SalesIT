import React, { useEffect, useState } from "react";
import {
  getProductCard,
  removeProductFromCard,
} from "../../services/productService";
import "./Shopping.css";
import { getProfileProducts } from "../../services/userService";
import ShoppingProduct from "./ShoppingProduct";

export default function ShoppingCard({ mode, user }) {
  let [products, setProducts] = useState();
  let [isLoading, setIsLoading] = useState(true);
  let [index, setIndex] = useState(0);
  let [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    async function getProducts() {
      let products;
      if (mode === "profile") {
        products = await getProfileProducts();
      }else if(mode === 'global'){
        products = [...user?.createdComputers, ...user?.createdMonitors, ...user?.createdPhones];
      }else {
        products = await getProductCard();
      }
      setProducts(products);
      setIsLoading(false);
      settingTotalPrice(products)
    }
    getProducts();
  }, []);
  function settingTotalPrice(currProducts){
    if(currProducts?.length > 0){
      setTotalPrice(currProducts?.reduce((acc, { price, discount }) => {
        if(discount > 0){
          price = price - (price*(discount/100))
        }
        return Number(acc) + Number(price)
      }, 0))
    }
  }
  async function removeProduct(productId) {
    await removeProductFromCard(productId);
    let updatedProducts = products.filter(
      (product) => product._id !== productId
    );
    settingTotalPrice(updatedProducts)
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
      {!isLoading && products?.length > 0 ? (
        <div className="shopping-container">
          {mode === "profile" ? (
            <h1>Profile Products</h1>
          ) : (
            <h1>Shopping Card</h1>
          )}
          <div className="card__products">
            <h3>All Added Products</h3>
            <section className="card__section">
              {
                products.slice(index, index + 4).map((product) => {
                  return <ShoppingProduct key={product._id} product={product} removeProduct={removeProduct} mode={mode}/>
                })
              }
            </section>
            <div className="switch__buttons">
              <button className="switchers" onClick={() => validateIndex("-")}>
                &#60;
              </button>
              <button className="switchers" onClick={() => validateIndex("+")}>
                &#62;
              </button>
            </div>
            <span className="total-price">Total Price: {totalPrice.toFixed(2)}$</span>
          </div>
          {mode !== "profile" && mode !== 'global' && <button className="buy-btn">Buy</button>}
        </div>
      ) : (
        <div className="shopping-container">
          {mode === 'global' || mode === "profile" && <h1>Profile Products</h1>}
          {mode !== 'global' && mode !== 'profile' && <h1>Shopping Card</h1>}
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
