import React from "react";
import Content from "../../components/content/Content";
import "./Project.css";
import { FaArrowRightLong } from "react-icons/fa6";
import one from "../../images/Frame 56.png";
import two from "../../images/Frame 56 (1).png";
import three from "../../images/frame101.png";
import four from "../../images/frame 101a.png";
import five from "../../images/frame200a.png";
import six from "../../images/frame 200.png";




import tick from "../../images/tick.png";
const Project = () => {
  return (
    <div>
      <section className="projectcontainer">
        <Content Name="Projects" />
        <div className="projectbtn">
          <button className="redbtn">Completed Projects</button>
          <button className="transparent">Running Projects</button>
          <button className="transparent">Upcomming Projects</button>
        </div>
        <div className="section2">
          <h1>Our Completed Projects</h1>
        </div>
        <div className="section3">
          <div className="content">
            <h2>South Market Business Plaza</h2>
            <p>
              client satisfaction is paramount. We prioritize clear
              communication, transparency, and collaboration to ensure that your
              vision.
            </p>
            <ul>
              <li className="b">
                <img src={tick} alt="" /> Why consistent writing makes you a
                better designer
              </li>
              <li className="b">
                <img src={tick} alt="" /> 5 soft skills every product designer
                should master
              </li>
              <li className="b">
                <img src={tick} alt="" /> The UX Writing Starter-Kit
              </li>
            </ul>
            <p>
              client satisfaction is paramount. We prioritize clear
              communication, transparency, and collaboration to ensure that your
              vision.
            </p>
            <p>
              <a href="#">
                See more{" "}
                <FaArrowRightLong
                  style={{ position: "relative", top: "3px", left: "3px" }}
                />
              </a>
            </p>
          </div>

          <img src={one} alt="frame 32" />
          <img className="above" src={two} alt="frame 32" />
        </div>
        <div className="section3">
          <div className="content">
            <h2>Missouri Public Utility Alliance</h2>
            <p>
              client satisfaction is paramount. We prioritize clear
              communication, transparency, and collaboration to ensure that your
              vision.
            </p>
            <ul>
              <li className="b">
                <img src={tick} alt="" /> Why consistent writing makes you a
                better designer
              </li>
              <li className="b">
                <img src={tick} alt="" /> 5 soft skills every product designer
                should master
              </li>
              <li className="b">
                <img src={tick} alt="" /> The UX Writing Starter-Kit
              </li>
            </ul>
            <p>
              client satisfaction is paramount. We prioritize clear
              communication, transparency, and collaboration to ensure that your
              vision.
            </p>
            <p>
              <a href="#">
                See more{" "}
                <FaArrowRightLong
                  style={{ position: "relative", top: "3px", left: "3px" }}
                />
              </a>
            </p>
          </div>

          <img src={three} alt="frame 32" />
          <img className="above" src={four} alt="frame 32" />
        </div>
        <div className="section3">
          <div className="content">
            <h2>Smiley Structure Design</h2>
            <p>
              client satisfaction is paramount. We prioritize clear
              communication, transparency, and collaboration to ensure that your
              vision.
            </p>
            <ul>
              <li className="b">
                <img src={tick} alt="" /> Why consistent writing makes you a
                better designer
              </li>
              <li className="b">
                <img src={tick} alt="" /> 5 soft skills every product designer
                should master
              </li>
              <li className="b">
                <img src={tick} alt="" /> The UX Writing Starter-Kit
              </li>
            </ul>
            <p>
              client satisfaction is paramount. We prioritize clear
              communication, transparency, and collaboration to ensure that your
              vision.
            </p>
            <p>
              <a href="#">
                See more{" "}
                <FaArrowRightLong
                  style={{ position: "relative", top: "3px", left: "3px" }}
                />
              </a>
            </p>
          </div>

          <img src={five} alt="frame 32" />
          <img className="above" src={six} alt="frame 32" />
        </div>
      </section>
    </div>
  );
};

export default Project;
