import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import Register from "./pages/Register";
import { Login } from "./pages/Login";
import Home from "./pages/Home";
import Transactions from "./pages/Transactions";
import Users from "./pages/Users";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Auth from "./pages/Auth";
import Main from "./pages/Main";
const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/Auth",
        element: <Auth />,
        children: [
          {
            path: "Register",
            element: <Register />,
          },
          {
            path: "Login",
            element: <Login />,
          },
        ],
      },
      {
        path: "/",
        element: <Main />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "Profile",
            element: <Profile />,
          },
          {
            path: "Transactions",
            element: <Transactions />,
          },
          {
            path: "Users",
            element: <Users />,
          },
          {
            path: "About",
            element: <About />,
          },
        ],
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
reportWebVitals();
