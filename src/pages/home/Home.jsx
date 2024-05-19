import React from "react";

import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

import "./Home.css";
import one from "../../images/one.png";
import two from "../../images/two.png";
import three from "../../images/three.png";
import vector from "../../images/Vector.png";
import symbol from "../../images/symbol.png";
import Group5 from "../../images/Group 5.png";
import Group6 from "../../images/Group 6.png";
import Group7 from "../../images/Group 7.png";
import Group8 from "../../images/Group 8.png";
import Group9 from "../../images/Group 9.png";
import Group10 from "../../images/Group 10.png";
import frame32 from "../../images/Frame 32.png";
import building from "../../images/building.png";
import children from "../../images/children.png";
import worker from "../../images/worker.png";
import hands from "../../images/Hands.png";
import construction1 from "../../images/construction 1.png";

const Home = () => {
  return (
    <>
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
      <div className="newsection-top">
        <div className="ournews-section">
          <div className="topheaders">
            <p className="top-p">Our news</p>
            <h3 className="top-h3">Explore our latest News</h3>
          </div>
          {/* <h3 className="top-h3">Explore our latest News</h3> */}

          <div className="news">
            <FaAngleLeft className="arrow" />
            <div className="news-card">
              <img src={children} alt="logo" />
              <div className="card-text">
                <h3>
                  Stone Laying Ceremony Marks Commencement of 132 kV
                  Amarpur-Dhungesanghu
                </h3>
                <p>
                  In this article, I won’t talk about the general concepts of
                  typography, which can be used both in print...
                </p>
                <p className="dateparagraph">
                  {" "}
                  <span>.</span>jun 27,2020.6 min ago
                </p>
              </div>
            </div>
            <div className="news-card">
              <img src={worker} alt="logo" />
              <div className="card-text">
                <h3>
                  Cosmic Electrical Limited Successfully Completes and Charges
                  132 kV Power...
                </h3>
                <p>
                  In this article, I won’t talk about the general concepts of
                  typography, which can be used both in print...
                </p>
                <p className="dateparagraph">
                  <span>.</span> jun 27,2020.6 min ago
                </p>
              </div>
            </div>
            <div className="news-card">
              <img src={building} alt="logo" />
              <div className="card-text">
                <h3>
                  CEL Employees Embrace Camaraderie and Team Spirit at Annual
                  Office Picnic
                </h3>
                <p>
                  In this article, I won’t talk about the general concepts of
                  typography, which can be used both in print...
                </p>
                <p className="dateparagraph">
                  <span>.</span>jun 27,2020.6 min ago
                </p>
              </div>
            </div>
            <FaAngleRight className="arrow" />
          </div>
          <button className="explore-button" type="button">
            View all
          </button>
        </div>
      </div>
      <div className="mission">
        <div className="leftside">
          <p>Our Mission</p>
          <h1>
            Our Goal Is Simple - We strive constructing a house easier, faster &
            unwavering dedication to quality.
          </h1>
          <button>Get a Quote</button>
        </div>
        <div className="rightside">
          <img src={construction1} alt="" />
        </div>
      </div>
      <div className="commitment-section">
        <div className="commitment1">
          <div className="commitment-content">
            <p>Our Commitment</p>
            <h2>
              At Cosmic Electrical, our commitment to excellence is not just a
              slogan; it’s the driving force behind everything we do. We
              understand the critical role of electrical infrastructure in
              powering communities, industries, and innovations, and we take our
              responsibility seriously.
            </h2>
          </div>
              <img src={hands} className="hand-image" alt='hand'/>
        </div>
      </div>
    </>
  );
};

export default Home;
