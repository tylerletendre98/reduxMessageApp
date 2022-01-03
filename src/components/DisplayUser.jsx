import React from "react";
import { useSelector } from "react-redux";

function DisplayUser() {
  const user = useSelector((state) => state.user.value);
  console.log(user);

  return (
    <div>
      <div>
        <h3>{user.email}</h3>
        <h3>{user.name}</h3>
      </div>
    </div>
  );
}

export default DisplayUser;
