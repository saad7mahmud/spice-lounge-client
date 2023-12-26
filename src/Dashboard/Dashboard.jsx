import { NavLink, Outlet } from "react-router-dom";
import UserProfile from "./UserProfile";
import {
  IoFastFoodOutline,
  IoHomeOutline,
  IoPersonOutline,
} from "react-icons/io5";

const Dashboard = () => {
  return (
    <div>
      <div>
        <div className="flex">
          <div className="min-h-screen p-5 bg-base-300">
            <h1 className="font-bold text-2xl mb-5">Dashboard</h1>
            <ul className="space-y-2 menu">
              <li>
                <NavLink to="/dashboard/profile">
                  <IoPersonOutline />
                  My Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/add-food">
                  <IoFastFoodOutline />
                  Add Food
                </NavLink>
              </li>
            </ul>
            <hr className="m-5" />
            <div className="menu">
              <ul>
                <li>
                  <NavLink to="/">
                    {" "}
                    <IoHomeOutline />
                    Home
                  </NavLink>
                </li>
              </ul> 
            </div>
          </div>
          <div className="p-9 mx-auto">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
