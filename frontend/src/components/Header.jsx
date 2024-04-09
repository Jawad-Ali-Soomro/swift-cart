import React, { useState } from "react";
import "../styles/header.scss";
import {
  BiCart,
  BiCategory,
  BiHeart,
  BiUser,
  BiSupport,
  BiSearch,
  BiPhone
} from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";

const Header = () => {
  const tab = window.location.pathname;
  return (
    <div className="header-wrap flex">
      
      <div className="logo flex">
      <img src="./logo.png" alt="" />
      <h2>wiftcart</h2>
      </div>
      <div className="icons flex">
        <BiSearch className="icon" />
        <BiPhone className="icon" />
        <BiCart className="icon" />
        <BiHeart className="icon" />
        <BiUser className="icon" />
      </div>
      <div className="help flex">
        <BiSupport />
      </div>
    </div>
  );
};

export default Header;
