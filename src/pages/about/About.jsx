import React from "react";
import Content from "../../components/content/Content";
import Frame452 from "../../images/Frame452.png";
import "./about.css";

const About = () => {
  return (
    <>
      <Content Name="About us" />
      <div className="commitment-section">
        <div className="commitment1">
          <div className="commitment-content">
            <p>Who are we</p>
            <h1>Bring your innovation & ideas to life</h1>
            <h2>
              As a designer, content should be the driving force behind many of
              your decisions, whether you’re creating the content or someone
              else is. So if you can understand how to write effective copy (and
              understand the purpose that it serves), you’ll be able to better
              serve your clients and ultimately create better designs.
              <h2 style={{ marginTop: "10px" }}>
                In this article, we’ll cover some helpful copywriting tips for
                designers to help you build better experiences.
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
    </>
  );
};

export default About;
