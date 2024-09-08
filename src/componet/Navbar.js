import React from "react";
import { Link, NavLink } from "react-router-dom";
import Banklogo from "../assets/data/a-linear-design-icon-of-bank-building-vector.jpg";
import UserContext from "../context/UserContext";
import { useContext } from "react";
import { logout } from "../api/storage";
const Navbar = () => {
  const [user, setUser] = useContext(UserContext);
  const HandelLogout = () => {
    setUser(false);
    logout();
  };
  return (
    <nav className="bg-white h-">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex gap-3">
            <img src={Banklogo} className="h-10 w-10" alt="bank" />

            <h1 className="mt-3">H&H Bank</h1>
          </div>
          <div className="flex items-center">
            <Link to="/">
              <span className="font-semibold text-xl text-white"></span>
            </Link>
          </div>
          <div className="flex  justify-center ">
            <div className="ml-10 flex items-baseline space-x-4 text-black justify-center">
              <NavLink
                to="/Home"
                className="text-black hover:bg-blue-500  hover:text-black px-3 py-2 rounded-md text-sm font-medium "
              >
                Home
              </NavLink>
              <NavLink
                to="/Transactions"
                className="text-black hover:bg-blue-500 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
              >
                Transactions
              </NavLink>
              <NavLink
                to="/Users"
                className="text-black hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Users
              </NavLink>

              <>
                <NavLink
                  to="/Profile"
                  className="text-black hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Profile
                </NavLink>
              </>
            </div>
            <div className=" flex justify-items-end underlin ">
              <NavLink
                to="/"
                onClick={HandelLogout}
                className=" text-white hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md  text-sm font-medium bg-sky-800"
              >
                Logout
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
