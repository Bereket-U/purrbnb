import React, { Component } from "react";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import MyListingPage from "./pages/MyListingPage/MyListingPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import AuthPage from "./pages/AuthPage/AuthPage";
import Menu from "./components/Menu/Menu"
import Search from "./components/Search/Search"

class App extends Component {
  state = {
    user: null,
  };

  setUserInState = (incomingUserData) => {
    this.setState({ user: incomingUserData });
  };

  componentDidMount = () => {
    let token = localStorage.getItem("token");
    if (token) {
      let userDoc = JSON.parse(atob(token.split(".")[1])).user;
      this.setState({ user: userDoc });
    }
  };

  render() {
    return (
      <div className="App">
        <Menu />
        <Search />
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
      </div>
    );
  }
}

export default App;
