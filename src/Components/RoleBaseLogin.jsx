import React, { useState } from 'react';

const RoleBaseLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    // Here, you would usually make an API request to your backend
    // to authenticate the user and retrieve their role.
    // For this example, let's assume a successful login and set the role manually.

    // Mock role determination based on username
    let userRole;
    if (username === 'admin') {
      userRole = 'admin';
    } else if (username === 'delivery') {
      userRole = 'delivery';
    } else {
      userRole = 'user';
    }

    setRole(userRole);
  };

  return (
    <div>
      {role === '' ? (
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      ) : role === 'admin' ? (
        <div>Welcome, Admin User!</div>
      ) : role === 'delivery' ? (
        <div>Welcome, Delivery Personnel!</div>
      ) : (
        <div>Welcome, User!</div>
      )}
    </div>
  );
};

export default RoleBaseLogin;
