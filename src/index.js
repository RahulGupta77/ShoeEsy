import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import App from "./App";
import ErrorPage from "./components/ErrorPage";
import HomePage from "./components/HomePage/HomePage";
import Login from "./components/Login";
import Register from "./components/Register";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/products",
        element: "Product Page ....",
      },
      {
        path: "/cart",
        element: "Cart Page...",
      },
      {
        path: "/checkout",
        element: "Checkout Page...",
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

//note another way to nest checkout in cart is to use outlet and make checkout the children of cart

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
