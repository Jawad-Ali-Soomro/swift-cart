import React, { useState } from "react";
import "../styles/header.scss";
import {
  BiCart,
  BiCategory,
  BiHeart,
  BiUser,
  BiSupport,
  BiSearch
} from "react-icons/bi";

const Header = () => {
  const [categories , set_categories] = useState(false)
  const tab = window.location.pathname;
  return (
    <div className="header-wrap flex">
      
      <div className="logo flex">
        <h2 className="flex">Swift <img src="./logo.png" alt="" /> <span>Cart</span></h2>
      </div>
      <div className="icons flex">
      <div className="search-bar flex">
        <input type="text" />
        <BiSearch style={{cursor: 'pointer'}} />
      </div>
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
