import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import NewListingPage from "./pages/NewListingPage/NewListingPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import Menu from "./components/Menu/Menu";
import AuthPage from "./pages/AuthPage/AuthPage";
import ShowListing from "./pages/ShowListingPage/ShowListing";
import { propTypes } from "react-bootstrap/esm/Image";

export default function App() {
  let navigate = useNavigate();
  const [user, setUser] = useState(null);
  
  const [listings, setListings]=useState([]);
    
  const setUserInState = (incomingUserData) => {
    setUser({ user: incomingUserData });
  };

  const getListings = async () => {
    const fetchResponse = await fetch("/api/listings")
    const response = await fetchResponse.json()
    console.log(response);
     setListings(response)
  }

  useEffect (() => {
     getListings ()
  },[]);
  



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
            <Route path="/" element={<HomePage listings={listings}/>} />
            <Route path="/listing/new" element={<NewListingPage user={user} setListings={setListings}/>} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/listing/:id" element={<ShowListing user={user}
            listings={listings} />} />
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



          {/* <AuthPage setUserInState={this.setUserInState} /> */}
        </>
      )}
      
    </div>
  );
}
