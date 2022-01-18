import React from "react";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import MyListingPage from "./pages/MyListingPage/MyListingPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import Menu from "./components/Menu/Menu";
import Search from "./components/Search/Search";

function App() {
  return (
    <div className="App">
      <Menu />
      < Search />

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
