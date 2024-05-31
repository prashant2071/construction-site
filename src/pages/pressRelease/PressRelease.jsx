import React, { useEffect, useState } from "react";
import "./pressRelease.css";
import Content from "../../components/content/Content";
import { pressRelease } from "../../utilities/data/cardData";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { PageNumberFunc } from "../../utilities/page.js";

const PressRelease = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageNumber, setpageNumber] = useState([]);
  const [fade, setFade] = useState(false);
  const perpage = 6;
  let result = [];

  useEffect(() => {
    setData(pressRelease);
    console.log("hello");
    result = PageNumberFunc(pressRelease, perpage);
    setpageNumber(result);
  }, []);

  const indexOfLastProduct = currentPage * perpage;
  // console.log("index of last", indexOfLastProduct);
  const indexOfFirstProduct = indexOfLastProduct - perpage;
  // console.log("index of first", indexOfFirstProduct);
  const currentProducts = data.slice(indexOfFirstProduct, indexOfLastProduct);

  const changePage = (e, item) => {
    e.preventDefault();
    setFade(true);
    setTimeout(() => {
      setCurrentPage(item);
      setFade(false);
    }, 400);
    console.log("value is ", item);
  };
  const changeBackPage = (e) => {
    e.preventDefault();
    if (currentPage !== 1) {
      setFade(true);
      setTimeout(() => {
        setCurrentPage((prev) => prev - 1);
        setFade(false);
      }, 200);
    }
  };
  const changeNextPage = (e) => {
    e.preventDefault();
    if (currentPage !== pageNumber.length) {
      setFade(true);
      setTimeout(() => {
        setCurrentPage((prev) => prev + 1);
        setFade(false);
      }, 200);
    }
  };
  return (
    <div>
      <Content Name="Press Release" />
      <section className="Pressrelease">
        <h1>Our Latest News</h1>
        <div className={`cardSection ${fade ?"fade":"fade show"}`}>
          {currentProducts.map((item) => (
            <div className="flashcard">
              <img src={item.image} alt="" />
              <h2>{item.h2}</h2>
              <p>{item.p}</p>
              <li>{item.li}</li>
            </div>
          ))}
          <div className="paginationContainer">
            <ul>
              <li onClick={changeBackPage}>
                <FaAngleLeft style={{ position: "relative", top: "3px" }} />{" "}
                Back
              </li>
              {pageNumber.map((item, i) => (
                <li
                  key={i}
                  onClick={(e) => changePage(e, item)}
                  className={item === currentPage ? "active" : ""}
                >
                  {item}
                </li>
              ))}
              <li onClick={changeNextPage}>
                Next{" "}
                <FaAngleRight style={{ position: "relative", top: "3px" }} />
              </li>
            </ul>
          </div>
          {/* <div className="flashcard">
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
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default PressRelease;
