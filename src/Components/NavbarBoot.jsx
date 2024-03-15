import React, { useState } from "react";
import { Link } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Button from '@mui/material/Button';

const NavbarBoot = ({ setSearchTerm }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <nav className="bg-green-500 flex items-center justify-between flex-wrap p-6 ">
        <div className="flex items-center flex-no-shrink mr-6  ">
          <img src="/Logo_2.jpg" width="60" height="60" alt="Your Company" />
        </div>
        <div className="block lg:hidden">
          <button className="text-white hover:text-white">
            {/* Hamburger Icon */}
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow uppercase">
            <Link to="home" className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
              Home
            </Link>
            <Link to="/medicine" className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
              Medicines
            </Link>
            <Link to="/add_medicine" className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white">
              Add Your Medicines
            </Link>
          </div>
          <div className="flex items-center">
            <form className="flex">
              <input
                className="appearance-none bg-white border-none w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="Search..."
                aria-label="Search"
                onChange={handleSearch}
              />
              <button className="flex-no-shrink bg-teal hover:bg-teal-dark border-teal hover:border-teal-dark text-sm border-4 text-white py-1 px-2 rounded">
                Search
              </button>
            </form>
            {/* Icons and other Nav items */}
            <Link to="/cart" className="block lg:inline-block text-white ml-4">
              <ShoppingCartIcon />
            </Link>

            <Link to="/notificationSystem" className="block lg:inline-block text-white ml-4">
              <NotificationsIcon />
            </Link>
            <div className="ml-4 relative">
              {/* User Icon and Dropdown */}
              <div className="ml-4 relative">
                <Button className="text-white" onClick={toggleDropdown}>
                  <AccountCircleIcon />
                </Button>
                {/* Dropdown menu */}
                {isDropdownOpen && (
                  <div className="absolute right-0 bg-white text-gray-700 py-2 mt-2 rounded shadow-lg">
                    <Link to="/login" className="block px-4 py-2 hover:bg-gray-100">
                      Log In
                    </Link>
                    <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">
                      Profile
                    </Link>
                    <Link to="/login" className="block px-4 py-2 hover:bg-gray-100">
                      Log Out
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>



      </nav>
    </>
  );
};


export default NavbarBoot;
