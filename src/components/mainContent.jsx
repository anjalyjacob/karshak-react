import React, { Component } from "react";
import CheckIcon from "@material-ui/icons/Check";

class MainContent extends Component {
  state = {};
  render() {
    return (
      <div className="main-content">
        <span>
          {" "}
          Reach out to the correct destinations for your need. Only through
          KARSHAK{" "}
        </span>
        <div className="banner-section">
          <div className="banner">
            <div className="banner-text-content">
              We are here to sell your goods
            </div>
            <img className="banner-image" src="seller.jpg" alt="" />
          </div>
          <div className="banner">
            <img className="banner-image" src="buyer.jpg" alt="" />
            <div className="banner-text-content">
              We are here to buy your goods
            </div>
          </div>
        </div>
        <div className="banner-section">
          <div className="content-section">
            <h3>
              <span>
                <CheckIcon />
              </span>
              Unique everything
            </h3>
            We have millions of one-of-a-kind items, so you can find whatever
            you need (or really, really want).
          </div>
          <div className="content-section">
            <h3>
              <span>
                <CheckIcon />
              </span>
              Independent sellers
            </h3>
            Buy directly from someone who put their heart and soul into making
            something special.
          </div>
          <div className="content-section">
            <h3>
              <span>
                <CheckIcon />
              </span>
              Secure shopping
            </h3>
            We use best-in-class technology to protect your transactions.
          </div>
        </div>
      </div>
    );
  }
}

export default MainContent;
