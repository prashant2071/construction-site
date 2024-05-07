import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./Home.css";
import one from "./one.png";
import two from "./two.png";
import three from "./three.png";
import vector from "./Vector.png";
import symbol from "./symbol.png";


const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="banner">
        <div className="banner-left">
          <h1>
            Building Tommorow <br />
            Together, Your Trusted <br />
            Construction Partner
          </h1>
          <p>
            Construction Websites are a huge part of a constuction Business.
            <br />
            Other constuction companies, builders.{" "}
          </p>
          <button className="banner-btn-1">Explore more </button>
          <button className="banner-btn-2">Get a Quote</button>
          <div className="vector">
            <img src={vector} alt="" />
          </div>
        
        </div>

        <div classname="banner-right">
        <img src={symbol} alt="" />
          <div class="top">
            <img class="one" src={one} alt="first " />
            <img class="two" src={two} alt="second " />
          </div>

          <img class="three" src={three} alt="third " />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
