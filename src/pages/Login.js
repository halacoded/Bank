import React, { useState } from "react";
import { login } from "../api/auth";
import { useMutation } from "@tanstack/react-query";
import UserContext from "../context/UserContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Banklogo from "../assets/data/a-linear-design-icon-of-bank-building-vector.jpg";
import Bankimage from "../assets/data/4957136.jpg";
import { Link } from "react-router-dom";
export const Login = () => {
  const [userInfo, setUserInfo] = useState({});
  const [user, setUser] = useContext(UserContext);
  const { mutate } = useMutation({
    mutationKey: ["login"],
    mutationFn: () => login(userInfo),
    onSuccess: () => {
      setUser(true);
    },
  });
  if (user) {
    return <Navigate to="/Home" />;
  }
  const handleChange = (e) => {
    setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    mutate();
  };
  return (
    <div>
      {/* Logo */}
      <div className="flex gap-3">
        <img src={Banklogo} className="h-10 w-10" alt="bank" />

        <h1 className="mt-3">H&H Bank</h1>
      </div>
      {/*Log in*/}
      <div className="flex items-center justify-center gap-10 h-lvh ">
        <div className="flex flex-col  items-center justify-center">
          <h1 className="text-blue-500 font-bold size">Login</h1>
          <p>
            Don't have account ?<></>
            <Link
              to="/"
              className="text-blue-500 hover:text-sm hover:underline"
            >
              Register
            </Link>
          </p>
          <form onSubmit={handleFormSubmit}>
            <div>
              <label htmlFor="username">username</label>
              <input
                type="username"
                name="username"
                id="username"
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password">Password</label>
              <input
                name="password"
                type="password"
                id="password"
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
              >
                Login
              </button>
            </div>
          </form>
        </div>
        <div>
          <img src={Bankimage} alt="bank" className="w-96 h-96" />
        </div>
      </div>
    </div>
  );
};
