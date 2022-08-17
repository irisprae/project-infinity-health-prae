import { Link, Route } from "react-router-dom";
import React from "react";
import Logo from "./Hearth 1.png";
import "./PreLogin.css";

const PreLogin = () => {
  return (
    <div className="main">
      <div className="navbar">
        <div className="leftNavbar">
          <div>
            <Link Link to="/"><img src={Logo} className="leftNavBarLogo" /></Link>
          </div>
          <div className="nextToLogo">
            <h1>Infinity Health</h1>
            <p>where health and challenges are fun</p>
          </div>
        </div>
        <div className="rightNavBar">
          <Link Link to="/">Home</Link>
          <a href="#feature">Features</a>
          <a href="#contact">Contact</a>
          <a href="#FAQ">FAQ</a>
          <Link className="signInn" Link to="/Login"><p>Log In</p></Link>
          
        </div>
      </div>
    </div>
  );
};

export default PreLogin;
