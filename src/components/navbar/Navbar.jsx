import React from "react";
import "../navbar/navbar.css";
import logo from "./logo.png";

const Navbar = () => {
  return (
    <div>
      <header className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar">
          <nav>
            <ul className="nav-items">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Our Projects</a>
              </li>
              <li>
                <a href="#">Partners</a>
              </li>
              <li>
                <a href="#">Commitments</a>
              </li>
              <li>
                <a href="#">Media Room</a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <button class="btn">Contact Us</button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
