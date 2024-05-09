import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./Home.css";
import one from "./one.png";
import two from "./two.png";
import three from "./three.png";
import vector from "./Vector.png";
import symbol from "./symbol.png";
import Group5 from "./Group 5.png";
import Group6 from "./Group 6.png";
import Group7 from "./Group 7.png";
import Group8 from "./Group 8.png";
import Group9 from "./Group 9.png";
import Group10 from "./Group 10.png";
import frame32 from "./Frame 32.png";

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
      <div className="banner-2">
        <p>Why Choose Us?</p>
        <h1>
          We Choose best for
          <br /> our clients
        </h1>
        <div className="container">
          <div className="card">
            <img className="banner2-icon" src={Group5} alt="" />
            <div className="textarea">
              <h2>Expertise</h2>
              <p>we bring expertise and ingenuity to every project.</p>
            </div>
          </div>
          <div className="card">
            <img className="banner2-icon" src={Group6} alt="" />
            <div className="textarea">
              <h2>Quality Assurance</h2>
              <p>
                We adhere to the highest standards of quality in every aspect of
                our work.
              </p>
            </div>
          </div>
          <div className="card">
            <img className="banner2-icon" src={Group7} alt="" />
            <div className="textarea">
              <h2>Client Centric</h2>
              <p>
                We prioritize clear communication, transparency, and
                collaboration.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="card">
            <img className="banner2-icon" src={Group8} alt="" />
            <div className="textarea">
              <h2>Innovation</h2>
              <p>
                We leverage cutting-edge technologies and sustainable practices.
              </p>
            </div>
          </div>
          <div className="card">
            <img className="banner2-icon" src={Group9} alt="" />
            <div className="textarea">
              <h2>Timely Delivery</h2>
              <p>
                We understand the importance of deadlines. With meticulous
                planning.
              </p>
            </div>
          </div>
          <div className="card">
            <img className="banner2-icon" src={Group10} alt="" />
            <div className="textarea">
              <h2>Transparent Pricing</h2>
              <p>
                Our pricing is transparent and competitive. We strive to
                eliminate hidden costs.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-3">
        <div className="section-left">
          <img src={frame32} alt="frame 32" />
        </div>
        <div className="section-right">
          <h1>
            Get to know more
            <br /> about us
          </h1>
          <p>
            We are more than just builders; we are creators of enduring spaces
            and structures that stand as a testament to our commitment to
            excellence. With a legacy of craftsmanship spanning [number of
            years] years, we have emerged as a trusted partner in delivering
            exceptional construction solutions.we are more than just builders;
            we are creators of enduring spaces
          </p>
          <button className="">Explore More</button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
