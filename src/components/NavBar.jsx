import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './NavBar.css';
import devDateLogo1 from '../assets/devDateLogo1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  return (
    <div>
      <nav>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <box-icon name='menu' color='white'></box-icon>
        </label>
        <div className="navbar-logo">
          <img src={devDateLogo1} alt="Logo" />
        </div>
        <div className="navbar-search">
          <div className="search-container">
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
            <input type="text" placeholder="Search..." className="search-input" />
          </div>
        </div>
        <ul>
          <li><Link to='homePage'><box-icon name='heart' color='white' size='28px'></box-icon></Link></li>
          <li><Link to='messagesPage'><box-icon name='message-rounded-dots' color='white' size='28px'></box-icon></Link></li>
          <li><Link to='settingPage'><box-icon name='cog' color='white' size='28px'></box-icon></Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default NavBar;
