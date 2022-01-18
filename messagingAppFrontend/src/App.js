import "./App.css";
import DisplayMessage from "./components/displayMessage";
import CreateNewMessage from "./components/createNewMessage";
import Login from "./components/Login";
import DisplayUser from "./components/DisplayUser";
import { useSelector } from "react-redux";
import LogoutButton from "./components/logoutButton";
import CreateNewUser from "./components/CreateNewUser";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MessagingPage from "./pages/MessagingPage";

function App() {
  //this brings in current user out of store
  const dispatch = useDispatch();
  const currentUser = useSelector(
    (state) => state.user.value.currentLoggedInUser
  );
  console.log(currentUser)
  
  
  return(
    <div>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path="/messagePage" element={<MessagingPage/>}/>
      </Routes>
    </div>
  )
  // if ( currentUser.loggedIn === undefined) {
  //   return (
  //     <div className="App">
  //       <div>
  //         <Login />
  //       </div>
  //       <div>
  //         <p>If you dont have a account create one below</p>
  //       </div>
  //       <div>
  //         <CreateNewUser />
  //       </div>
  //     </div>
  //   );
  // } else if(currentUser !== undefined) {
  //   return (
  //     <div className="App">
  //       <DisplayUser />
  //       <DisplayMessage />
  //       <CreateNewMessage />
  //       <LogoutButton />
  //     </div>
  //   );
  // }
}

export default App;
