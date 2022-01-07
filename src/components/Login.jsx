import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/user";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // const handlePasswordChange = (e) => {
  //   setName(e.target.value);
  // };

  const handleLogin = (e) => {
    const newUser = {
      password: password,
      email: email,
      loggedIn: true,
    };
    // if (password === currentUserPassword) {
    //   dispatch(login(newUser));
    // }
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
            <label htmlFor="">Password: </label>
            <input type="password" placeholder="enter your password" />
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
