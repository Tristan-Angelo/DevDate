import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './NavBar.css';
import devdateLogo from '../assets/devDateLogo1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (isChecked) {
      body.classList.add('no-scroll');
    } else {
      body.classList.remove('no-scroll');
    }
  }, [isChecked]);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleLinkClick = () => {
    setIsChecked(false); // Close sidebar when a link is clicked
  };

  return (
    <div>
      <nav>
        <input type="checkbox" id="check" checked={isChecked} onChange={handleCheckboxChange} />
        <label htmlFor="check" className="checkbtn">
          <FontAwesomeIcon icon={isChecked ? faTimes : faBars} color="white" />
        </label>
        <div className="navbar-logo">
          <img src={devdateLogo} alt="Logo" />
        </div>
        <div className="navbar-search">
          <div className="search-container">
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
            <input type="text" placeholder="Search..." className="search-input" />
          </div>
        </div>
        <ul>
          <li><Link to='/user/homePage' onClick={handleLinkClick}><box-icon name='heart' color='white' size='28px'></box-icon></Link></li>
          <li><Link to='/user/messagesPage' onClick={handleLinkClick}><box-icon name='message-rounded-dots' color='white' size='28px'></box-icon></Link></li>
          <li><Link to='/user/settingPage' onClick={handleLinkClick}><box-icon name='cog' color='white' size='28px'></box-icon></Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default NavBar;
