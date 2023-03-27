import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { getProfileProducts } from "../../services/userService";
import Copyright from "../Main/Copyright/Copyright";
import ShoppingCard from "../Shopping/Shopping";
import "./Profile.css";

export default function Profile() {
  const { user } = useContext(AuthContext);
    useEffect(() => {
        async function getProducts(){
            let products = await getProfileProducts()
        }
        getProducts()
    }, [])
  return (
    <>
      <div className="product__all">
        <div className="profile__info">
          <img
            src={user.avatarImg}
            alt="avatar-img"
          />
          <div className="profile__info__auth">
            <li>
              Username:
              <span> {user.username}</span>
            </li>
            <li>
              Email:
              <span> {user.email}</span>
            </li>
            <li>
              Phone Number:
              <span> {user.phone}</span>
            </li>
          </div>
        </div>
        <div className="profile__products">
            <ShoppingCard mode={'profile'}/>
        </div>
      </div>
      <Copyright />
    </>
    
  );
}
