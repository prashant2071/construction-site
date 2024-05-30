import React, { useEffect, useState } from "react";
import "./testimonial.css";
import { testomonials } from "../../utilities/data/cardData";
import Content from "../../components/content/Content.jsx";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { PageNumberFunc } from "../../utilities/page.js";

const Testimonial = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [pageNumber, setpageNumber] = useState([]);
  const [fade, setFade] = useState(false);
  const perpage = 6;
  let result = [];

  useEffect(() => {
    setData(testomonials);
    console.log("hello");
    result = PageNumberFunc(testomonials, perpage);
    setpageNumber(result);
  }, []);

  const indexOfLastProduct = currentPage * perpage;
  // console.log("index of last", indexOfLastProduct);
  const indexOfFirstProduct = indexOfLastProduct - perpage;
  // console.log("index of first", indexOfFirstProduct);
  const currentProducts = data.slice(indexOfFirstProduct, indexOfLastProduct);
  // console.log("the is curent", currentProducts);

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
    <>
      <Content Name="Testimonial" />
      <div className="testimonialTopContainer">
        <div className="testimonial-container">
          <div className={`main-card ${fade ? "fade" : "fade show"}`}>
            {currentProducts ? (
              currentProducts.map((item, i) => (
                <div className="home-card" key={i}>
                  <p>{item.description}</p>
                  <h4>{item.name}</h4>
                  <p className="last-paragraph">{item.companyName}</p>
                </div>
              ))
            ) : (
              <p>loading ...</p>
            )}
          </div>
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
        </div>
      </div>
    </>
  );
};

export default Testimonial;
