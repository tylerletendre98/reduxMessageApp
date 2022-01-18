import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MessagingPage from "./pages/MessagingPage";

function App() {
  
  return(
    <div>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path="/messagePage" element={<MessagingPage/>}/>
      </Routes>
    </div>
  )
}

export default App;
