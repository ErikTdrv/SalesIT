import React, { useEffect, useState } from "react";
import "./AddDiscount.css";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  addDiscount,
  getOneProduct,
} from "../../../../services/productService";

export default function AddDiscount() {
  let { productId } = useParams();
  const [discountPercentage, setDiscount] = useState("");
  const [productType, setProductType] = useState();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    async function getProduct() {
      let data = await getOneProduct(productId);
      setDiscount(data.discount);
      if (data.phonename) {
        setProductType("Phones");
      } else if (data.paneltype) {
        setProductType("Monitors");
      } else if (data.motherboard) {
        setProductType("Computers");
      }
    }
    getProduct();
  }, []);
  async function onAddDiscount() {
    if (discountPercentage < 0 || discountPercentage > 99) {
      return setError("Discount have to be between 1% - 99% !");
    } else {
      await addDiscount(discountPercentage, productId, productType);
    }
    navigate(`/all-products/${productId}`);
  }
  return (
    <>
      {discountPercentage !== "" ? (
        <div className="discount__container">
          <h1>Add Discount</h1>
          <div className="input__discount">
            <input
              type="number"
              id="percentage"
              name="percentage"
              min="0"
              max="100"
              step="5"
              value={discountPercentage}
              onChange={(e) => setDiscount(e.target.value)}
            />
            <span>%</span>
          </div>
          <div className="buttons">
            <Link to={`/all-products/${productId}`}>
              <button>Back</button>
            </Link>
            <button onClick={onAddDiscount}>Add</button>
          </div>
          {error && <p className="discount__error">{error}</p>}
        </div>
      ) : (
        <span className="loader"></span>
      )}
    </>
  );
}
