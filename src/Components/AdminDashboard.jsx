import React from 'react';
import { Link } from 'react-router-dom';
import NavbarBootAdmin from './NavbarBoot';

const AdminDashboard = () => {
  return (
    <div>
      <h1>Welcome to the Admin Dashboard</h1>
      <div>
        <ul>
          <li><Link to="/add_medicine">Add Medicine</Link></li>
          <li><Link to="/manage_users">Manage Users</Link></li>
          <li><Link to="/view_reports">View Reports</Link></li>
          {/* More admin functionalities can be added here */}
        </ul>
      </div>
    </div>
  );
}

export default AdminDashboard;
