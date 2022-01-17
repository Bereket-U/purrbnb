import React from "react";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import MyListingPage from "./pages/MyListingPage/MyListingPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

function App() {
  return (
    <div className="App">
      <Link to="/home"> Home ||</Link>

      <Link to="/profile"> Profile ||</Link>

      <Link to="/mylisting"> My Listing ||</Link>

      <h1>Landing Pages</h1>

      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/mylisting" element={<MyListingPage />} />
      </Routes>
    </div>
  );
}

export default App;
