import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";


const SearchResultsPage = (props) => {
  const queryParams = new URLSearchParams(window.location.search);
  const term = queryParams.get("term");
  const [results, setResults] = useState([]);

  useEffect(async () => {
    try {
      const fetchResponse = await fetch(`/api/listings?term=${term}`);
      if (!fetchResponse.ok) throw new Error("Fetch failed - Bad request");
      const response = await fetchResponse.json();
      setResults(response);
    } catch (error) {}
  }, []);

  return (
    <div>
      <div>Search Results for your search {term}</div>
      <div className="home__section">
        {results.map((listing) => (
          <Link key={listing._id} to={`/listing/${listing._id}`}>
            <Card
              src={listing.image}
              title={listing.title}
              price={`$${listing.price}/night`}
              description={listing.description}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchResultsPage;
