import React, { useState } from "react";
import { register } from "../api/auth";
import { useMutation } from "@tanstack/react-query";
import UserContext from "../context/UserContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
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
  // if (user) {
  //   return <Navigate to="/" />;
  // }
  return (
    <div>
      {/* Logo */}
      <div className="flex">
        <img
          src="./assets/data/a-linear-design-icon-of-bank-building-vector.jpg"
          alt="bank"
        />
        <h1>H&H Bank</h1>
      </div>
      {/* Register */}
      <div>
        <h2>Register</h2>
        <p>
          Already registered?
          <Link to="/login" className="text-blue-500 hover:underline">
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
              required
            />
          </div>
          <div>
            <button onClick={handleFormSubmit} type="submit">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
