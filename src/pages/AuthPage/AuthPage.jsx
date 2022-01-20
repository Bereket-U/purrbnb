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
      <main className="AuthPage">
        <AuthMenu />
        <br />

        {/* Another ternary operator! */}
        {/* If showLogin is true, show the login form. If false, show the signup form */}
        {this.state.showLogin ? (
          <LoginForm setUserInState={this.props.setUserInState} />
        ) : (
          <SignUpForm setUserInState={this.props.setUserInState} />
        )}

        <h3
          className="signup-login"
          onClick={() => this.setState({ showLogin: !this.state.showLogin })}
        >
          {this.state.showLogin ? "Don't have an account? Signup" : "Log in"}
        </h3>
      </main>
    );
  }
}
