import React, { Component } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand">KARSHAK</a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
            <ul className="navbar-nav mr-auto">
              {this.props.customer == null && (
                <li className="nav-item">
                  <a
                    className="nav-link link"
                    onClick={this.props.openSignUpScreen}
                  >
                    Sign Up
                  </a>
                </li>
              )}
              <li className="nav-item">
                {this.props.user === null && (
                  <a
                    className="nav-link "
                    onClick={this.props.openSignInScreen}
                  >
                    Login
                  </a>
                )}
                {this.props.user && this.props.customer && (
                 <a
                 href="/customer"
                 className="nav-link"
               >Hi {this.props.customer.name}</a>
                )}
              </li>

              <li className="nav-item">
                <a className="nav-link cart-icon" href="#">
                  <ShoppingCartIcon />
                </a>
              </li>
            </ul>
          </div>
        </nav>
    );
  }
}

export default Navbar;
