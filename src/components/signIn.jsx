import React, { Component } from "react";
import LockIcon from "@material-ui/icons/Lock";
import CloseIcon from "@material-ui/icons/Close";
class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    if (
      this.state.username === "" &&
      this.props.customer &&
      this.props.customer.phoneNumber
    ) {
      this.state = {
        username: this.props.customer.phoneNumber,
        password: this.props.customer.password,
      };
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    let key = event.target.name;
    this.setState({ [key]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
  }
  signInUser = () => {
    this.props.closeSignIn(this.state);
  };
  render() {
    return (
      <div className="signup-container">
        <div className="signup-close" onClick={this.props.closeSignIn}>
          <CloseIcon />
        </div>
        <div className="signup-title">
          <LockIcon className="lock-icon" />
          <h4>SignIn to your Account</h4>
        </div>
        <form className="form-group" onSubmit={this.handleSubmit}>
          <label htmlFor="username">
            Phone Number*
            <input
              type="number"
              name="username"
              onChange={this.handleChange}
              value={this.state.username}
            />
          </label>
          <label htmlFor="password">
            Password*
            <input
              type="password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
          </label>
          <button className="primary btn" onClick={this.signInUser}>
            SignIn
          </button>
        </form>
      </div>
    );
  }
}

export default SignIn;
