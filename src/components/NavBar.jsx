import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './NavBar.css';
import devdateLogo from '../assets/devdateLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="navbar-logo">
          <img src={devdateLogo} alt="Logo" />
        </div>
        <div className="navbar-search">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input type="text" placeholder="Search..." />
        </div>
        <nav className="navbar-links">
          <ul>
            <li><Link to="homePage"><box-icon name='heart' color='white'></box-icon></Link></li>
            <li><Link to="messagesPage"><box-icon name='message-rounded-dots' color='white'></box-icon></Link></li>
            <li><Link to="settingPage"><box-icon name='cog' color='white'></box-icon></Link></li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};

export default NavBar;
