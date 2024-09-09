import "./App.css";
import { Outlet, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import UserContext from "./context/UserContext";
import { useContext, useEffect, useState } from "react";
import { checkToken } from "./api/storage";
import Navbar from "./componet/Navbar";
import "./assets/CSS/style.css";
import Myfoter from "./componet/Myfoter";
const App = () => {
  const [user, setUser] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const tokenAvailable = checkToken();
    console.log(tokenAvailable);
    if (tokenAvailable) {
      setUser(true);
    } else {
      navigate("/auth/register");
    }
  }, [user]);
  //cheak current location if its login or register
  const hideNavbar =
    location.pathname === "/auth/login" ||
    location.pathname === "/auth/register";
  return (
    <UserContext.Provider value={[user, setUser]}>
      <div>
        {/* Conditionally render the Navbar based on the current path */}
        {/* {!hideNavbar && <Navbar />} */}

        <Outlet />
      </div>
    </UserContext.Provider>
  );
};
export default App;
