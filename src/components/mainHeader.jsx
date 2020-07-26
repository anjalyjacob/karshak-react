import React, { Component } from "react";
import Navbar from "./navbar";
import MainContent from "./mainContent";
import Popularitems from "./popularItems";
import SignUp from "./signUp";
import SignIn from "./signIn";
import Customer from "./customer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
class MainHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSignUp: false,
      showSignIn: false,
      customer: null,
      user: null,
      redirectToCustomer: false,
    };
  }

  openSignUpScreen = () => {
    console.log("sign up");
    this.setState({ showSignUp: true });
  };

  openSignInScreen = () => {
    this.setState({ showSignIn: true });
  };

  closeSignUp = (customer) => {
    if (customer.phoneNumber && customer.name && customer.password) {
      this.setState({ customer: customer });
    }
    this.setState({ showSignUp: false });
  };
  closeSignIn = (user) => {
    if (user.username && user.password) {
      this.setState({ user: user });
    }
    console.log(this.state.user);

    this.setState({ showSignIn: false });
  };
  restrictClose = () => {
    console.log("restrict");
    this.setState({ showSignUp: true });
  };
  render() {
    return (
      <main>
        <Router>
          <Navbar
            openSignUpScreen={this.openSignUpScreen}
            openSignInScreen={this.openSignInScreen}
            redirectToCustomer={this.redirectToCustomer}
            customer={this.state.customer}
            user={this.state.user}
          />
          <Switch>
            <Route exact path="/">
              <MainContent />
              <Popularitems />
              {this.state.showSignUp && (
                <div className="sign-up-screen">
                  <SignUp
                    restrictClose={this.restrictClose}
                    closeSignUp={this.closeSignUp}
                  />
                </div>
              )}
              {this.state.showSignIn && (
                <div className="sign-up-screen">
                  <SignIn
                    customer={this.state.customer}
                    closeSignIn={this.closeSignIn}
                  />
                </div>
              )}
            </Route>
              <Route path="/customer">
                <Customer />
              </Route>
          </Switch>
        </Router>
      </main>
    );
  }
}

export default MainHeader;
