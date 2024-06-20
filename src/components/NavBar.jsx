import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <h1>User View</h1>
      <nav>
        <ul>
          <li><Link to="homePage">Home</Link></li>
          <li><Link to="messagesPage">Messages</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default NavBar;
