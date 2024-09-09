import React from "react";
import { NavLink } from "react-router-dom";
import { About } from "../pages/About";
import { Link } from "react-router-dom";
const Myfoter = () => {
  return (
    <nav>
      <div
        className="flex m-10  border-b-8 "
        style={{ position: "absolute", bottom: 0, right: 0 }}
      >
        <div className="flex items-end ">
          <Link to="/">
            <span className="font-semibold text-xl text-white"></span>
          </Link>
          <div className="flex  justify-center ">
            <div className="ml-10 flex items-baseline space-x-4 text-black justify-center">
              <NavLink
                to="/About"
                className="text-black hover:bg-blue-500  hover:text-black px-3 py-2 rounded-md text-sm font-medium "
              >
                About
              </NavLink>
              <NavLink
                to="https://mail.google.com/"
                className="text-black hover:bg-blue-500 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
              >
                Email
              </NavLink>
              <NavLink
                to="https://github.com/halacoded/Bank"
                className="text-black hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                GitHup
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Myfoter;
