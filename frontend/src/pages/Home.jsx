import React from "react";
import "../styles/home.scss";
import Header from "../components/Header";
import Latest from "../components/Latest";
import Famous from "../components/Famous";

const Home = () => {
  return (
    <div className="home-wrap flex col">
      <Header />
      <div className=" main-wrap flex">
        <img className="banner-img" src="./img.png" alt="" />
        <div className="content flex col">
          <div className="top">
            <h1>shop</h1>
            <h1>your</h1>
            <h1>future!</h1>
          </div>
        </div>
      </div>
      <div className="services">
        <ul className="flex">
          <li className="flex col">
            <img src="./images/free.png" alt="" />
            <h2>Free Delievery</h2>
          </li>
          <li className="flex col">
            <img src="./images/fashion.png" alt="" />
            <h2>Fashion Items</h2>
          </li>
          <li className="flex col">
            <img src="./images/home_and_decor.png" alt="" />
            <h2>Home Items</h2>
          </li>
          <li className="flex col">
            <img src="./images/mart.png" alt="" />
            <h2>items on sale</h2>
          </li>
          <li className="flex col">
            <img src="./images/electronics.png" alt="" />
            <h2>Electronics</h2>
          </li>
        </ul>
      </div>
      <Latest />
      <Famous />
      <div className="newsletter-wrap flex col">
        <h1>
          Signup for <span>newsletter</span>
        </h1>
        <div className="wrap flex">
          <input type="text" placeholder="~ EMAIL ADDRESS ~" />
          <button>SUBSCRIBE</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
