import { createBrowserRouter } from "react-router-dom";
import Roots from "../Roots/Roots";
import Home from "../Home/Home";
import Error from "../Error/Error";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import Dashboard from "../Dashboard/Dashboard";
import AddFood from "../Dashboard/Manager/AddFood";
import UserProfile from "../Dashboard/UserProfile";
import AllFoods from "../Home/AllFoods";

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
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/all-foods",
        element: <AllFoods></AllFoods>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "profile",
        element: <UserProfile></UserProfile>,
      },
      {
        path: "add-food",
        element: <AddFood></AddFood>,
      },
    ],
  },
]);
