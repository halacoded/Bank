import React, { useState } from "react";
import { register } from "../api/auth";
import { useMutation } from "@tanstack/react-query";
const Register = () => {
  const [userInfo, setUserInfo] = useState({});

  //to creat profile on backend
  const { mutate } = useMutation({
    mutationKey: ["register"],
    mutationFn: () => register(userInfo),
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

  return (
    <div>
      <div>
        <h2>Register</h2>
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
