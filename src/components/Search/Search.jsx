import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const [query, setQuery] = useState("");
  let navigate = useNavigate();
  const handleSearchClick = () => {
    navigate(`/search?term=${query}`);
  };

  return (
    <div className="d-flex justify-content-center search ">
      <input
        className="form-control me-3"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        onClick={handleSearchClick}
        className="btn btn-outline-success"
        type="submit"
      >
        Search
      </button>
    </div>
  );
}
