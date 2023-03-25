import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../services/productService";
import Computer from "../Computer/Computer";
import HomeFooter from "../Home/Home-Footer/Footer";
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
      console.log(computers);
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
                    if (minPrice === undefined && maxPrice === undefined) {
                      return <Computer key={computer._id} product={computer} />;
                    } else if (
                      minPrice === 2000 &&
                      maxPrice === undefined &&
                      computer.price >= 2000
                    ) {
                      return <Computer key={computer._id} product={computer} />;
                    } else if (
                      minPrice !== undefined &&
                      maxPrice !== undefined &&
                      computer.price >= minPrice &&
                      computer.price <= maxPrice
                    ) {
                      return <Computer key={computer._id} product={computer} />;
                    }
                  })}
                {monitors &&
                  (productFilter === "all" || productFilter === "monitors") &&
                  monitors.map((monitor) => {
                    if (minPrice === undefined && maxPrice === undefined) {
                      return <Computer key={monitor._id} product={monitor} />;
                    } else if (
                      minPrice === 2000 &&
                      maxPrice === undefined &&
                      monitor.price >= 2000
                    ) {
                      return <Computer key={monitor._id} product={monitor} />;
                    } else if (
                      minPrice !== undefined &&
                      maxPrice !== undefined &&
                      monitor.price >= minPrice &&
                      monitor.price <= maxPrice
                    ) {
                      return <Computer key={monitor._id} product={monitor} />;
                    }
                  })}
                {phones &&
                  (productFilter === "all" || productFilter === "phones") &&
                  phones.map((phone) => {
                    if (minPrice === undefined && maxPrice === undefined) {
                      return <Computer key={phone._id} product={phone} />;
                    } else if (
                      minPrice === 2000 &&
                      maxPrice === undefined &&
                      phone.price >= 2000
                    ) {
                      return <Computer key={phone._id} product={phone} />;
                    } else if (
                      minPrice !== undefined &&
                      maxPrice !== undefined &&
                      phone.price >= minPrice &&
                      phone.price <= maxPrice
                    ) {
                      return <Computer key={phone._id} product={phone} />;
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
