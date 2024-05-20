import React, { useEffect, useState } from "react";
import { testomonials } from "./../data/data";
import "./card.css";

const Card = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(testomonials);
  }, []);
  console.log("data is", testomonials);
  return (
    <>
      <div className="main-card">
        {testomonials?testomonials.map((item) => (
          <div className="home-card">
            <p>{item.description}</p>
            <h4>{item.name}</h4>
            <p className="last-paragraph">{item.companyName}</p>
          </div>
        )):<p>loading ...</p>}
        {/* <div className="home-card">
          <p>Our project is was completed on time and within budget, and qualify of craftmanship exceeded our expections. What truly set [Company Name] apart</p>
          <h4>Courtney Henry</h4>
          <p className="last-paragraph">South market street plaza</p>
        </div> */}
      </div>
    </>
  );
};

export default Card;
