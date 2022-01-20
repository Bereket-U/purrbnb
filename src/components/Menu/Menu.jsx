import { Link } from "react-router-dom";
import React from "react";
import Search from "../Search/Search";
import "./Menu.css";

export default function Menu(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-secondary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to="/" className="navbar-brand">
              PurrBnB
            </Link>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/listing/new"
                  className="nav-link active"
                  aria-current="page"
                >
                  Add Listing
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/profile"
                  className="nav-link active"
                  aria-current="page"
                >
                  <span>{props.user.name}</span>
                </Link>
              </li>
              <li className="nav-item" onClick={() => props.handleLogout()}>
                <Link to="/" className="nav-link active" aria-current="page">
                  Log out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <br />
      <Search />
      <br />
    </div>
  );
}
