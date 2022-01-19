import React from 'react';
import { useParams } from "react-router-dom";

export default function ShowListing(props) {
 let id = useParams().id;
 let listing = props.listings.find(listing => listing._id === id)

 
 const handleDelete = () => {

     alert("Delete")
 }
 
 
 return <div>
      ShowListing
      <img src={listing.image}/>
      <p>{listing.title}</p>
      <p>{listing.price}</p>
      <p>{listing.description}</p>

{props.user._id === listing.user?

<button onClick={()=> handleDelete()}>Delete</button>
:
<> </> 

}



  </div>;
}
