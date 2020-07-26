import React, { Component } from "react";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import CloseIcon from "@material-ui/icons/Close";
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phoneNumber: "",
      password: "",
      cnfpassword: "",
      customerType: "seller",
      passwordMatchError: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }
  createAccount = () => {
    console.log(this.state);
    if (
      this.state.name &&
      this.state.phoneNumber &&
      this.state.password &&
      this.state.cnfpassword
    ) {
      if (this.state.password === this.state.cnfpassword) {
        console.log("can submit");
        let customer = {
          name: this.state.name,
          phoneNumber: this.state.phoneNumber,
          password: this.state.password,
        };
        this.props.closeSignUp(customer);
      } else {
        console.log("can't submit");
        this.setState({ passwordMatchError: true });
        this.props.restrictClose();
      }
    } else {
      console.log("restrict");
      this.props.restrictClose();
    }
  };
  handleChange(event) {
    console.log(event);

    let key = event.target.name;
    console.log(event.target.value);

    this.setState({ [key]: event.target.value });
  }
  handleClick(type) {
    console.log(type);
    this.setState({ customerType: type });
  }
  handleSubmit(event) {
    event.preventDefault();
  }
  render() {
    return (
      <div className="signup-container">
        <div className="signup-close" onClick={this.props.closeSignUp}>
          <CloseIcon />
        </div>
        <div className="signup-title">
          <LockOpenIcon className="lock-icon" />
          <h4>Create New Account</h4>
        </div>
        <div className="buyer-seller-section">
          <div
            className={
              this.state.customerType === "seller"
                ? "section-name active"
                : "section-name"
            }
            name="customerType"
            value="seller"
            onClick={() => this.handleClick("seller")}
          >
            SELLER
          </div>
          <div
            className={
              this.state.customerType === "buyer"
                ? "section-name active"
                : "section-name"
            }
            name="customerType"
            value="buyer"
            onClick={() => this.handleClick("buyer")}
          >
            BUYER
          </div>
        </div>
        <form className="form-group" onSubmit={this.handleSubmit}>
          <label htmlFor="name">
            Name*
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
            />
          </label>
          <label htmlFor="phoneNumber">
            Phone Number*
            <input
              type="number"
              name="phoneNumber"
              onChange={this.handleChange}
              value={this.state.phoneNumber}
            />
          </label>
          <label htmlFor="password">
            Create password*
            <input
              type="password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
          </label>
          <label htmlFor="cnfpassword">
            Confirm password*
            <input
              type="password"
              name="cnfpassword"
              onChange={this.handleChange}
              value={this.state.cnfpassword}
            />
            {this.state.passwordMatchError && (
              <p className="error">Password do not match</p>
            )}
          </label>
          <button className="primary btn" onClick={this.createAccount}>
           Register
          </button>
        </form>
      </div>
    );
  }
}

export default SignUp;
