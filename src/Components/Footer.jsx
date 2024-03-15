import React from 'react';
import Icon from './Icon';

const Footer = () => {
  return (
    <>
      <footer className=" bg-green-500 flex items-center justify-between flex-wrap p-6">
        <div className="p-4 w-full flex  justify-between  " >
          <span className="text-xs text-gray-500">
            © 2024 <a href="/#" className="no-underline">Medcyle</a>. All Rights Reserved.
          </span>
          <div className="Icon-container flex">
            <ul className="flex">
              <Icon name="instagram" iconClass="fa-brands fa-instagram icon1 icon" link="https://www.instagram.com/" />
              <Icon name="twitter" iconClass="fa-brands fa-twitter icon2 icon" link="https://twitter.com/" />
              <Icon name="youtube" iconClass="fa-brands fa-youtube icon3 icon" link="https://www.youtube.com/" />
              <Icon name="facebook" iconClass="fa-brands fa-facebook icon4 icon" link="https://www.facebook.com/" />
            </ul>
          </div>

          <ul className="flex mt-3 text-xs font-medium text-gray-500">
            <li className="mr-4">
              <a href="#" className="no-underline">About</a>
            </li>
            <li className="mr-4">
              <a href="#" className="no-underline">Privacy Policy</a>
            </li>
            <li className="mr-4">
              <a href="#" className="no-underline">Licensing</a>
            </li>
            <li>
              <a href="#" className="no-underline">Contact</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
