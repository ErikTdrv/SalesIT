import React, { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import {
  addProductToCard,
  deleteOneProduct,
  getOneProduct,
  removeProductFromCard,
} from "../../../services/productService";
import { DetailsInfo } from "./DetailsInfo";
import "./ProductDetails.css";

export default function ProductDetails() {
  const { user, isAuth } = useContext(AuthContext);
  const { productId } = useParams();
  const [index, setIndex] = useState(1);
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [productType, setProductType] = useState("");
  const [isOwner, setIsOwner] = useState();
  const [isAdded, setAlreadyAdded] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    async function getData() {
      const data = await getOneProduct(productId);
      setProduct(data);
      const { owner } = data;
      setIsOwner(owner._id === user._id);
      const alreadyAdded = user.addedProducts?.some((e) => e._id === data._id);
      setAlreadyAdded(alreadyAdded ? true : false);
      if (data.phonename) {
        setProductType("Phones");
      } else if (data.paneltype) {
        setProductType("Monitors");
      } else if (data.motherboard) {
        setProductType("Computers");
      }
      setIsLoading(false);
    }
    getData();
  }, []);

  function changeIndex(type) {
    if (index === 0 && type === "+" && index + 1 < product.images.length) {
      setIndex(index + 1);
    } else if (index > 0 && type === "-" && index + 1 < product.images.length) {
      setIndex(index - 1);
    }
  }
  async function deleteProduct() {
    let request = await deleteOneProduct(product._id, productType);
    navigate("/all-products");
  }
  return (
    <>
      {isLoading == false ? (
        <div className="details-container">
          <div className="edit-image-div">
            <img
              src={product.images[0].imageUrl || ""}
              alt=""
              className="details__image"
            />
            {product?.images[1] && (
              <div className="image__switcher">
                <button onClick={() => changeIndex("-")}>&#60;</button>
                <section className="image__section">
                  <div className="div">
                    <img
                      src={product.images[index]?.imageUrl}
                      className="images"
                      alt=""
                    />
                  </div>
                  <div className="div">
                    <img
                      src={product.images[index + 1]?.imageUrl}
                      className="images"
                      alt=""
                    />
                  </div>
                  <div className="div">
                    <img
                      src={product.images[index + 2]?.imageUrl}
                      className="images"
                      alt=""
                    />
                  </div>
                </section>
                <button onClick={() => changeIndex("+")}>&#62;</button>
              </div>
            )}

            <div className="buttons">
              <button onClick={() => navigate('/all-products')}>Back</button>
              {isOwner && (
                <>
                  <button onClick={deleteProduct}>Delete</button>
                  <button>Edit</button>
                  <button>Add Discount</button>
                </>
              )}
              {isAdded === false && isAuth === true ? (
                <button onClick={() => {
                  addProductToCard(productId, product)
                  setAlreadyAdded(true)
                }}>
                  Add to Card
                </button>
              ) : (
                ""
              )}
              {isAdded === true && isAuth === true ? (
                <button
                  onClick={() => {
                    removeProductFromCard(productId);
                    setAlreadyAdded(false);
                  }}
                >
                  Remove From Card
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
          <DetailsInfo product={product}/>
        </div>
      ) : (
        <h1>IS LOADING</h1>
      )}
    </>
  );
}
