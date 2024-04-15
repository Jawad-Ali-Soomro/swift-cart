import React, { useState } from "react";
import "../styles/header.scss";
import { useNavigate } from "react-router-dom";
import {
  BiCart,
  BiHeart,
  BiUser,
  BiSupport,
  BiCategory,
  BiEnvelope,
  BiMessage,
} from "react-icons/bi";

const Header = () => {
  const navigate = useNavigate();
  const [help, set_show_help] = useState(false);
  return (
    <div className="header-wrap flex">
      <div className="icons flex">
        <BiCart className="icon" />
        <BiHeart className="icon" />
        <BiCategory className="icon" />
        <BiUser className="icon" />
      </div>
      <div className="help flex" onClick={() => set_show_help(!help)}>
        <BiSupport />
      </div>
      <div
        className="help-main-wrap flex col"
        style={{
          maxHeight: `${help == true ? "400px" : "0%"}`,
          border: `${help == true ? "1px solid rgba(0,0,0,0.1)" : "none"}`,
        }}
      >
        <div className="input-wrap flex">
          <BiEnvelope className="icon" />
          <input type="text" placeholder="E M A I L . . ."/>
        </div>
        <div className="input-wrap flex">
          <BiUser className="icon" />
          <input type="text" placeholder="N A M E . . ."/>
        </div>
        <div className="input-wrap flex">
          <BiMessage className="icon" />
          <input type="text" placeholder="M E S S A G E . . ." className="message" />
        </div>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Header;
