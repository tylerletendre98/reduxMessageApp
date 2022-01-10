import React from "react";
import { useSelector } from "react-redux";

function DisplayUser() {
  const currentLoggedInUser = useSelector(
    (state) => state.user.value.currentLoggedInUser
  );

  return (
    <div>
      <div>
        <h3>{currentLoggedInUser.username}</h3>
        <h3>{currentLoggedInUser.fullname}</h3>
      </div>
    </div>
  );
}

export default DisplayUser;
