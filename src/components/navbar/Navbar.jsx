import React from "react";
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
                <Link to="/" className="navlink">
                  Our Projects
                </Link>
              </li>
              <li>
                <Link to="/" className="navlink">
                  Partners
                </Link>
              </li>
              <li>
                <Link to="/commitment" className="navlink">
                  Commitment
                </Link>
              </li>
              <li>
                <Link to="/" className="navlink">
                  Media Room
                </Link>
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
