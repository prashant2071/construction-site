import React from 'react'
import Group5 from "../../images/Group 5.png";
import Group6 from "../../images/Group 6.png";
import Group7 from "../../images/Group 7.png";
import Group8 from "../../images/Group 8.png";
import Group9 from "../../images/Group 9.png";
import Group10 from "../../images/Group 10.png";
import"./banner.css"
const banner = () => {
  return (
    <div>
      <div className="banner-2">
        <p>Why Choose Us?</p>
        <h1>
          We Choose best for
          <br /> our clients
        </h1>
        <div className="container">
          <div className="card">
            <img className="banner2-icon" src={Group5} alt="" />
            <div className="textarea">
              <h2>Expertise</h2>
              <p>we bring expertise and ingenuity to every project.</p>
            </div>
          </div>
          <div className="card">
            <img className="banner2-icon" src={Group6} alt="" />
            <div className="textarea">
              <h2>Quality Assurance</h2>
              <p>
                We adhere to the highest standards of quality in every aspect of
                our work.
              </p>
            </div>
          </div>
          <div className="card">
            <img className="banner2-icon" src={Group7} alt="" />
            <div className="textarea">
              <h2>Client Centric</h2>
              <p>
                We prioritize clear communication, transparency, and
                collaboration.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="card">
            <img className="banner2-icon" src={Group8} alt="" />
            <div className="textarea">
              <h2>Innovation</h2>
              <p>
                We leverage cutting-edge technologies and sustainable practices.
              </p>
            </div>
          </div>
          <div className="card">
            <img className="banner2-icon" src={Group9} alt="" />
            <div className="textarea">
              <h2>Timely Delivery</h2>
              <p>
                We understand the importance of deadlines. With meticulous
                planning.
              </p>
            </div>
          </div>
          <div className="card">
            <img className="banner2-icon" src={Group10} alt="" />
            <div className="textarea">
              <h2>Transparent Pricing</h2>
              <p>
                Our pricing is transparent and competitive. We strive to
                eliminate hidden costs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default banner
