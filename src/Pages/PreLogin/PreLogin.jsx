import { Link, Route } from "react-router-dom";
import React from "react";
import Logo from "./Hearth 1.png";
import "./PreLogin.css";
import InfiniteBody from "./InfiniteBody";

const PreLogin = () => {
  return (
    <div className="main">
      <div className="navbar">
        <div className="leftNavbar">
          <div>
            <img src={Logo} className="leftNavBarLogo" />
          </div>
          <div className="nextToLogo">
            <h1>Infinity Health</h1>
            <p>where health and challenges are fun</p>
          </div>
        </div>
        <div className="rightNavBar">
          <a href="#home">Home</a>
          <a href="#feature">Features</a>
          <a href="#contact">Contact</a>
          <a href="#FAQ">FAQ</a>
          <p href="login" className="signIn">Log In</p>
        </div>
      </div>
    </div>
  );
};

export default PreLogin;
