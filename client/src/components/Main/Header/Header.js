import "./Header.css";
import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../../services/userService";
export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.user.isAuth);
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  async function userLogout() {
    await logoutUser();
    dispatch({ type: "LOGOUT_USER" });
    navigate("/");
  }
  return (
    <>
      <header className="navigation">
        <div className="mainlogo">
          <Link className="Link" to="/">
            Sales<span className="itlogo">IT</span>
          </Link>
        </div>
        <ul className="mainul responsive-mainul">
          <li>
            <NavLink activeclassname="active" className="Link" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              activeclassname="active"
              className="Link"
              to="/all-products"
            >
              All Products
            </NavLink>
          </li>
          {isAuth && (
            <li>
              <NavLink
                activeclassname="active"
                className="Link"
                to="/add-product"
              >
                Add Product
              </NavLink>
            </li>
          )}
        </ul>
        <ul className="authul">
          {isAuth ? (
            <>
              <li>
                <NavLink
                  activeclassname="activeCard"
                  className="Link"
                  to="/profile"
                >
                  <i className="fa-solid fa-user"></i>
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeclassname="activeCard"
                  className="Link"
                  to="/card"
                >
                  <i className="fa-solid fa-cart-shopping"></i>
                </NavLink>
              </li>
              <li onClick={() => userLogout()} className="logout">
                Logout
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink activeclassname="active" className="Link" to="/login">
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeclassname="active"
                  className="Link"
                  to="/register"
                >
                  Register
                </NavLink>
              </li>
            </>
          )}
        </ul>
        <i
          class="fa-solid fa-bars bar"
          onClick={() => setIsMenuClicked(!isMenuClicked)}
        ></i>
      </header>
      {isMenuClicked && (
        <div className="more">
          <ul className="mainul">
            <li>
              <NavLink activeclassname="active" className="Link" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                activeclassname="active"
                className="Link"
                to="/all-products"
              >
                All Products
              </NavLink>
            </li>
            {isAuth && (
              <li>
                <NavLink
                  activeclassname="active"
                  className="Link"
                  to="/add-product"
                >
                  Add Product
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      )}
    </>
  );
}
