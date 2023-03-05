import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../services/productService";
import Computer from "../Computer/Computer";
import HomeFooter from "../Home/Home-Footer/Footer";
import Monitor from "../Products/ProductsType/Monitor";
import "./All-Products.css";

export default function AllItems() {
  const [productFilter, setProductFilter] = useState('all');
  const [computers, setComputers] = useState([]);
  const [monitors, setMonitors] = useState([]);
  const [phones, setPhones] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    async function getData(){
      let data = await getAllProducts()
      const {computers, phones, monitors} = data;
      setComputers(computers)
      setMonitors(monitors)
      setPhones(phones)
      console.log(monitors)
    }
    getData()
  }, [])
  return (
    <>
      <div className="all-container">
        <h1 className="main-title">All Items</h1>
        <div className="choosable">
          <button className={productFilter === 'all' ? 'clicked all-btn' : 'all-btn'} onClick={() => setProductFilter('all')}>All</button>
          <button className={productFilter === 'computers' ? 'clicked computers-btn' : 'computers-btn'} onClick={() => setProductFilter('computers')}>Computers</button>
          <button className={productFilter === 'monitors' ? 'clicked monitors-btn' : 'monitors-btn'} onClick={() => setProductFilter('monitors')}>Monitors</button>
          <button className={productFilter === 'phones' ? 'clicked phones-btn' : 'phones-btn'} onClick={() => setProductFilter('phones')}>Phones</button>

        </div>
        <section className="items-to-show">
          <article className="filter">
            <h2>Filter</h2>
            <h4>Manufacturer</h4>
            <div className="all-inputs">
              <label htmlFor="ASUS">
                <input type="checkbox" id="ASUS" value="ASUS" />
                ASUS
              </label>
              <label htmlFor="Acer">
                <input type="checkbox" id="Acer" value="Acer" />
                Acer
              </label>
              <label htmlFor="HP">
                <input type="checkbox" id="HP" value="ASUS" />
                HP
              </label>
              <label htmlFor="Dell">
                <input type="checkbox" id="Dell" value="Dell" />
                Dell
              </label>
              <label htmlFor="Apple">
                <input type="checkbox" id="Apple" value="Apple" />
                Apple
              </label>
              <label htmlFor="Alienware">
                <input type="checkbox" id="Alienware" value="Alienware" />
                Alienware
              </label>
              <label htmlFor="MSI">
                <input type="checkbox" id="MSI" value="MSI" />
                MSI
              </label>
              <label htmlFor="Samsung">
                <input type="checkbox" id="Samsung" value="Samsung" />
                Samsung
              </label>
              <label htmlFor="Xiaomi">
                <input type="checkbox" id="Xiaomi" value="Xiaomi" />
                Xiaomi
              </label>
              <label htmlFor="Huawei">
                <input type="checkbox" id="Huawei" value="Huawei" />
                Huawei
              </label>
            </div>
            <h4>Price</h4>
            <div className="all-inputs">
              <label htmlFor="0">
                <input type="radio" id="0" name="price-range" value="0" />
                0$ - 200$
              </label>
              <label htmlFor="200-600">
                <input
                  type="radio"
                  id="200-600"
                  name="price-range"
                  value="200-600"
                />
                200$ - 600$
              </label>
              <label htmlFor="600-900">
                <input
                  type="radio"
                  id="600-900"
                  name="price-range"
                  value="600-900"
                />
                600$ - 900$
              </label>
              <label htmlFor="900-1400">
                <input
                  type="radio"
                  id="900-1400"
                  name="price-range"
                  value="900-1400"
                />
                900$-1400$
              </label>
              <label htmlFor="1400-2000">
                <input
                  type="radio"
                  id="1400-2000"
                  name="price-range"
                  value="1400-2000"
                />
                140$ - 2000$
              </label>
              <label htmlFor="2000">
                <input type="radio" id="2000" name="price-range" value="2000" />
                +2000$
              </label>
            </div>
          </article>
          <article className="items">
            { computers && (productFilter === 'all' || productFilter === 'computers') && computers.map((computer) => <Computer key={computer._id} product={computer} />)}
            { monitors && ( productFilter === 'all' || productFilter === 'monitors') && monitors.map((monitor) => <Computer key={monitor._id} product={monitor} />)}

          </article>
        </section>
      </div>
      <HomeFooter/>
    </>
  );

}
