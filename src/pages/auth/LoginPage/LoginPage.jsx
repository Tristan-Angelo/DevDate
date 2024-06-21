import React, { useState } from 'react';
import './LoginPage.css';
import devDateLogo from '../../../assets/devdateLogo.png';
import loveArrow from '../../../assets/loveArrow.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const togglePasswordVisibility = (field) => {
    if (field === 'password') {
      setShowPassword(!showPassword);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validatePasswords();
  };

  return (
    <div className='login-main-container'>
      <img className='login-logo' src={devDateLogo} alt="DevDate Logo" />
      <div className='login-content'>
        <div className='login-header mb-2'>
          <h3>Sign in</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="login-form-container">
          <form onSubmit={handleSubmit}>
            <div className="input-group mb-4">
              <FontAwesomeIcon icon={faEnvelope} className="login-icon" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your.email@example.com"
                required
              />
            </div>
            <div className="input-group mb-4">
              <FontAwesomeIcon icon={faLock} className="login-icon" />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password"
                required
              />
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                className="login-eye-icon"
                onClick={() => togglePasswordVisibility('password')}
              />
            </div>
            <div className='login-btn-container mb-5'>
              <button type="submit">
                <span>Sign in</span>
                <img src={loveArrow} alt="Submit Icon" className="login-icon-svg" />
              </button>
            </div>
          </form>
        </div>
        <div className='login-sign-up'>
          <p>Don't have an account? <Link className="login-custom-link" to="/registrationPage">Sign up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
