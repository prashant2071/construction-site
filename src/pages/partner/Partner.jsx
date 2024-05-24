import React from "react";
import "./partner.css";
import Content from "../../components/content/Content";
import { Topdata ,Bottomdata} from "../../utilities/data/PartnerData";
import construction1 from "../../images/construction 1.png";

const Partner = () => {
  return (
    <div>
      <Content Name="Partners" />
      <div className="partner-content">
        <div className="top-content">
          <div className="partner-heading">
            <h3>Manufacturing Partners</h3>
            <p>
              We prioritize clear communication, transparency, and collaboration
              to ensure that your vision.
            </p>
          </div>
          <div className="img-sec">
            {Topdata.map((item, index) => (
              <div className="mapdata">
                <img src={item.image} />
                <h3>{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="partner-mission">
        <div className="partner-leftside">
          <div className="content">
            <p>Our mission</p>
            <h1>
              Our Goal Is Simple - We strive constructing a house easier, faster
              & unwavering dedication to quality.
            </h1>
            <button>Get a Quote</button>
          </div>
        </div>
        <div className="partner-rightside">
          <img src={construction1} alt="contruction" />
        </div>
      </div>
      <div className="partner-content">
        <div className="bottom-content">
          <div className="partner-heading">
            <h3>Teading & Logistics</h3>
            <p>
              We prioritize clear communication, transparency, and collaboration
              to ensure that your vision.
            </p>
          </div>
          <div className="img-sec">
            {Bottomdata.map((item, index) => (
              <div className="mapdata">
                <img src={item.image} />
                <h3>{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
