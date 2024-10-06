import { NavLink } from "react-router-dom";
import { useState } from "react";
function Navbar({ toggleColor }) {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const handleMenuToggle = () => {
    setIsOpenMenu(!isOpenMenu);
  };
  return (
    <nav className="bg-gray-900 w-full p-4 shadow-lg navbar">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">MyNewsApp</div>
        <ul className="hidden md:flex space-x-5 text-white text-lg items-center">
          <li>
            <NavLink to="/" className="hover:text-blue-700">
              General
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/entertainment"
              activeClassName="font-bold"
              className="hover:text-blue-700"
            >
              Entertainment
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/technology"
              activeClassName="font-bold"
              className="hover:text-blue-700"
            >
              Technology
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/business"
              activeClassName="font-bold"
              className="hover:text-blue-700"
            >
              business
            </NavLink>
          </li>
          <li>
            <img
              src="https://cdn-icons-png.flaticon.com/128/786/786484.png"
              alt="Toggle Color"
              className="w-8 h-8 rounded-full hover:cursor-pointer"
              onClick={toggleColor}
            />
          </li>
        </ul>
        {/* Mobile Menu */}

        <div className="md:hidden flex items-center">
          <button
            className="text-white hover:text-blue-400 focus:outline-none"
            onClick={handleMenuToggle}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpenMenu && (
        <ul className="flex flex-col mt-2 space-y-2  text-white text-lg md:hidden">
          <img
            src="https://cdn-icons-png.flaticon.com/128/786/786484.png"
            alt="Toggle Color"
            className="w-8 h-8 rounded-full hover:cursor-pointer"
            onClick={toggleColor}
          />
          <li>
            <NavLink
              to="/"
              className="block px-4 py-2 hover:bg-gray-800"
              onClick={handleMenuToggle}
            >
              General
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/entertainment"
              className="block px-4 py-2 hover:bg-gray-800"
              onClick={handleMenuToggle}
            >
              Entertainment
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/technology"
              className="block px-4 py-2 hover:bg-gray-800"
              onClick={handleMenuToggle}
            >
              Technology
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sports"
              activeClassName="font-bold"
              className="block px-4 py-2 hover:bg-gray-800"
              onClick={handleMenuToggle}
            >
              Sports
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
