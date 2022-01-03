import "./App.css";
import DisplayMessage from "./components/displayMessage";
import CreateNewMessage from "./components/createNewMessage";
import Login from "./components/Login";
import DisplayUser from "./components/DisplayUser";
import { useSelector } from "react-redux";
function App() {
  const user = useSelector((state) => state.user.value);

  if (user.loggedIn === false) {
    return (
      <div className="App">
        <Login />
        <DisplayMessage />
        <CreateNewMessage />
      </div>
    );
  } else {
    console.log(user.initialStateValue);
    return (
      <div className="App">
        <DisplayUser />
        <DisplayMessage />
        <CreateNewMessage />
      </div>
    );
  }
}

export default App;
