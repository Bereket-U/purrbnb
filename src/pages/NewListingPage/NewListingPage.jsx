import React from "react";
import NewListingForm from "../../components/NewListingForm/NewListingForm";

export default function NewListingPage(props) {
  return (
    <div>
      <NewListingForm user={props.user} setListings={props.setListings} />
    </div>
  );
}
