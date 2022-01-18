import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/user";
import axios from "axios";
import "./login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    const user = {
      username: username,
      password: password,
    };
    axios.post('http://localhost:5000/api/users/login',user )
    .then((res)=>{
      dispatch(login(res.data))
    })
  };

  return (
    <div>
      <div>
        <div>
          <h3>Please Log in</h3>
        </div>
        <div className="login">
          <div className="login-container">
            <div className="login-inputs">
              <div className="login-input">
                <label htmlFor="">Username: </label>
                <input
                  type="text"
                  placeholder="enter your username"
                  onChange={handleUsernameChange}
                  value={username}
                />
              </div>
              <div className="login-input">
                <label htmlFor="">Password: </label>
                <input
                  type="password"
                  placeholder="enter your password"
                  onChange={handlePasswordChange}
                />
              </div>
            </div>
            <div className="login-button">
              <div>
                <button onClick={handleLogin}>Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
