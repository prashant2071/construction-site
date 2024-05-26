import React from "react";
import Content from "../../components/content/Content";
import building1 from "../../images/building1.png";
import building2 from "../../images/Frame 527.png";
import building3 from "../../images/Frame (2).png";
import building4 from "../../images/Frame (3).png";
import building5 from "../../images/Frame (4).png";
import "./Commitment.css";

const Commitment = () => {
  return (
    <>
      <Content Name="Commitment" />
      <section className='commitment'>
        <div className="element1">
          <h1>
            Our Commitment Towards <br />
            Clients and our projects
          </h1>
        </div>
        <div className="Development">
          <div className="content">
            <h2>Development</h2>
            <p>
              client satisfaction is paramount. We prioritize clear
              communication, transparency, and collaboration to ensure that your
              vision.Simplify your transition to Waterfall, Agile, and other
              workflows to keep up team's momentum with Cycles and Modules.
            </p>
          </div>
          <img src={building1} alt="" />
        </div>
        <div className="Development">
          <img src={building2} alt="" />

          <div className="content">
            <h2>Home Production</h2>
            <p>
              client satisfaction is paramount. We prioritize clear
              communication, transparency, and collaboration to ensure that your
              vision.Simplify your transition to Waterfall, Agile, and other
              workflows to keep up team's momentum with Cycles and Modules.
            </p>
          </div>
        </div>
        <div className="Development">
          <div className="content">
            <h2>Connecting Nepal</h2>
            <p>
              client satisfaction is paramount. We prioritize clear
              communication, transparency, and collaboration to ensure that your
              vision.Simplify your transition to Waterfall, Agile, and other
              workflows to keep up team's momentum with Cycles and Modules.
            </p>
          </div>
          <img src={building3} alt="" />
        </div>
        <div className="Development">
          <img src={building4} alt="" />

          <div className="content">
            <h2>Quality</h2>
            <p>
              client satisfaction is paramount. We prioritize clear
              communication, transparency, and collaboration to ensure that your
              vision.Simplify your transition to Waterfall, Agile, and other
              workflows to keep up team's momentum with Cycles and Modules.
            </p>
          </div>
        </div>
        <div className="Development">
          <div className="content">
            <h2>Safety</h2>
            <p>
              client satisfaction is paramount. We prioritize clear
              communication, transparency, and collaboration to ensure that your
              vision.Simplify your transition to Waterfall, Agile, and other
              workflows to keep up team's momentum with Cycles and Modules.
            </p>
          </div>
          <img src={building5} alt="" />
        </div>
      </section>
    </>
  );
};

export default Commitment;
