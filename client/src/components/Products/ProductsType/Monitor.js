import React, { useState } from "react";
import { addProduct } from "../../../services/productService";

export default function MonitorProduct() {
  let [products, setProducts] = useState({});
  let [error, setError] = useState({});
  let [disabled, setDisabled] = useState(true);

  async function convertToBase64(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  }
  async function addMonitorHandler(e) {
    e.preventDefault();
    addProduct(products, "Monitors");
  }
  function validateInput(e, type) {
    if (e.target.value === "") {
      if (type === "Screen Resolution") {
        setError({
          ...error,
          screenresolution: `Screen Resolution is required!`,
        });
      } else if (type === "Refresh Rate") {
        setError({ ...error, refreshrate: `Refresh Rate is required!` });
      } else if (type === "Panel Type") {
        setError({ ...error, paneltype: `Panel Type is required!` });
      } else {
        setError({ ...error, [type]: `${type} is required` });
      }
      setDisabled(true);
    } else {
      setDisabled(false);
      if (type === "Screen Resolution") {
        setError({ ...error, screenresolution: `` });
      } else if (type === "Refresh Rate") {
        setError({ ...error, refreshrate: `` });
      } else if (type === "Panel Type") {
        setError({ ...error, paneltype: `` });
      } else {
        setError({ ...error, [type]: "" });
      }
    }
  }
  return (
    <>
      <form className="add-form" onSubmit={addMonitorHandler}>
        <div className="inputs">
          <div className="left-input">
            <div>
              <input
                type="text"
                onChange={(e) =>
                  setProducts({ ...products, manufacturer: e.target.value })
                }
                onBlur={(e) => validateInput(e, "Manufacturer")}
              />
              <span className={products.manufacturer ? "value-there" : ""}>
                Manufacturer
              </span>
              {error.Manufacturer && (
                <p className="error">{error.Manufacturer}</p>
              )}
            </div>
            <div>
              <input
                type="text"
                onChange={(e) =>
                  setProducts({ ...products, screenresolution: e.target.value })
                }
                onBlur={(e) => validateInput(e, "Screen Resolution")}
              />
              <span className={products.screenresolution ? "value-there" : ""}>
                Screen Resolution
              </span>
              {error.screenresolution && (
                <p className="error">{error.screenresolution}</p>
              )}
            </div>
            <div>
              <input
                type="text"
                onChange={(e) =>
                  setProducts({ ...products, resolution: e.target.value })
                }
                onBlur={(e) => validateInput(e, "Resolution")}
              />
              <span className={products.resolution ? "value-there" : ""}>
                Resolution
              </span>
              {error.Resolution && <p className="error">{error.Resolution}</p>}
            </div>
            <div className="avatar">
              <label htmlFor="avatar">
                <i className="fa-solid fa-plus"></i>Add avatar
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
                  setProducts({ ...products, refreshrate: e.target.value })
                }
                onBlur={(e) => validateInput(e, "Refresh Rate")}
              />
              <span
                className={
                  products.refreshrate ? "value-there" : "videocard-span"
                }
              >
                Refresh Rate
              </span>
              {error.refreshrate && (
                <p className="error">{error.refreshrate}</p>
              )}
            </div>
            <div>
              <input
                type="text"
                onChange={(e) =>
                  setProducts({ ...products, paneltype: e.target.value })
                }
                onBlur={(e) => validateInput(e, "Panel Type")}
              />
              <span className={products.paneltype ? "value-there" : ""}>
                Panel Type
              </span>
              {error.paneltype && <p className="error">{error.paneltype}</p>}
            </div>
            <div className="price" id="price">
              <input
                type="text"
                onChange={(e) =>
                  setProducts({ ...products, price: e.target.value })
                }
                onBlur={(e) => validateInput(e, "Price")}
              />
              <span className={products.price ? "value-there" : ""}>Price</span>
              {error.Price && <p className="error">{error.Price}</p>}
            </div>
          </div>
        </div>
        <input
          type="submit"
          value="Add Product"
          disabled={disabled}
          className="add-btn"
        />
      </form>
      {products.images && (
        <div className="images">
          {products.images.map((e) => (
            <img src={e} className="mini-img" alt="" />
          ))}
        </div>
      )}
    </>
  );
}
