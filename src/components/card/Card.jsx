import React, { useEffect, useState } from "react";
import { testomonials } from "../data/cardData";
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
        {data?data.map((item,i) => (
          <div className="home-card" key={i}>
            <p>{item.description}</p>
            <h4>{item.name}</h4>
            <p className="last-paragraph">{item.companyName}</p>
          </div>
        )):<p>loading ...</p>}
      </div>
    </>
  );
};

export default Card;
