import React from 'react';
import './Icon.css'; // Import the CSS file

const Icon = ({ name, iconClass, link }) => {
  return (
    <>
      {/* Icons */}
      <a href={link} className="flex justify-between no-underline">
        <li className={`list-none ${name}`}>
          <i className={`fa-brands ${iconClass}`}></i>
        </li>
        {/* Add more icons as needed */}
      </a>
    </>
  );
};

export default Icon;
