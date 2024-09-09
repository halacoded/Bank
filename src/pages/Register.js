import React, { useState } from "react";
import { register } from "../api/auth";
import { useMutation } from "@tanstack/react-query";
import UserContext from "../context/UserContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Bankimage from "../assets/data/card-6624_256.gif";
import Banklogo from "../assets/data/a-linear-design-icon-of-bank-building-vector.jpg";
const Register = () => {
  const [userInfo, setUserInfo] = useState({});
  const [user, setUser] = useContext(UserContext);
  //to creat profile on backend
  const { mutate } = useMutation({
    mutationKey: ["register"],
    mutationFn: () => register(userInfo),
    onSuccess: () => {
      setUser(true);
    },
  });

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.files[0] });
    } else {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    mutate(); //creat profile
    // <Navigat></Navigat>
  };
  if (user) {
    return <Navigate to="/" />;
  }
  return (
    <div className="">
      {/* Logo */}
      <div className="flex gap-3">
        <img src={Banklogo} className="h-10 w-10" alt="bank" />

        <h1 className="mt-3">H&H Bank</h1>
      </div>
      {/* Register */}
      <div className="flex items-center justify-center gap-10 h-lvh ">
        <div className="flex flex-col  items-center justify-center">
          <h1 className="text-blue-500 font-bold size">
            Register your account
          </h1>
          <p>
            Already registered? <></>
            <Link
              to="/auth/login"
              className="text-blue-500 hover:text-sm hover:underline"
            >
              Login
            </Link>
          </p>
          <form onSubmit={handleFormSubmit}>
            <div>
              <label htmlFor="username">username</label>
              <input
                type="text"
                id="username"
                name="username"
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="image">Profile Image</label>
              <input
                type="file"
                id="image"
                name="image"
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <button
                className="w-full h-10 bg-blue-500 text-white rounded-m font-bold"
                onClick={handleFormSubmit}
                type="submit"
              >
                Register
              </button>
            </div>
          </form>
        </div>
        <div>
          <img src={Bankimage} alt="bank" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Register;
