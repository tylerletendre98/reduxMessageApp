import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/user";

function Login() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleLogin = (e) => {
    const newUser = {
      name: name,
      email: email,
      loggedIn: true,
    };
    dispatch(login(newUser));
  };

  return (
    <div>
      <div>
        <div>
          <h3>Please Log in</h3>
        </div>
        <div>
          <div>
            <label htmlFor="">Email: </label>
            <input
              type="text"
              placeholder="enter email"
              onChange={handleEmailChange}
              value={email}
            />
          </div>
          <div>
            <label htmlFor="">Name: </label>
            <input
              type="text"
              placeholder="enter your name"
              onChange={handleNameChange}
              value={name}
            />
          </div>
          <div>
            <button onClick={() => handleLogin()}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
