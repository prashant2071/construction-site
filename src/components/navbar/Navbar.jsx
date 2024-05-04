import React from "react";
import "../navbar/navbar.css";
import logo from "./logo.png";

const Navbar = () => {
  return (
    <div>
      <header className="nav-container">
        <div className="nav-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar">
          <nav>
            <ul className="nav-items">
              <li>
                <a className="navlink" href="/home">
                  Home
                </a>
              </li>
              <li>
                <a className="navlink" href="/aboutus">
                  About Us
                </a>
              </li>
              <li>
                <a className="navlink" href="/services">
                  Services
                </a>
              </li>
              <li>
                <a className="navlink" href="/project">
                  Our Projects
                </a>
              </li>
              <li>
                <a className="navlink" href="partners">
                  Partners
                </a>
              </li>
              <li>
                <a className="navlink" href="/commitments">
                  Commitments
                </a>
              </li>
              <li>
                <a className="navlink" href="/mediaroom">
                  Media Room
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <button class="nav-btn">Contact Us</button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
