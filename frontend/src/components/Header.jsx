import React, { useState } from 'react';
import logo from './assets/logo.png';
import { FaSearch, FaUser } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [searchVisible, setSearchVisible] = useState(false);

  const handleSearchHover = () => {
    setSearchVisible(true);
  };

  const handleSearchLeave = () => {
    setSearchVisible(false);
  };

  return (
    <>
      <div className="navbar flex justify-between items-center mx-3 my-0.4 p-4 rounded-3xl bg-gray-800 shadow-lg">
        <div className="flex items-center">
        <div>
          <a href='/'> 
            <img src={logo} className="h-10 mx-5" alt="Hal-Jivi" />
          </a>
        </div>
          <div className="text-white">
            <a className="mx-2 hover:text-[#00adb5] transition-colors" href="/">Home</a>
            <a className="mx-2 hover:text-[#00adb5] transition-colors" href="/ecom">E-Commerce</a>
            <a className="mx-2 hover:text-[#00adb5] transition-colors" href="/emandi">E-Mandi</a>
            <a className="mx-2 hover:text-[#00adb5] transition-colors" href="/msp">MSP</a>
            <a className="mx-2 hover:text-[#00adb5] transition-colors" href="/about">About</a>
            <a className="mx-2 hover:text-[#00adb5] transition-colors" href="/customercare">Customer Care</a>
          </div>
        </div>

        <div className="flex items-center">
          <div 
            className="relative"
            onMouseEnter={handleSearchHover} 
            onMouseLeave={handleSearchLeave}
          >
            <button className="search-btn bg-transparent hover:bg-[#00adb5] rounded-full p-1">
              <FaSearch className="h-6 text-white" />
            </button>
            {searchVisible && (
              <input 
                className="search-box bg-gray-700 text-white placeholder-gray-400 mx-1 my-2 px-2 py-1 rounded-lg border border-gray-600 focus:outline-none focus:ring focus:ring-[#00adb5]" 
                type="text" 
                placeholder="Search" 
              />
            )}
          </div>

          <div className="ml-4">
            <ThemeToggle />
          </div>
          <a href='/user' className="flex items-center text-white mx-2">
            <FaUser className="h-8 text-white" />
            <span className="ml-1 hover:text-[#00adb5] transition-colors">User</span>
          </a>
        </div>
      </div>

      <style>
        {`
          .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #2b2b2b;
            padding: 1rem;
            border-radius: 1.5rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }

          .logo {
            height: 40px;
          }

          .navbar a {
            color: white;
            text-decoration: none;
            margin: 0 0.5rem;
            transition: color 0.3s;
          }

          .navbar a:hover {
            color: #00adb5;
          }

          .search-box {
            width: 0;
            opacity: 0;
            visibility: hidden;
            transition: width 0.3s ease, opacity 0.3s ease, visibility 0.3s ease;
          }

          .navbar .search-btn:hover + .search-box {
            width: 150px;
            opacity: 1;
            visibility: visible;
          }

          .search-box:focus {
            outline: none;
            border-color: #00adb5;
            box-shadow: 0 0 5px rgba(0, 173, 181, 0.8);
          }

          @media (max-width: 768px) {
            .navbar {
              flex-direction: column;
              align-items: flex-start;
            }

            .navbar a {
              margin-bottom: 10px;
            }

            .search-box {
              width: 150px;
            }
          }
        `}
      </style>
    </>
  );
};

export default Header;
