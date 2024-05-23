import React from "react";
import Content from "../../components/content/Content";
import Frame452 from "../../images/Frame452.png";
import Frame436 from "../../images/Frame 436.png";
import Frame460 from "../../images/Frame 460.png";
import user from "../../images/user.png";
import Rectangle1 from "../../images/Rectangle1.png";
import Rectangle2 from "../../images/Rectangle2.png";
import Rectangle3 from "../../images/Rectangle3.png";
import Rectangle4 from "../../images/Rectangle4.png";
import Rectangle5 from "../../images/Rectangle5.png";
import Rectangle6 from "../../images/Rectangle6.png";
import "./about.css";

const About = () => {
  return (
    <>
      <div className="about-section">
        <Content Name="About us" />
        <div className="about-content">
          <div className="commitment-section">
            <div className="commitment1">
              <div className="commitment-content">
                <p>Who are we</p>
                <h1>Bring your innovation & ideas to life</h1>
                <h2>
                  As a designer, content should be the driving force behind many
                  of your decisions, whether you’re creating the content or
                  someone else is. So if you can understand how to write
                  effective copy (and understand the purpose that it serves),
                  you’ll be able to better serve your clients and ultimately
                  create better designs.
                  <h2 style={{ marginTop: "10px" }}>
                    In this article, we’ll cover some helpful copywriting tips
                    for designers to help you build better experiences.
                  </h2>
                </h2>
              </div>
              <img src={Frame452} className="hand-image" />
            </div>
          </div>
          <div className="about-fullbanner">
            <div className="about-banner">
              <div>
                <h2>10000+</h2>
                <h2>Manpower</h2>
              </div>
              <div>
                <h2>500+</h2>
                <h2>Equipment</h2>
              </div>
              <div>
                <h2>500+</h2>
                <h2>Project</h2>
              </div>
              <div>
                <h2>20+</h2>
                <h2>Clinets</h2>
              </div>
            </div>
          </div>
          <div className="commitment-section2">
            <div className="commitment2">
              <img src={Frame436} className="hand-image" />
              <div className="commitment-content2">
                <p>Short Message</p>
                <div className="person-position">
                  <img
                    src={user}
                    style={{ height: "15px", width: "15px" }}
                    className="hand-image"
                  />
                  <span>Chairperson of construction</span>
                </div>
                <h1>Cameron Williamson</h1>
                <h2>
                  Believe it or not, copywriting is one of the most important
                  content-creation skills a designer can possess. If you think
                  about it, design exists to support and deliver content—not the
                  other way around.design exists to support and deliver
                  content—not the other way around.
                </h2>
              </div>
            </div>
          </div>
          <div className="commitment-section2">
            <div className="commitment2">
              <div className="commitment-content2">
                <p>Short Message</p>
                <div className="person-position">
                  <img
                    src={user}
                    style={{ height: "15px", width: "15px" }}
                    className="hand-image"
                  />
                  <span>Director of construction</span>
                </div>
                <h1>Darlene Robertson</h1>
                <h2>
                  Believe it or not, copywriting is one of the most important
                  content-creation skills a designer can possess. If you think
                  about it, design exists to support and deliver content—not the
                  other way around.design exists to support and deliver
                  content—not the other way around.
                </h2>
              </div>
              <img src={Frame460} className="hand-image" />
            </div>
          </div>
        </div>
        <div className="teams">
          <h1>Our teams</h1>
          <div className="about-container">
            <div className="person-container">
              <img src={Rectangle1} className="hand-image" />
              <h2>Darlene Robertson</h2>
              <p><span>.</span>Director of Constuction</p>
            </div>
            <div className="person-container">
              <img src={Rectangle2} className="hand-image" />
              <h2>Darlene Robertson</h2>
              <p><span>.</span>Director of Constuction</p>
            </div>
            <div className="person-container">
              <img src={Rectangle3} className="hand-image" />
              <h2>Darlene Robertson</h2>
              <p><span>.</span>Director of Constuction</p>
            </div>
            <div className="person-container">
              <img src={Rectangle4} className="hand-image" />
              <h2>Darlene Robertson</h2>
              <p><span>.</span>Director of Constuction</p>
            </div>
            <div className="person-container">
              <img src={Rectangle5} className="hand-image" />
              <h2>Darlene Robertson</h2>
              <p><span>.</span>Director of Constuction</p>
            </div>
            <div className="person-container">
              <img src={Rectangle6} className="hand-image" />
              <h2>Darlene Robertson</h2>
              <p><span>.</span>Director of Constuction</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
