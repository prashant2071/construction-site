import { ServiceData } from "../../utilities/data/personCard/ServiceData";
import React from "react";
import Content from "../../components/content/Content";
import { FaArrowRightLong } from "react-icons/fa6";
import "./services.css";

const Services = () => {
  return (
    <div className="service-section">
      <Content Name="Services" />
      <div className="service-container">
        {ServiceData.map((item) => (
          <div className="service-card ">
            <div className={item.level}>
            <img src={item.image} />
            <h2>{item.name}</h2>
            <p>{item.desc}</p>
            <h3>See more <FaArrowRightLong style={{position:"relative",top:"3px",left:"3px"}}/></h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
