import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NewListingForm from "../../components/NewListingForm/NewListingForm";

export default function ShowListing(props) {
  const [editMode, setEditMode] = useState(false);
  let navigate = useNavigate();
  let id = useParams().id;
  let listing = props.listings.find((listing) => listing._id === id);

  const handleDelete = async () => {
    try {
      const deleteResponse = await fetch(`/api/listings/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      // 2. Check "fetchResponse.ok". False means status code was 4xx from the server/controller action
      if (!deleteResponse.ok) throw new Error("Fetch failed - Bad request");
      const response = await deleteResponse.json();
      props.setListings(response);
      navigate("/");
    } catch (error) {
      navigate("/");
    }
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  if (!listing) {
    return <div>Listing does not exist</div>;
  }
  if (editMode) {
    return (
      <div>
        <NewListingForm
          user={props.user}
          setListings={props.setListings}
          editMode={true}
          listing={listing}
        />
        <button onClick={toggleEditMode}>View Mode</button>
      </div>
    );
  }
  return (
    <div>
      ShowListing
      
      <img src={listing.image} alt="" />

      <p>{listing.title}</p>
      <p>{listing.price}</p>
      <p>{listing.description}</p>
      {props.user._id === listing.user ? (
        <div>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={toggleEditMode}>Edit</button>
        </div>
      ) : (
        <> </>
      )}
    </div>
  );
}
