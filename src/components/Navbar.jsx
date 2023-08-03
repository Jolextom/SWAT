import React from "react";
import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar flex">
      <div className="logo flex">
        <img src={Logo} alt="swat logo" />
        <h3>
          S.W.A.T <br /> LEADERSHIP ACADEMY
        </h3>
      </div>
      <ul className="flex">
        <li>
          <a href="#" className="active" >Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Programs</a>
        </li>
        <li>
          <a href="#">Team</a>
        </li>
        <li>
          <a href="#">Gallery</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <button className="btn">Join Us</button>
    </div>
  );
};

export default Navbar;
