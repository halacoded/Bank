import React from "react";
import { Link, NavLink } from "react-router-dom";
import Banklogo from "../assets/data/a-linear-design-icon-of-bank-building-vector.jpg";
import UserContext from "../context/UserContext";
import { useContext } from "react";
const Navbar = () => {
  const [user, setUser] = useContext(UserContext);
  return (
    <nav className="bg-gray-800">
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
          <div className="block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink
                to="/Home"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </NavLink>
              <NavLink
                to="/Transactions"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Transactions
              </NavLink>
              <NavLink
                to="/Users"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Users
              </NavLink>

              <>
                <NavLink
                  to="/Profile"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Profile
                </NavLink>
              </>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
