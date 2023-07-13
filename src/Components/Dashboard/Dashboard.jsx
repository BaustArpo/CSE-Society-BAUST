import React from 'react';
import AddCoffe from '../AddCoffe';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='flex justify-center items-center mt-6 mb-6'>
           <div></div>

           <div>
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
             <Link to="/admin">
                Members
             </Link>
              <Link to="/addCofee">
                Add Member
              </Link>
            </ul>
          </div>
        </div>
        <div className="navbar-center text-white">
          <p className="text-white font-bold text-6xl">Admin Dashboard</p>
        </div>
      </div>
           </div>
        </div>
    );
};

export default Dashboard;