import React from "react";
import "./pressRelease.css";
import Content from "../../components/content/Content";
import child from "../../images/Rectangle 4.png";

import child1 from "../../images/Rectangle 4 (3).png";
import child2 from "../../images/Rectangle 4 (5).png";
import child4 from "../../images/Rectangle 4 (7).png";
import child3 from "../../images/Rectangle 4 (8).png";
import child5 from "../../images/Rectangle 4 (4).png";

const PressRelease = () => {
  return (
    <div>
      <Content Name="Press Release" />
      <section className="Pressrelease">
        <h1>Our Latest News</h1>
        <div className="cardSection">
          <div className="flashcard">
            <img src={child} alt="" />
            <h2>
              Stone Laying Ceremony Marks Commencement of 132 kV
              Amarpur-Dhungesanghu
            </h2>
            <p>
              In this article, I won’t talk about the general concepts of
              typography, which can be used both in print...
            </p>
            <li>Jun 27, 2020 · 6 min ago</li>
          </div>
          <div className="flashcard">
            <img src={child1} alt="" />
            <h2>
              Cosmic Electrical Limited Successfully Completes and Charges 132
              kV Power...
            </h2>
            <p>
              In this article, I won’t talk about the general concepts of
              typography, which can be used both in print...
            </p>
            <li>Jun 27, 2020 · 6 min ago</li>
          </div>
          <div className="flashcard">
            <img src={child2} alt="" />
            <h2>
              CEL Employees Embrace Camaraderie and Team Spirit at Annual Office
              Picnic
            </h2>
            <p>
              In this article, I won’t talk about the general concepts of
              typography, which can be used both in print...
            </p>
            <li>Jun 27, 2020 · 6 min ago</li>
          </div>
          <div className="flashcard">
            <img src={child3} alt="" />
            <h2>
              CEL Employees Embrace Camaraderie and Team Spirit at Annual Office
              Picnic
            </h2>
            <p>
              In this article, I won’t talk about the general concepts of
              typography, which can be used both in print...
            </p>
            <li>Jun 27, 2020 · 6 min ago</li>
          </div>
          <div className="flashcard">
            <img src={child4} alt="" />
            <h2>
              Cosmic Electrical Limited Successfully Completes and Charges 132
              kV Power...
            </h2>
            <p>
              In this article, I won’t talk about the general concepts of
              typography, which can be used both in print...
            </p>
            <li>Jun 27, 2020 · 6 min ago</li>
          </div>
          <div className="flashcard">
            <img src={child5} alt="" />
            <h2>
              CEL Employees Embrace Camaraderie and Team Spirit at Annual Office
              Picnic
            </h2>
            <p>
              In this article, I won’t talk about the general concepts of
              typography, which can be used both in print...
            </p>
            <li>Jun 27, 2020 · 6 min ago</li>
          </div>
        </div>
        
      </section>
    </div>
  );
};

export default PressRelease;
