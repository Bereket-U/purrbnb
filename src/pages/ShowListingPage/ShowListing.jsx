import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NewListingForm from "../../components/NewListingForm/NewListingForm";
import "./ShowListing.css"
export default function ShowListing(props) {
  const [editMode, setEditMode] = useState(false);
  let navigate = useNavigate();
  let id = useParams().id;
  let listing = props.listings.find((listing) => listing._id === id);
  console.log(listing);

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
    <div className= "ShowListing">
 
      
      <div className="form-container">
          <form >

            <h1>{listing.title} </h1>
            
            <label>Type</label>
            
            <h4>{listing.type}</h4>


           
            <label>Price</label>
            <h4>{`$${listing.price} /Night`} </h4>
            <br/>
           
          
             
            <label>Description</label>
            <h4> {listing.description} </h4>
            
           <br/>
          <img className= "form-image"src={listing.image} alt="" />
            
          </form>
        </div>







  
      {props.user._id === listing.user ? (
        <div>

          <br/>
          <br/>
          <button onClick={handleDelete} className="btn btn-danger " > Delete </button>
          <br/>

          <br/>
          <button onClick={toggleEditMode} className="btn btn-warning"  > Edit </button>
        </div>
      ) : (
        <> </>
      )}
    </div>
  );
}
