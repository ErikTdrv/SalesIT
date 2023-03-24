import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Copyright from "../Copyright/Copyright";
import "./Profile.css";

export default function Profile() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <div className="product__all">
        <div className="profile__info">
          <img
            src="http://res.cloudinary.com/dzywd3xdo/image/upload/v1679261660/SalesIT/upwhr9qtjohdlljghnp1.jpg"
            alt="avatar-img"
          />
          <div className="profile__info__auth">
            <li>
              Username:
              <span> todorowwww</span>
            </li>
            <li>
              Email:
              <span> eriktdrv@gmail.com</span>
            </li>
            <li>
              Phone Number:
              <span> +359 89 604 8446</span>
            </li>
          </div>
        </div>
        <div className="profile__products">
          <h1>heelo</h1>
        </div>
      </div>
      <Copyright />
    </>
  );
}
