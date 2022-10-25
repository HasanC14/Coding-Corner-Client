import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Page/Blog/Blog";
import Course from "../Page/Course/Course";
import FAQ from "../Page/FAQ/FAQ.js";
import Home from "../Page/Home/Home";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";
import Reviews from "../Page/Reviews/Reviews";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/Course", element: <Course></Course> },
      { path: "/Login", element: <Login></Login> },
      { path: "/Register", element: <Register></Register> },
    ],
  },
]);
