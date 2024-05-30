import React, { useState } from "react";
import "../navbar/navbar.css";
import logo from "./logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <div>
      <header className="nav-container">
        <div className="nav-logo">
          <Link to="/" className="navlink">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="navbar">
          <nav>
            <ul className="nav-items">
              <li>
                <Link to="/" className="navlink">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="navlink">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="navlink">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/project" className="navlink">
                  Our Projects
                </Link>
              </li>
              <li>
                <Link to="/partner" className="navlink">
                  Partners
                </Link>
              </li>
              <li>
                <Link to="/commitment" className="navlink">
                  Commitment
                </Link>
              </li>
              <li className="navlink">
                <div class="dropdown">
                  Media Room
                  <div class="dropdown-content">
                    <Link to={"/PressRelease"}>Press Release</Link>

                    <Link to={"/contact"}>Carrer</Link>
                    <Link to={"/contact"}>Contact</Link>


                    <Link to={"/testimonials"}>Testimonials</Link>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <button className="nav-btn">Contact Us</button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
