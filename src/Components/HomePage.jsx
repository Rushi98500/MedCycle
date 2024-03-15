import React from 'react';
import Footer from './Footer';
import './Login.css';

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="mt-5 bg-gray-100 p-5 flex-grow">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 text-center">
              <h1 className="text-4xl font-bold mb-4">
                Unused to Useful
                <br />
                <br />
                "WE ARE HERE"
              </h1>
              <p className="text-lg leading-relaxed mb-4">
                A user-friendly 24*7 drug donation system that helps the user to donate unused medicines to NGOs and the needy.
                <br />
                <br /> Our Project <strong>Medcyle</strong> drives the future of healthcare by connecting people with surplus medications. This unused medicine donation project aims to donate medicines.
                The unused medicine can be donated for further utilization by a needy person.
              </p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                More &#8594;
              </button>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <img src="home1.jpg" alt="Home" className="max-w-full rounded" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
