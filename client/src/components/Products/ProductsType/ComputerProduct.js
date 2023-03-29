import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router";
import { addProduct, editOneProduct } from "../../../services/productService";
import { convertToBase64 } from "../../../services/userService";

export default function ComputerProduct({ mode, data }) {
  const [products, setProducts] = useState({
    manufacturer: "",
    motherboard: "",
    processor: "",
    videocard: "",
    os: "",
    ssd: "",
    harddrive: "",
    price: "",
    images: [],
  });
  const [error, setError] = useState({});
  const [mainError, setMainError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  let formClassName = isLoading ? "add-form blurred" : "add-form";
  const navigate = useNavigate();

  const validateInput = useCallback(
    (e, type) => {
      if (e.target.value === "") {
        setError({ ...error, [type]: `${type} is required` });
      } else if(type === 'Price' && isNaN(Number(e.target.value))){
        setError({...error, [type]: `Price must be a valid number!`})
      }else {
        setError({ ...error, [type]: "" });
      }
    },
    [error]
  );

  const onAddHandler = useCallback(
    async (e) => {
      e.preventDefault();
      setIsLoading(true);
      let request;
      if (mode === undefined) {
        request = await addProduct(products, "Computers");
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
    },
    [mode, navigate, products]
  );

  useEffect(() => {
    if (data !== undefined) {
      setProducts(data);
    }
  }, [data]);

  return (
    <>
      {isLoading && <span className="loader"></span>}
      <form className={formClassName} onSubmit={onAddHandler}>
        {mainError && <p className="main-error">{mainError}</p>}
        <div className="inputs">
          <div className="left-input">
            <div className="manufacturer">
              <input
                type="text"
                onChange={(e) =>
                  setProducts({ ...products, manufacturer: e.target.value })
                }
                onBlur={(e) => validateInput(e, "Manufacturer")}
                value={products?.manufacturer || ""}
              />
              <span className={products.manufacturer ? "value-there" : ""}>
                Manufacturer
              </span>
              {error.Manufacturer && (
                <p className="error">{error.Manufacturer}</p>
              )}
            </div>
            <div className="motherboard">
              <input
                type="text"
                onChange={(e) =>
                  setProducts({ ...products, motherboard: e.target.value })
                }
                onBlur={(e) => validateInput(e, "Motherboard")}
                value={products?.motherboard || ""}
              />
              <span className={products.motherboard ? "value-there" : ""}>
                Motherboard
              </span>
              {error.Motherboard && (
                <p className="error">{error.Motherboard}</p>
              )}
            </div>
            <div className="processor">
              <input
                type="text"
                onChange={(e) =>
                  setProducts({ ...products, processor: e.target.value })
                }
                onBlur={(e) => validateInput(e, "Processor")}
                value={products?.processor || ""}
              />
              <span className={products.processor ? "value-there" : ""}>
                Processor
              </span>
              {error.Processor && <p className="error">{error.Processor}</p>}
            </div>
            <div className="videocard">
              <input
                type="text"
                onChange={(e) =>
                  setProducts({ ...products, videocard: e.target.value })
                }
                onBlur={(e) => validateInput(e, "Videocard")}
                value={products?.videocard || ""}
              />
              <span className={products.videocard ? "value-there" : ""}>
                Videocard
              </span>
              {error.Videocard && <p className="error">{error.Videocard}</p>}
            </div>
            <div className="avatar">
              <label htmlFor="avatar">
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
                    <i className="fa-solid fa-plus"></i>Add Images
              </label>
            </div>
          </div>
          <div className="right-input">
            <div className="os">
              <input
                type="text"
                onChange={(e) =>
                  setProducts({ ...products, os: e.target.value })
                }
                onBlur={(e) => validateInput(e, "Os")}
                value={products?.os || ""}
              />
              <span className={products.os ? "value-there" : ""}>
                Operation System
              </span>
              {error.Os && <p className="error">{error.Os}</p>}
            </div>
            <div className="ssd">
              <input
                type="text"
                onChange={(e) =>
                  setProducts({ ...products, ssd: e.target.value })
                }
                onBlur={(e) => validateInput(e, "Ssd")}
                value={products?.ssd || ""}
              />
              <span className={products.ssd ? "value-there" : ""}>SSD</span>
              {error.Ssd && <p className="error">{error.Ssd}</p>}
            </div>
            <div className="harddrive">
              <input
                type="text"
                onChange={(e) =>
                  setProducts({ ...products, harddrive: e.target.value })
                }
                onBlur={(e) => validateInput(e, "Harddrive")}
                value={products?.harddrive || ""}
              />
              <span className={products.harddrive ? "value-there" : ""}>
                Hard Drive
              </span>
              {error.Harddrive && <p className="error">{error.Harddrive}</p>}
            </div>
            <div className="price" id="price">
              <input
                type="text"
                onChange={(e) =>
                  setProducts({ ...products, price: e.target.value })
                }
                onBlur={(e) => validateInput(e, "Price")}
                value={products?.price || ""}
              />
              <span className={products.price ? "value-there" : ""}>Price</span>
              {error.Price && <p className="error">{error.Price}</p>}
            </div>
          </div>
        </div>
        {products.images && mode === undefined && (
          <div className="images">
            {products.images.map((e, index) => (
              <img src={e} key={`${e.imageId}-${index}`} className="mini-img" alt="" />
            ))}
          </div>
        )}
        {products.images && mode === "edit" && (
          <div className="images">
            {products.images.map((e, index) => (
              <img
                src={e.imageUrl}
                key={`${e.imageId}-${index}`}
                className="mini-img"
                alt=""
              />
            ))}
          </div>
        )}

        <input
          type="submit"
          disabled={Object.values(error).some((e) => e.length > 0) || Object.values(products).some((e) => e.length === 0)}
          onClick={() => setMainError("")}
          value="Add Product"
          className="add-btn"
        />
      </form>
    </>
  );
}
