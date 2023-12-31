import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-blue-300">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-primary btn-circle">
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
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black"
            >
             <Link to="/">
                Home
             </Link>
              <Link to="/members">
                Meet Our Team
              </Link>
              <Link to="/about">
                About
              </Link>
              <Link to="/dashboard">
                Dasboard
              </Link>
            </ul>
          </div>
        </div>
        <div className="navbar-center text-white">
          <p className="text-white font-bold text-6xl">CSB</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
