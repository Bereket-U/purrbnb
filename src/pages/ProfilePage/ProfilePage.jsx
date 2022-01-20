import React from "react";
import UserListings from "../../components/UserListings/UserListings";

export default function ProfilePage(props) {
  return (
    <div>
      <UserListings user={props.user} listings={props.listings} />
    </div>
  );
}
