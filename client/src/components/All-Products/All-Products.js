import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../services/productService";
import Product from "../Product/Product";
import HomeFooter from "../Main/Home-Footer/Footer";
import "./All-Products.css";
import Filter from "./Filter";

export default function AllItems() {
  const [productFilter, setProductFilter] = useState("all");
  const [computers, setComputers] = useState([]);
  const [monitors, setMonitors] = useState([]);
  const [phones, setPhones] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [maxPrice, setMaxPrice] = useState(undefined);
  const [minPrice, setMinPrice] = useState(undefined);
  useEffect(() => {
    async function getData() {
      let data = await getAllProducts();
      const { computers, phones, monitors } = data;
      setComputers(computers);
      setMonitors(monitors);
      setPhones(phones);
      setIsLoading(false);
    }
    getData();
  }, []);
  function handlePriceFilter(minValue, maxValue) {
    setMaxPrice(maxValue);
    setMinPrice(minValue);
  }
  return (
    <>
      {!isLoading ? (
        <>
          <div className="all-container">
            <h1 className="main-title">All Items</h1>
            <div className="choosable">
              <button
                className={
                  productFilter === "all" ? "clicked all-btn" : "all-btn"
                }
                onClick={() => setProductFilter("all")}
              >
                All
              </button>
              <button
                className={
                  productFilter === "computers"
                    ? "clicked computers-btn"
                    : "computers-btn"
                }
                onClick={() => setProductFilter("computers")}
              >
                Computers
              </button>
              <button
                className={
                  productFilter === "monitors"
                    ? "clicked monitors-btn"
                    : "monitors-btn"
                }
                onClick={() => setProductFilter("monitors")}
              >
                Monitors
              </button>
              <button
                className={
                  productFilter === "phones"
                    ? "clicked phones-btn"
                    : "phones-btn"
                }
                onClick={() => setProductFilter("phones")}
              >
                Phones
              </button>
            </div>
            <section className="items-to-show">
              <Filter onPriceFilter={handlePriceFilter} />
              <article className="items">
                {computers &&
                  (productFilter === "all" || productFilter === "computers") &&
                  computers.map((computer) => {
                    let percentage = computer.discount > 0 ? computer.discount/100 : 1
                    if (minPrice === undefined && maxPrice === undefined) {
                      return <Product key={computer._id} product={computer} />;
                    } else if (
                      minPrice === 2000 &&
                      maxPrice === undefined &&
                      computer.price * percentage >= 2000
                    ) {
                      return <Product key={computer._id} product={computer} />;
                    } else if (
                      minPrice !== undefined &&
                      maxPrice !== undefined &&
                      computer.price * percentage >= minPrice &&
                      computer.price * percentage <= maxPrice
                    ) {
                      return <Product key={computer._id} product={computer} />;
                    }
                  })}
                {monitors &&
                  (productFilter === "all" || productFilter === "monitors") &&
                  monitors.map((monitor) => {
                    let percentage = monitor.discount > 0 ? monitor.discount/100 : 1
                    if (minPrice === undefined && maxPrice === undefined) {
                      return <Product key={monitor._id} product={monitor} />;
                    } else if (
                      minPrice === 2000 &&
                      maxPrice === undefined &&
                      monitor.price * percentage >= 2000
                    ) {
                      return <Product key={monitor._id} product={monitor} />;
                    } else if (
                      minPrice !== undefined &&
                      maxPrice !== undefined &&
                      monitor.price * percentage >= minPrice &&
                      monitor.price * percentage <= maxPrice
                    ) {
                      return <Product key={monitor._id} product={monitor} />;
                    }
                  })}
                {phones &&
                  (productFilter === "all" || productFilter === "phones") &&
                  phones.map((phone) => {
                    let percentage = phone.discount > 0 ? phone.discount/100 : 1

                    if (minPrice === undefined && maxPrice === undefined) {
                      return <Product key={phone._id} product={phone} />;
                    } else if (
                      minPrice === 2000 &&
                      maxPrice === undefined &&
                      phone.price * percentage >= 2000
                    ) {
                      return <Product key={phone._id} product={phone} />;
                    } else if (
                      minPrice !== undefined &&
                      maxPrice !== undefined &&
                      phone.price * percentage >= minPrice &&
                      phone.price * percentage <= maxPrice
                    ) {
                      return <Product key={phone._id} product={phone} />;
                    }
                  })}
              </article>
            </section>
          </div>
          <HomeFooter />
        </>
      ) : (
        <span className="loader"></span>
      )}
    </>
  );
}
