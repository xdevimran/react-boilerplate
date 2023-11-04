import { Link, NavLink } from "react-router-dom";
import UseAuth from "../../../hooks/UseAuth";

const Header = () => {
  const { user, logoutUser } = UseAuth();
  // Function to toggle the mobile menu

  const handleLogOut = () => {
    logoutUser()
      .then(() => {
        console.log("User logged out");
      })
      .catch((error) => {
        console.log(error);
      });
    window.location.reload();
  };
  const toggleMobileMenu = () => {
    const mobileMenu = document.querySelector("#mobile-menu");
    mobileMenu.classList.toggle("hidden");
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "btn  bg-orange-500 hover:bg-orange-600 focus:bg-orange-600 text-white"
              : "block px-4 py-2 hover:bg-gray-100"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive
              ? "btn  bg-orange-500 hover:bg-orange-600 focus:bg-orange-600 text-white"
              : "block px-4 py-2 hover:bg-gray-100"
          }
        >
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/resources"
          className={({ isActive }) =>
            isActive
              ? "btn  bg-orange-500 hover:bg-orange-600 focus:bg-orange-600 text-white"
              : "block px-4 py-2 hover:bg-gray-100"
          }
        >
          Resources
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "btn  bg-orange-500 hover:bg-orange-600 focus:bg-orange-600 text-white"
              : "block px-4 py-2 hover:bg-gray-100"
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <header className="">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0">
              <a href="#" title="" className="flex">
                <img
                  className="w-auto h-8"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/2/logo.svg"
                  alt=""
                />
              </a>
            </div>

            <button
              type="button"
              onClick={toggleMobileMenu}
              className="inline-flex p-1 text-black transition-all duration-200 border border-black lg:hidden focus:bg-gray-100 hover:bg-gray-100"
            >
              {/* Mobile menu icon */}
              <svg
                className="block w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Mobile Menu */}
            <div
              id="mobile-menu"
              className="hidden absolute top-16 right-0 bg-white border border-gray-200 w-48 mt-2 shadow-md lg:hidden"
            >
              <ul className="py-2">{navLinks}</ul>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10">
              <ul className="hidden ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10">
                {navLinks}
              </ul>

              {user?.email ? (
                <button onClick={handleLogOut} className="btn btn-outline">
                  LogOut
                </button>
              ) : (
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive
                      ? "btn  bg-orange-500 hover:bg-orange-600 focus:bg-orange-600 text-white"
                      : "block px-4 py-2 hover:bg-gray-100"
                  }
                >
                  Log in
                </NavLink>
              )}

              {/* <NavLink
                to="/signup"
                title=""
                className="inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold text-black border-2 border-black hover:bg-black hover:text-white transition-all duration-200 focus:bg-black focus:text-white"
                role="button"
              >
                Try for free
              </NavLink> */}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
