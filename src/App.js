import React, { Component } from "react";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import MyListingPage from "./pages/MyListingPage/MyListingPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import AuthPage from "./pages/AuthPage/AuthPage";

class App extends Component {
  state = {
    user: null,
  };

  setUserInState = (incomingUserData) => {
    this.setState({ user: incomingUserData });
  };

  render() {
    return (
      <main className="App">
        {this.state.user ? (
          <Routes>
            <Route
              path="/mylisting"
              render={(props) => <MyListingPage {...props} />}
            />
            <Route
              path="/profile"
              render={(props) => <ProfilePage {...props} />}
            />
            <Navigate to="/home" />
          </Routes>
        ) : (
          <AuthPage setUserInState={this.setUserInState} />
        )}
      </main>
    );
  }
}

export default App;
