import { Route, Routes, Link } from "react-router-dom";
import React from "react";

export default function Menu() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
            <a className="navbar-brand" href="#">
              PurrBnB
            </a>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/home"
                  className="nav-link active"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/profile"
                  className="nav-link active"
                  aria-current="page"
                >
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/mylisting"
                  className="nav-link active"
                  aria-current="page"
                >
                  My Listing
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
