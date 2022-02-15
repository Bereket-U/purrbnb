import React from "react";
import "./AuthPage.css";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import AuthMenu from "../../components/AuthMenu/AuthMenu";

export default class AuthPage extends React.Component {
  state = {
    showLogin: true,
  };

  render() {
    return (
      <div className="d-flex landing">
        <div className="left-side">
          <div className="branding">
            <h1 className="">Welcome to PurrBnB</h1>
            <h3>
              <span>
                Prove to your cat that you care! Go to your trip with no
                worries, Your cat will be in good hands.
              </span>
            </h3>
          </div>
        </div>
        {/* Another ternary operator! */}
        {/* If showLogin is true, show the login form. If false, show the signup form */}
        <div className="right-side">
          <img className="logo" src="images/PurrBnB-logos_white.png" alt="" />

          {this.state.showLogin ? (
            <LoginForm setUserInState={this.props.setUserInState} />
          ) : (
            <SignUpForm setUserInState={this.props.setUserInState} />
          )}

          <p
            className="login-text"
            onClick={() => this.setState({ showLogin: !this.state.showLogin })}
          >
            {this.state.showLogin
              ? "Don't have an account? Sign up"
              : "Already registered? Log in"}
          </p>
        </div>
      </div>
    );
  }
}
