import React from "react";
import Card from "../Card/Card";
import { Link } from "react-router-dom";

export default function UserListings(props) {
  return (
    <div>
      <h1>My Listings</h1>
      {props.listings.map((listing) =>
        props.user._id === listing.user ? (
          <div className="home__section">
            <Link to={`/listing/${listing._id}`}>
              <Card
                src={listing.image}
                title={listing.title}
                price={`$${listing.price}/night`}
                description={listing.description}
              />
            </Link>
          </div>
        ) : (
          <></>
        )
      )}
    </div>
  );
}
