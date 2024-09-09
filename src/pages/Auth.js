import React from "react";
import { Outlet } from "react-router-dom";
import { Login } from "./Login";
import Register from "./Register";

const auth = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default auth;
