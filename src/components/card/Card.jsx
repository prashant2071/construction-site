import React, { useEffect, useState } from "react";
import { Hometestomonials,testomonials } from "../../utilities/data/cardData";
import "./card.css";

const Card = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    if(props.name == "home"){
      setData(Hometestomonials);
    }
    else{
      setData(testomonials);
    }
  }, []);
  console.log("data is", Hometestomonials);
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
