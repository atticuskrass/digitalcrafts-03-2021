import React from "react";

// feeding userDetails into JSX elements for display
export default function UserDisplay({ userDetails }) {
  return (
    <div>
      <h1>User Detail</h1>
      <p>{userDetails.userName}</p>
      <p>{userDetails.email}</p>
      <p>{userDetails.passWord}</p>
    </div>
  );
}