import "./App.css";
import ReactDOM from "react-dom";
import Register from "./pages/Register";
import { Login } from "./pages/Login";
import UserContext from "./context/UserContext";
import { useContext } from "react";
import { Home } from "./pages/Home";
import Navbar from "./componet/navbar";

const App = () => {
  return (
    <div>
      <Navbar />;
    </div>
  );
};
export default App;
