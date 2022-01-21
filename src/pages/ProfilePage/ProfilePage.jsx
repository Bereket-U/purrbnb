import React from "react";
import UserListings from "../../components/UserListings/UserListings";
import "./ProfilePage.css"

export default function ProfilePage(props) {
  return (
    <div className= "ProfilePage">
     
      
      <div class="container mt-4 mb-4 p-3 d-flex justify-content-center">
    <div class="card p-4">
        <div class=" image d-flex flex-column justify-content-center align-items-center"> <button class="btn btn-light"> <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/14cb6b84808917.5d68451d7d126.gif" height="100" width="100" /></button> <span class="name mt-3">{props.user.name}</span> <span class="idd">{props.user.email}</span>

        </div>
      </div>
  </div>
   



      <UserListings user={props.user} listings={props.listings} />
    </div>



  );
}
