import React from "react";
import { Outlet } from "react-router-dom";
import Myfoter from "../componet/Myfoter";
import Navbar from "../componet/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Myfoter />
    </div>
  );
};

export default Main;
