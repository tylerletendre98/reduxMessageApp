import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createNewUser } from "../features/user";
import "./createNewUser.css";

function CreateNewUser() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const handleUserNameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNewUser = (e) => {
    const newUser = {
      username: username,
      password: password,
      fullname: fullName,
      email: email,
      loggedIn: true,
    };
    dispatch(createNewUser(newUser));
  };
  return (
    <div>
      <div className="create-user">
        <div className="create-user-inputs">
          <div className="create-user-input">
            <div>
              <label>Enter username: </label>
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
              <label>Enter your email: </label>
              <input
                type="text"
                name=""
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div>
              <button onClick={handleNewUser}>Create new user</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateNewUser;
