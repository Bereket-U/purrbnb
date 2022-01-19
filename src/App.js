import React, { Component, useState, useEffect } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import MyListingPage from "./pages/MyListingPage/MyListingPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import Menu from "./components/Menu/Menu";
import AuthPage from "./pages/AuthPage/AuthPage";

export default function App() {
  let navigate = useNavigate();
  const [user, setUser] = useState(null);

  const setUserInState = (incomingUserData) => {
    setUser({ user: incomingUserData });
  };
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      let userDoc = JSON.parse(atob(token.split(".")[1])).user;
      setUser(userDoc);
    }
  }, []);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="App">
      {user ? (
        <>
          <Menu handleLogout={handleLogout} />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/mylisting" element={<MyListingPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </>
      ) : (
        <>
          <Routes>
            <Route
              path="/"
              element={<AuthPage setUserInState={setUserInState} />}
            />
          </Routes>


      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/mylisting/:id" element={<MyListingPage />} />
      </Routes>

          {/* <AuthPage setUserInState={this.setUserInState} /> */}
        </>
      )}
      
    </div>
  );
}
