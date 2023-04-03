import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserById } from "../../services/userService";
import Copyright from "../Main/Copyright/Copyright";
import ShoppingCard from "../Shopping/ShoppingCard";
import "./Profile.css";
import { useSelector } from "react-redux";

export default function Profile({mode}) {
  const [userInfo, setUserInfo] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const user = useSelector(state => state.user.user);

  const {userId} = useParams();
  useEffect(() => {
    if(mode === 'global'){
      getUser()
    }else {
      setUserInfo(user)
      setIsLoading(false)
    }
    async function getUser(){
      setUserInfo(await getUserById(userId))
      setIsLoading(false)
    }
  }, [])
  return (
    <>
    {!isLoading ? (
      <div className="product__all">
        <div className="profile__info">
          <img
            src={userInfo?.avatarImg}
            alt="avatar-img"
          />
          <div className="profile__info__auth">
            <li>
              Username:
              <span> {userInfo?.username}</span>
            </li>
            <li>
              Email:
              <span> {userInfo?.email}</span>
            </li>
            <li>
              Phone Number:
              <span> {userInfo?.phone}</span>
            </li>
          </div>
        </div>
        <div className="profile__products">
          {mode === undefined && <ShoppingCard mode={'profile'}/>}
          {mode === 'global' && <ShoppingCard mode={'global'} user={userInfo}/>}
        </div>
      </div>
    ) : <span className="loader"></span>}
    <Copyright />
    </>
    
  );
}
