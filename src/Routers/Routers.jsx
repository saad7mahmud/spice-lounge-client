import { createBrowserRouter } from "react-router-dom";
import Roots from "../Roots/Roots";
import Home from "../Home/Home";
import Error from "../Error/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    //   {
    //     path: "/login",
    //     element: <Login></Login>,
    //   },
    //   {
    //     path: "/register",
    //     element: <Register></Register>,
    //   },
    ],
  },
]);
