import React, { useState } from "react";
import "../styles/header.scss";
import {
  BiCart,
  BiHeart,
  BiUser,
  BiSupport,
  BiSearch,
  BiCategory,
} from "react-icons/bi";

const Header = () => {
  const [help, set_show_help] = useState(false);
  return (
    <div className="header-wrap flex">
      <div className="icons flex">
        <BiCart className="icon" />
        <BiHeart className="icon" />
        <BiCategory className="icon" />
        <BiUser className="icon" />
      </div>
      <div className="help flex"  onClick={() => set_show_help(!help)}>
        <BiSupport />
        <div
          className="help-main-wrap"
          style={{
            maxHeight: `${help == true ? "400px" : "0%"}`,
            border: `${help == true ? "1px solid rgba(0,0,0,0.1)" : "none"}`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Header;
