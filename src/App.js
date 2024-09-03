import "./App.css";
import ReactDOM from "react-dom";
import Register from "./pages/Register";
import { Login } from "./pages/Login";

import UserContext from "./context/UserContext";
import { useContext, useEffect, useState } from "react";
import { checkToken } from "./api/storage";

const App = () => {
  const [user, setUser] = useState(false);
  useEffect(() => {
    setUser(checkToken);
  }, []);
  return (
    <UserContext.Provider value={[user, setUser]}>
      <div>
        <Register />
        {/* <Login /> */}
      </div>
    </UserContext.Provider>
  );
};
export default App;
