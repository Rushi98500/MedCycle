import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NavbarBootAdmin = () => {
    const navigate = useNavigate();
    const userRole = localStorage.getItem('userRole');

    const handleLogout = () => {
        localStorage.removeItem('userRole');
        navigate('/login');
    };

    return (
        <nav className="bg-white px-4 py-3 shadow-md flex items-center justify-between">
            <div className="flex items-center">
                <Link to="/" className="text-lg font-semibold mr-4">MedCycle</Link>
                <div className="hidden md:flex items-center space-x-4">
                    <Link to="/home" className="text-gray-700 hover:text-gray-900">Home</Link>
                    <Link to="/medicine" className="text-gray-700 hover:text-gray-900">Medicine</Link>
                    {userRole === 'admin' && <Link to="/add_medicine" className="text-gray-700 hover:text-gray-900">Add Medicine</Link>}
                </div>
            </div>
            <div>
                <button onClick={handleLogout} className="text-gray-700 hover:text-gray-900">Logout</button>
            </div>
            {/* Responsive Menu Button */}
            <button className="text-gray-500 md:hidden">
                <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>
        </nav>
    );
};

export default NavbarBootAdmin;
