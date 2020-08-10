import React from "react";
import useAuth from "./useAuth";
import { auth } from "../../DB/firebase";

const ProfilePage = () => {
  const user = useAuth();
  const { photoURL, displayName, email } = user;
  return (
    <div>
      <div>
        <div
          style={{
            background: `url(${photoURL || 'https://res.cloudinary.com/dqcsk8rsc/image/upload/v1577268053/avatar-1-bitmoji_upgwhc.png'})  no-repeat center center`,
            backgroundSize: "cover",
            height: "200px",
            width: "200px"
          }}
         
        ></div>
        <div>
          <h2>{displayName}</h2>
          <h3>{email}</h3>
        </div>
      </div>
      <button
       
        onClick={() => {
          auth.signOut();
        }}
      >
        Sign out
      </button>
    </div>
  );
};
export default ProfilePage;
