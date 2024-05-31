import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content-container">
        <h3>Contact us</h3>
        <div className="sub-desc">
          <p className="color-home">Home/</p>
          <p>Contact us</p>
        </div>
      </div>
      <div className="top-cotact">
        <div className="contact-details">
          <div className="inner">
            <h3>Any Query? Ask Anything!!</h3>
            <form>
              <div className="row">
                <div>
                  <label>Your name</label>
                  <br></br>
                  <input type="text" placeholder="john doe" />
                </div>
                <div>
                  <label>Email</label>
                  <br></br>
                  <input type="text" placeholder="john@gmail.com" />
                </div>
              </div>
              <div className="row">
                <div>
                  <label>Phone number</label>
                  <br></br>
                  <input type="number" placeholder="9823423112" />
                </div>
                <div>
                  <label>Subject</label> <br></br>
                  <input type="text" placeholder="Enter here" />
                </div>
              </div>
              <label>Message</label>
              <br></br>
              <textarea placeholder="Enter Message" type="text" />
              <br></br>
              <button>Sumbit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
