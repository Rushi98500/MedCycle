import React from 'react';
import Footer from './Footer';

const ForgotPassword = () => {
  const handleResetPassword = () => {
    // Implement the logic for resetting the password here
    alert('Password reset functionality will be implemented.');
  };

  return (
    <>
      <div id="outer" className="flex justify-center items-center h-screen">
        <div className="w-full max-w-sm">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-center text-2xl mb-4">FORGOT PASSWORD</h2>
            <form>
              <div className="mb-4">
                <input type="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your Email" required />
              </div>
              <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" onClick={handleResetPassword}>
                Reset Password
              </button>
            </form>
            <a href="/LogIn" className="block mt-3 text-center text-dark no-underline" >
              Remembered your password? <strong>Login here.</strong>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ForgotPassword;
