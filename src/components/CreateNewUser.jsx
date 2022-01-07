import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createNewUser } from "../features/user";

function CreateNewUser() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const handleUserNameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleNewUser = (e) => {
    const newUser = {
      username: username,
      password: password,
      fullName: fullName,
      loggedIn: true,
    };
    dispatch(createNewUser(newUser));
  };
  return (
    <div>
      <div>
        <label>Enter username:</label>
        <input
          type="text"
          placeholder="Enter a username"
          value={username}
          onChange={handleUserNameChange}
        />
      </div>
      <div>
        <label>Enter password: </label>
        <input
          type="password"
          name=""
          placeholder="Enter a password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div>
        <label>Enter your name: </label>
        <input
          type="text"
          name=""
          placeholder="Enter your Full name"
          value={fullName}
          onChange={handleFullNameChange}
        />
      </div>
      <div>
        <button onClick={handleNewUser}>Create new user</button>
      </div>
    </div>
  );
}

export default CreateNewUser;
