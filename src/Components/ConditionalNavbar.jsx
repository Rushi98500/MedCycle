import React from 'react';
import { useLocation } from 'react-router-dom';
import NavbarBoot from './NavbarBoot';
import NavbarBootAdmin from './NavbarBootAdmin';

const ConditionalNavbar = ({ setCartItems, setSearchTerm }) => {
  const location = useLocation();
  const userRole = localStorage.getItem('userRole');

  const shouldDisplayNavbar = () => {
    // Example: Hide navbar on the login page
    return location.pathname !== '/login';
  };

  if (!shouldDisplayNavbar()) {
    return null;
  }

  return userRole === 'admin' ? <NavbarBootAdmin /> : <NavbarBoot setCartItems={setCartItems} setSearchTerm={setSearchTerm} />;
};

export default ConditionalNavbar;
