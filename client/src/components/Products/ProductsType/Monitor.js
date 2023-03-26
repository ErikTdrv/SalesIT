import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { addProduct, editOneProduct } from "../../../services/productService";
import { convertToBase64 } from "../../../services/userService";

export default function Monitor({ mode, data }) {
  let [products, setProducts] = useState({manufacturer: '', screensize: '',resolution: '', refreshrate: '',paneltype:'', price:'', images: []});
  let [error, setError] = useState({});
  let [mainError, setMainError] = useState("");
  let [isLoading, setIsLoading] = useState(false);
  let formClassName = isLoading ? "add-form blurred" : "add-form";
  let navigate = useNavigate();

  useEffect(() => {
    if (data !== undefined) {
      setProducts(data);
    }
  }, []);
  async function addMonitorHandler(e) {
    e.preventDefault();
    setIsLoading(true);
    let request;
    if (mode === undefined) {
      request = await addProduct(products, "Monitors");
    } else if (mode === "edit") {
      request = await editOneProduct(products, products._id);
    }
    if (request.message) {
      return setMainError(request.message.split(": ")[2].split(", ")[0]);
    }
    if (request._id && mode === undefined) {
      setIsLoading(false);
      navigate("/");
    } else if (mode === "edit") {
      setIsLoading(false);
      navigate(`/all-products/${products._id}`);
    }
  }
  function validateInput(e, type) {
    if (e.target.value === "") {
      setError({ ...error, [type]: `${type} is required` });
    } else {
      setError({ ...error, [type]: "" });
    }
  }
  return (
    <>
      {isLoading && <span className="loader"></span>}
      <form className={formClassName} onSubmit={addMonitorHandler}>
        {mainError && <p className="main-error">{mainError}</p>}
        <div className="inputs">
          <div className="left-input">
            <div>
              <input
                type="text"
                onChange={(e) =>
                  setProducts({ ...products, manufacturer: e.target.value })
                }
                onBlur={(e) => validateInput(e, "Manufacturer")}
                value={products.manufacturer || ""}
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
                  setProducts({ ...products, screensize: e.target.value })
                }
                onBlur={(e) => validateInput(e, "Screen Size")}
                value={products.screensize || ""}
              />
              <span className={products.screensize ? "value-there" : ""}>
                Screen Size
              </span>
              {error["Screen Size"] && (
                <p className="error">{error["Screen Size"]}</p>
              )}
            </div>
            <div>
              <input
                type="text"
                onChange={(e) =>
                  setProducts({ ...products, resolution: e.target.value })
                }
                onBlur={(e) => validateInput(e, "Resolution")}
                value={products.resolution || ""}
              />
              <span className={products.resolution ? "value-there" : ""}>
                Resolution
              </span>
              {error.Resolution && <p className="error">{error.Resolution}</p>}
            </div>
            <div className="avatar">
              <label htmlFor="avatar">
                <i className="fa-solid fa-plus"></i>Add Images
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
                    </label>
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
                value={products.refreshrate || ""}
              />
              <span className={products.refreshrate ? "value-there" : ""}>
                Refresh Rate
              </span>
              {error["Refresh Rate"] && (
                <p className="error">{error["Refresh Rate"]}</p>
              )}
            </div>
            <div>
              <input
                type="text"
                onChange={(e) =>
                  setProducts({ ...products, paneltype: e.target.value })
                }
                onBlur={(e) => validateInput(e, "Panel Type")}
                value={products.paneltype || ""}
              />
              <span className={products.paneltype ? "value-there" : ""}>
                Panel Type
              </span>
              {error["Panel Type"] && (
                <p className="error">{error["Panel Type"]}</p>
              )}
            </div>
            <div className="price" id="price">
              <input
                type="text"
                onChange={(e) =>
                  setProducts({ ...products, price: e.target.value })
                }
                onBlur={(e) => validateInput(e, "Price")}
                value={products.price || ""}
              />
              <span className={products.price ? "value-there" : ""}>Price</span>
              {error.Price && <p className="error">{error.Price}</p>}
            </div>
          </div>
        </div>
        <input
          type="submit"
          value="Add Product"
          disabled={Object.values(error).some((e) => e.length > 0) || Object.values(products).some((e) => e.length === 0)}
          className="add-btn"
          onClick={() => setMainError("")}
        />
      </form>
      {products.images && mode === undefined && (
        <div className="images">
          {products.images.map((e) => (
            <img src={e} key={e.imageId} className="mini-img" alt="no-img" />
          ))}
        </div>
      )}
      {products.images && mode === "edit" && (
        <div className="images">
          {products.images.map((e) => (
            <img src={e.imageUrl} key={e.imageId} className="mini-img" alt="no-img" />
          ))}
        </div>
      )}
    </>
  );
}
