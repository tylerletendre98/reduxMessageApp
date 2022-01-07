import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/user";

function Login() {
  const users = useSelector((state) => state.user.value.users);
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
      loggedIn: true,
    };
    for (let i = 0; i < users.length; i++) {
      console.log(users[i].username);
      if (
        users[i].username === user.username &&
        users[i].password === user.password
      ) {
        dispatch(login(user));
      } else {
        return (
          <div>
            <h1>incorrect username or password</h1>
          </div>
        );
      }
    }
  };

  return (
    <div>
      <div>
        <div>
          <h3>Please Log in</h3>
        </div>
        <div>
          <div>
            <label htmlFor="">Username: </label>
            <input
              type="text"
              placeholder="enter your username"
              onChange={handleUsernameChange}
              value={username}
            />
          </div>
          <div>
            <label htmlFor="">Password: </label>
            <input
              type="password"
              placeholder="enter your password"
              onChange={handlePasswordChange}
            />
          </div>
          <div>
            <button onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
