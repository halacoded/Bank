import "./App.css";
import ReactDOM from "react-dom";
import Register from "./pages/Register";
import { Login } from "./pages/Login";

import UserContext from "./context/UserContext";
import { useContext } from "react";

const App = () => {
  const [user, setUser] = useContext();
  return (
    <div>
      {/* <Register /> */}
      <Login />
    </div>
  );
};
export default App;
