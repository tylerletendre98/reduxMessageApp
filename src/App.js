import "./App.css";
import DisplayMessage from "./components/displayMessage";
import CreateNewMessage from "./components/createNewMessage";
import Login from "./components/Login";
import DisplayUser from "./components/DisplayUser";
import { useSelector } from "react-redux";
import LogoutButton from "./components/logoutButton";
import CreateNewUser from "./components/CreateNewUser";
function App() {
  const currentUser = useSelector(
    (state) => state.user.value.currentLoggedInUser
  );
  const users = useSelector((state) => state.user.value.users);
  console.log(users);
  console.log(currentUser);

  if (users.length === 0 || currentUser.loggedIn === undefined) {
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
