import React, { useState } from "react";
import "../styles/header.scss";
import {
  BiBell,
  BiCart,
  BiCategory,
  BiHeart,
  BiMenu,
  BiPhone,
  BiSearch,
  BiSolidBell,
  BiSupport,
  BiUser,
} from "react-icons/bi";

const Header = () => {
  const [show_menu, set_show_menu] = useState(false);
  const tab = window.location.pathname;
  return (
    <div className="header-wrap flex col">
      <div className="logo flex">
        <img src="./logo.png" alt="" />
      </div>
      <div className="icons flex col">
        <BiCart className="icon" />
        <BiHeart className="icon" />
        <BiCategory className="icon" />
        <BiPhone className="icon" />
        <BiMenu className="icon" onClick={() => set_show_menu(!show_menu)} />
      </div>
      <div
        className="menu flex col"
        style={{
          maxHeight: `${show_menu == true ? "400px" : "0px"}`,
          border: `${show_menu == true ? "1px solid rgba(0,0,0,0.2)" : "0px"}`,
        }}
      >
        <ul className="flex col">
          <li className="flex" data-show="Help">
            <BiSupport className="icon" />
          </li>
          <li className="flex" data-show="Notifications">
            <BiBell className="icon" />{" "}
          </li>
          <li className="flex" data-show="Search">
            <BiSearch className="icon" />{" "}
          </li>
          <li className="flex" data-show="Account">
            <BiUser className="icon" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
