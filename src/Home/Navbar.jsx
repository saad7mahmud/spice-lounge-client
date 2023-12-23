import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
  console.log("user:", user);

    const handleLogOut = () => {
      logOut()
        .then((result) => {
          console.log(result);
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="./"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#ef2b47]  font-bold underline "
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/all-foods"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#ef2b47] font-bold  underline "
              : ""
          }
        >
          All Foods
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#ef2b47]  font-bold underline "
              : ""
          }
        >
          Dashboard
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu gap-2 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box "
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/">
            <img className="w-60" src="/public/logo.png" alt="" />
          </Link>
          {/* <a className="btn btn-ghost normal-case text-xl">TechValley</a> */}
        </div>
        <div className="navbar-center  hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end gap-3">
          {user ? <p>{user?.displayName}</p> : ""}

          {user ? (
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user?.photoURL} />
              </div>
            </label>
          ) : (
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://i.ibb.co/HTC51Wq/icon.jpg" />
              </div>
            </label>
          )}
          {user ? (
            <button onClick={handleLogOut} className="btn">
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="btn">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
