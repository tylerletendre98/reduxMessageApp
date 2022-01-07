import "./App.css";
import DisplayMessage from "./components/displayMessage";
import CreateNewMessage from "./components/createNewMessage";
import Login from "./components/Login";
import DisplayUser from "./components/DisplayUser";
import { useSelector } from "react-redux";
import LogoutButton from "./components/logoutButton";
import CreateNewUser from "./components/CreateNewUser";
function App() {
  const user = useSelector((state) => state.user.value);

  if (user.users.length === 0) {
    return (
      <div className="App">
        <div>
          <Login />
        </div>
        <div>
          <p>or</p>
        </div>
        <div>
          <CreateNewUser />
        </div>
      </div>
    );
  } else {
    console.log(user.initialStateValue);
    return (
      <div className="App">
        <DisplayUser />
        <DisplayMessage />
        <CreateNewMessage />
        <LogoutButton />
      </div>
    );
  }
}

export default App;
