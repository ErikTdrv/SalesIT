import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../../contexts/AuthContext";
import { addProduct, editOneProduct } from "../../../services/productService";
import { convertToBase64 } from "../../../services/userService";

export default function PhoneProduct({ mode, data }) {
  const [products, setProducts] = useState({phonename: '',capacity: '', displaysize: '',color:'', camera:'',price: '', battery: '', os:'',images:[]});
  const [error, setError] = useState({});
  const [mainError, setMainError] = useState("");
  const [isLoading, setIsLoading] = useState(false)
  const formClassName = isLoading ? "add-form blurred" : "add-form";
  const navigate = useNavigate();
  useEffect(() => {
    if (data !== undefined) {
      setProducts(data);
    }
  }, []);
  function validateInput(e, type) {
    if (e.target.value === "") {
      setError({ ...error, [type]: `${type} is required` });
    }else if(type === 'price' && isNaN(Number(e.target.value))){
      setError({...error, [type]: `Price must be a valid number!`})
    } else {
      setError({ ...error, [type]: "" });
    }
  }
  async function addPhoneProduct(e) {
    e.preventDefault();
    setIsLoading(true)
    let request;
    if (mode === undefined) {
      request = await addProduct(products, "Phones");
    } else if (mode === "edit") {
      request = await editOneProduct(products, products._id, "Phones");
    }
    if (request.message) {
      setIsLoading(false)
      return setMainError(request.message.split(": ")[2].split(", ")[0] || request.message);
    }
    if (request._id && mode === undefined) {
      setIsLoading(false)
      navigate("/");
    } else if (mode === "edit") {
      setIsLoading(false)
      navigate(`/all-products/${products._id}`);
    }
  }
  return (
    <>
    {isLoading && <span className="loader"></span>}
    <form className={formClassName} onSubmit={addPhoneProduct}>
      {mainError && <p className="main-error">{mainError}</p>}
      <div className="inputs">
        <div className="left-input">
          <div>
            <input
              type="text"
              onChange={(e) =>
                setProducts({ ...products, phonename: e.target.value })
              }
              onBlur={(e) => validateInput(e, "phonename")}
              value={products.phonename || ""}
            />
            <span className={products.phonename ? "value-there" : ""}>
              Phone Name
            </span>
            {error.phonename && (
              <p className="error">Phone Name is required!</p>
            )}
          </div>
          <div>
            <input
              type="text"
              onChange={(e) =>
                setProducts({ ...products, capacity: e.target.value })
              }
              onBlur={(e) => validateInput(e, "capacity")}
              value={products.capacity || ""}
            />
            <span className={products.capacity ? "value-there" : ""}>
              Capacity
            </span>
            {error.capacity && <p className="error">Capacity is required!</p>}
          </div>
          <div>
            <input
              type="text"
              onChange={(e) =>
                setProducts({ ...products, displaysize: e.target.value })
              }
              onBlur={(e) => validateInput(e, "displaysize")}
              value={products.displaysize || ""}
            />
            <span className={products.displaysize ? "value-there" : ""}>
              Display Size
            </span>
            {error.displaysize && (
              <p className="error">Display Size is required!</p>
            )}
          </div>
          <div>
            <input
              type="text"
              onChange={(e) =>
                setProducts({ ...products, color: e.target.value })
              }
              onBlur={(e) => validateInput(e, "color")}
              value={products.color || ""}
            />
            <span className={products.color ? "value-there" : ""}>Color</span>
            {error.color && <p className="error">Color is required!</p>}
          </div>
          <div className="avatar">
            <label htmlFor="avatar">
              <i className="fa-solid fa-plus"></i>Add Images
            </label>
            <input
              type="file"
              multiple
              name="avatar"
              id="avatar"
              onChange={async (e) =>
                setProducts({
                  ...products,
                  images: await Promise.all(
                    Array.from(e.target.files).map(
                      async (e) => await convertToBase64(e)
                    )
                  ),
                })
              }
            />
          </div>
        </div>
        <div className="right-input">
          <div>
            <input
              type="text"
              onChange={(e) =>
                setProducts({ ...products, camera: e.target.value })
              }
              onBlur={(e) => validateInput(e, "camera")}
              value={products.camera || ""}
            />
            <span className={products.camera ? "value-there" : ""}>Camera</span>
            {error.camera && <p className="error">Camera is required!</p>}
          </div>
          <div>
            <input
              type="text"
              onChange={(e) =>
                setProducts({ ...products, battery: e.target.value })
              }
              onBlur={(e) => validateInput(e, "battery")}
              value={products.battery || ""}
            />
            <span className={products.battery ? "value-there" : ""}>
              Battery
            </span>
            {error.battery && <p className="error">Battery is required!</p>}
          </div>
          <div>
            <input
              type="text"
              onChange={(e) => setProducts({ ...products, os: e.target.value })}
              onBlur={(e) => validateInput(e, "os")}
              value={products.os || ""}
            />
            <span className={products.os ? "value-there" : ""}>
              Operating System
            </span>
            {error.os && <p className="error">Operation System is required!</p>}
          </div>
          <div className="price" id="price">
            <input
              type="text"
              onChange={(e) =>
                setProducts({ ...products, price: e.target.value })
              }
              onBlur={(e) => validateInput(e, "price")}
              value={products.price || ""}
            />
            <span className={products.price ? "value-there" : ""}>Price</span>
            {error.price && <p className="error">{error.price}</p>}
          </div>
        </div>
      </div>

      {products.images && mode === undefined && (
        <div className="images">
          {products.images.map((e, index) => (
            <img src={e} key={`${e.imageId}-${index}`} className="mini-img" alt="no-img" />
          ))}
        </div>
      )}
      {products.images && mode === "edit" && (
        <div className="images">
          {products.images.map((e, index) => (
            <img
              src={e.imageUrl || e}
              key={`${e.imageId}-${index}`}
              className="mini-img"
              alt="no-img"
            />
          ))}
        </div>
      )}
      <input
        type="submit"
        value="Add Product"
        onClick={() => setMainError("")}
        disabled={
          Object.values(error).some((e) => e.length > 0) ||
          Object.values(products).some((e) => e.length === 0) || 
          isLoading
        }
        className="add-btn"
      />
    </form>
    </>
  );
}
