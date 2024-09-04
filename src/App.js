import "./App.css";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import UserContext from "./context/UserContext";
import { useContext, useEffect, useState } from "react";
import { checkToken } from "./api/storage";
import Navbar from "./componet/Navbar";
import "./assets/CSS/style.css";
const App = () => {
  const [user, setUser] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setUser(checkToken);
  }, []);
  //cheak current location if its login or register
  const hideNavbar =
    location.pathname === "/login" || location.pathname === "/";
  return (
    <UserContext.Provider value={[user, setUser]}>
      <div>
        {/* Conditionally render the Navbar based on the current path */}
        {!hideNavbar && <Navbar />}

        <Outlet />
      </div>
    </UserContext.Provider>
  );
};
export default App;
