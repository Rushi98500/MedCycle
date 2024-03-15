import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const LogIn = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Select Role'); // Added for role selection
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setUsername('');
    setPassword('');
    setRole('Select Role'); // Reset role on form toggle
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Use the selected role for redirection
    if (role === 'Admin') {
      navigate('/admin');
    } else if (role === 'User') {
      navigate('/home');
    } else {
      alert("Please select a role");
    }
  };

  return (
    <>
      <div id='outer' className="flex justify-center items-center min-h-screen">
        <div className={`mt-5 max-w-md w-full ${isLogin ? 'border-blue-500' : 'border-green-500'} rounded-lg overflow-hidden`}>
          <div className={`p-8 ${isLogin ? '' : 'bg-gray-100'}`}>
            <h2 className="text-center text-2xl mb-4">{isLogin ? 'LOGIN' : 'REGISTER'}</h2>
            <form onSubmit={handleLogin}>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded mb-3"
                placeholder="Username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded mb-3"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <select
                className="w-full p-2 border border-gray-300 rounded mb-3 bg-white"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="Select Role">Select Role</option>
                <option value="Admin">Admin</option>
                <option value="User">User</option>
              </select>
              <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Submit
              </button>
              <div className="flex items-center justify-between mt-3">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-gray-600" />
                  <span className="ml-2 text-gray-700">Remember Me</span>
                </label>
                <a href="/forgotpassword" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                  Forgot Password?
                </a>
              </div>
            </form>
            <button className="underline text-blue-500 hover:text-blue-800 text-sm mt-3" onClick={toggleForm}>
              {isLogin ? 'I am new here' : 'I have an account'}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LogIn;
