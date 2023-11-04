import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Navigation = () => {
  const { user, logOut } = useContext(AuthContext);
  const avatar = user?.photoURL;
  const handleSignOut = () => {
    logOut().then(() => {
      console.log("Sign out successful");
    });
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-orange-500 hover:bg-orange-600 focus:bg-orange-600 hover:text-white font-bold text-white px-4 py-2 rounded-md"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200  px-4 py-2 rounded-md"
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          className="block px-4 py-2 text-gray-700 hover:bg-gray-300 rounded-md"
          activeClassName="bg-red-500 text-white"
          to="/blog"
        >
          Blog
        </NavLink>
      </li>
    </>
  );

  return (
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="font-ext normal-case text-xl">
          Logo
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3">{navLinks}</ul>
      </div>
      <div className="navbar-end gap-5">
        {user ? (
          <>
            <button
              onClick={handleSignOut}
              className="bg-transparent text-gray-700 hover:bg-gray-200 border border-gray-300 px-4 py-2 rounded-md"
            >
              Sign Out
            </button>
            <div className="avatar placeholder">
              <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                <img src={avatar} alt="" className="rounded-full" />
              </div>
            </div>
          </>
        ) : (
          <NavLink
            to="/signin"
            className="bg-transparent text-gray-700 hover:bg-gray-200 border border-gray-300 px-4 py-2 rounded-md"
          >
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navigation;
