import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Page/Blog/Blog";
import Checkout from "../Page/Checkout/Checkout";
import Course from "../Page/Course/Course";
import Error from "../Page/Error/Error";
import FAQ from "../Page/FAQ/FAQ";
import Home from "../Page/Home/Home";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";
import SelectedCourse from "../Page/SelectedCourse/SelectedCourse";
import SelectedTopic from "../Page/SelectedTopic/SelectedTopic";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://coding-corner-server.vercel.app/categories"),
      },
      {
        path: "/Course",
        element: <Course></Course>,
        loader: () =>
          fetch("https://coding-corner-server.vercel.app/categoryDetails"),
      },
      {
        path: "/Course/:id",
        element: <SelectedTopic></SelectedTopic>,
        loader: ({ params }) =>
          fetch(
            `https://coding-corner-server.vercel.app/categories/${params.id}`
          ),
      },
      {
        path: "/SelectedCourse/:id",
        element: <SelectedCourse></SelectedCourse>,
        loader: ({ params }) =>
          fetch(
            `https://coding-corner-server.vercel.app/categoryDetails/${params.id}`
          ),
      },
      {
        path: "/Checkout/:id",
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://coding-corner-server.vercel.app/categoryDetails/${params.id}`
          ),
      },
      { path: "/Blog", element: <Blog></Blog> },
      { path: "/faq", element: <FAQ></FAQ> },
      { path: "/Login", element: <Login></Login> },
      { path: "/Register", element: <Register></Register> },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);
