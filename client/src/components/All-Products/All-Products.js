import React from "react";
import HomeFooter from "../Home/Home-Footer/Footer";
import "./All-Products.css";

export default function AllItems() {
  return (
    <>
      <div className="all-container">
        <h1 className="main-title">All Items</h1>
        <div className="choosable">
          <button className="all-btn">All</button>
          <button className="computers-btn">Computers</button>
          <button className="monitors-btn">Monitors</button>
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
            <div className="computer__card">
              <img className="computer__image" src="computer.jpg" alt="" />
              <div className="computer__info">
                <h1 className="computer__title">Asus Veriton</h1>
                <hr />
                <span>
                  <i className="fa-solid fa-check"></i>New Model
                </span>
                <span>
                  <i className="fa-solid fa-check"></i>32GB RAM
                </span>
                <span>
                  <i className="fa-solid fa-check"></i>500GB SSD
                </span>
                <span>
                  <i className="fa-solid fa-check"></i>GeForce 3060 RTX
                </span>
                <span>
                  <i className="fa-solid fa-check"></i>Good Sustainability
                </span>
              </div>
              <button className="computer__button">Details</button>
            </div>
            <div className="computer__card">
              <img className="computer__image" src="computer.jpg" alt="" />
              <div className="computer__info">
                <h1 className="computer__title">Asus Veriton</h1>
                <hr />
                <span>
                  <i className="fa-solid fa-check"></i>New Model
                </span>
                <span>
                  <i className="fa-solid fa-check"></i>32GB RAM
                </span>
                <span>
                  <i className="fa-solid fa-check"></i>500GB SSD
                </span>
                <span>
                  <i className="fa-solid fa-check"></i>GeForce 3060 RTX
                </span>
                <span>
                  <i className="fa-solid fa-check"></i>Good Sustainability
                </span>
              </div>
              <button className="computer__button">Details</button>
            </div>
            <div className="computer__card">
              <img className="computer__image" src="computer.jpg" alt="" />
              <div className="computer__info">
                <h1 className="computer__title">Asus Veriton</h1>
                <hr />
                <span>
                  <i className="fa-solid fa-check"></i>New Model
                </span>
                <span>
                  <i className="fa-solid fa-check"></i>32GB RAM
                </span>
                <span>
                  <i className="fa-solid fa-check"></i>500GB SSD
                </span>
                <span>
                  <i className="fa-solid fa-check"></i>GeForce 3060 RTX
                </span>
                <span>
                  <i className="fa-solid fa-check"></i>Good Sustainability
                </span>
              </div>
              <button className="computer__button">Details</button>
            </div>
            <div className="computer__card">
              <img className="computer__image" src="computer.jpg" alt="" />
              <div className="computer__info">
                <h1 className="computer__title">Asus Veriton</h1>
                <hr />
                <span>
                  <i className="fa-solid fa-check"></i>New Model
                </span>
                <span>
                  <i className="fa-solid fa-check"></i>32GB RAM
                </span>
                <span>
                  <i className="fa-solid fa-check"></i>500GB SSD
                </span>
                <span>
                  <i className="fa-solid fa-check"></i>GeForce 3060 RTX
                </span>
                <span>
                  <i className="fa-solid fa-check"></i>Good Sustainability
                </span>
              </div>
              <button className="computer__button">Details</button>
            </div>
            <div className="computer__card">
              <img className="computer__image" src="computer.jpg" alt="" />
              <div className="computer__info">
                <h1 className="computer__title">Asus Veriton</h1>
                <hr />
                <span>
                  <i className="fa-solid fa-check"></i>New Model
                </span>
                <span>
                  <i className="fa-solid fa-check"></i>32GB RAM
                </span>
                <span>
                  <i className="fa-solid fa-check"></i>500GB SSD
                </span>
                <span>
                  <i className="fa-solid fa-check"></i>GeForce 3060 RTX
                </span>
                <span>
                  <i className="fa-solid fa-check"></i>Good Sustainability
                </span>
              </div>
              <button className="computer__button">Details</button>
            </div>
            <div className="computer__card">
              <img className="computer__image" src="computer.jpg" alt="" />
              <div className="computer__info">
                <h1 className="computer__title">Asus Veriton</h1>
                <hr />
                <span>
                  <i className="fa-solid fa-check"></i>New Model
                </span>
                <span>
                  <i className="fa-solid fa-check"></i>32GB RAM
                </span>
                <span>
                  <i className="fa-solid fa-check"></i>500GB SSD
                </span>
                <span>
                  <i className="fa-solid fa-check"></i>GeForce 3060 RTX
                </span>
                <span>
                  <i className="fa-solid fa-check"></i>Good Sustainability
                </span>
              </div>
              <button className="computer__button">Details</button>
            </div>
            <div className="computer__card">
              <img className="computer__image" src="computer.jpg" alt="" />
              <div className="computer__info">
                <h1 className="computer__title">Asus Veriton</h1>
                <hr />
                <span>
                  <i className="fa-solid fa-check"></i>New Model
                </span>
                <span>
                  <i className="fa-solid fa-check"></i>32GB RAM
                </span>
                <span>
                  <i className="fa-solid fa-check"></i>500GB SSD
                </span>
                <span>
                  <i className="fa-solid fa-check"></i>GeForce 3060 RTX
                </span>
                <span>
                  <i className="fa-solid fa-check"></i>Good Sustainability
                </span>
              </div>
              <button className="computer__button">Details</button>
            </div>
            <div className="computer__card">
              <img className="computer__image" src="computer.jpg" alt="" />
              <div className="computer__info">
                <h1 className="computer__title">Asus Veriton</h1>
                <hr />
                <span>
                  <i className="fa-solid fa-check"></i>New Model
                </span>
                <span>
                  <i className="fa-solid fa-check"></i>32GB RAM
                </span>
                <span>
                  <i className="fa-solid fa-check"></i>500GB SSD
                </span>
                <span>
                  <i className="fa-solid fa-check"></i>GeForce 3060 RTX
                </span>
                <span>
                  <i className="fa-solid fa-check"></i>Good Sustainability
                </span>
              </div>
              <button className="computer__button">Details</button>
            </div>
            <div className="computer__card">
              <img className="computer__image" src="computer.jpg" alt="" />
              <div className="computer__info">
                <h1 className="computer__title">Asus Veriton</h1>
                <hr />
                <span>
                  <i className="fa-solid fa-check"></i>New Model
                </span>
                <span>
                  <i className="fa-solid fa-check"></i>32GB RAM
                </span>
                <span>
                  <i className="fa-solid fa-check"></i>500GB SSD
                </span>
                <span>
                  <i className="fa-solid fa-check"></i>GeForce 3060 RTX
                </span>
                <span>
                  <i className="fa-solid fa-check"></i>Good Sustainability
                </span>
              </div>
              <button className="computer__button">Details</button>
            </div>
            <div className="computer__card">
              <img className="computer__image" src="computer.jpg" alt="" />
              <div className="computer__info">
                <h1 className="computer__title">Asus Veriton</h1>
                <hr />
                <span>
                  <i className="fa-solid fa-check"></i>New Model
                </span>
                <span>
                  <i className="fa-solid fa-check"></i>32GB RAM
                </span>
                <span>
                  <i className="fa-solid fa-check"></i>500GB SSD
                </span>
                <span>
                  <i className="fa-solid fa-check"></i>GeForce 3060 RTX
                </span>
                <span>
                  <i className="fa-solid fa-check"></i>Good Sustainability
                </span>
              </div>
              <button className="computer__button">Details</button>
            </div>
            <div className="computer__card">
              <img className="computer__image" src="computer.jpg" alt="" />
              <div className="computer__info">
                <h1 className="computer__title">Asus Veriton</h1>
                <hr />
                <span>
                  <i className="fa-solid fa-check"></i>New Model
                </span>
                <span>
                  <i className="fa-solid fa-check"></i>32GB RAM
                </span>
                <span>
                  <i className="fa-solid fa-check"></i>500GB SSD
                </span>
                <span>
                  <i className="fa-solid fa-check"></i>GeForce 3060 RTX
                </span>
                <span>
                  <i className="fa-solid fa-check"></i>Good Sustainability
                </span>
              </div>
              <button className="computer__button">Details</button>
            </div>
            <div className="computer__card">
              <img className="computer__image" src="computer.jpg" alt="" />
              <div className="computer__info">
                <h1 className="computer__title">Asus Veriton</h1>
                <hr />
                <span>
                  <i className="fa-solid fa-check"></i>New Model
                </span>
                <span>
                  <i className="fa-solid fa-check"></i>32GB RAM
                </span>
                <span>
                  <i className="fa-solid fa-check"></i>500GB SSD
                </span>
                <span>
                  <i className="fa-solid fa-check"></i>GeForce 3060 RTX
                </span>
                <span>
                  <i className="fa-solid fa-check"></i>Good Sustainability
                </span>
              </div>
              <button className="computer__button">Details</button>
            </div>
            <div className="computer__card">
              <img className="computer__image" src="computer.jpg" alt="" />
              <div className="computer__info">
                <h1 className="computer__title">Asus Veriton</h1>
                <hr />
                <span>
                  <i className="fa-solid fa-check"></i>New Model
                </span>
                <span>
                  <i className="fa-solid fa-check"></i>32GB RAM
                </span>
                <span>
                  <i className="fa-solid fa-check"></i>500GB SSD
                </span>
                <span>
                  <i className="fa-solid fa-check"></i>GeForce 3060 RTX
                </span>
                <span>
                  <i className="fa-solid fa-check"></i>Good Sustainability
                </span>
              </div>
              <button className="computer__button">Details</button>
            </div>
          </article>
        </section>
      </div>
      <HomeFooter/>
    </>
  );

}