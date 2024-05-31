import React from "react";
import "./Career.css";
import Banner from "../../components/banner/Banner";
import p497 from "../../images/Frame 497.png";

const Career = () => {
  return (
    <div>
      <Banner />
      <div className="hiring">
        <h1>We are hiring</h1>
        <p>
          Do you think you are a good fit? Apply now. We would love to meet you.
        </p>
      </div>
      <div className="jobpost">
        <img src={p497} alt="" />
        <div className="position">
          <h2>Principal Software Engineer</h2>
          <p>Kathmandu, Nepal</p>
        </div>
        <a href="">Apply Now</a>
      </div>
      <hr />
      <div className="jobpost">
        <img src={p497} alt="" />
        <div className="position">
          <h2>Customer Service</h2>
          <p>Kathmandu, Nepal</p>
        </div>
        <a href="">Apply Now</a>
      </div>
      <hr />
      <div className="jobpost">
        <img src={p497} alt="" />
        <div className="position">
          <h2>Business Development</h2>
          <p>Kathmandu, Nepal</p>
        </div>
        <a href="">Apply Now</a>
      </div>
    </div>
  );
};

export default Career;
