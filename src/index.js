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
const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Profile",
        element: <Profile />,
      },
      {
        path: "/Transactions",
        element: <Transactions />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/Register",
        element: <Register />,
      },
      {
        path: "/Users",
        element: <Users />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);

// ReactDOM.render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
