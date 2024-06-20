import React, { useState } from 'react';
import './RegistrationPage.css';
import devDateLogo from '../../../assets/devdateLogo.png';
import loveArrow from '../../../assets/loveArrow.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validatePasswords = () => {
    if (formData.password !== formData.confirmPassword) {
      setPasswordError('Passwords do not match');
    } else {
      setPasswordError('');
    }
  };

  const togglePasswordVisibility = (field) => {
    if (field === 'password') {
      setShowPassword(!showPassword);
    } else if (field === 'confirmPassword') {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validatePasswords();
    // Additional form submission logic can be added here
  };

  return (
    <div className='main-container'>
      <img className='logo' src={devDateLogo} alt="DevDate Logo" />
      <div className='content'>
        <div className='header mb-2'>
          <h3>Sign up</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="input-group mb-4">
              <FontAwesomeIcon icon={faUser} className="icon" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="John Smith"
                required
              />
            </div>
            <div className="input-group mb-4">
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
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
              <FontAwesomeIcon icon={faLock} className="icon" />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                onBlur={validatePasswords}
                placeholder="Password"
                required
              />
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                className="eye-icon"
                onClick={() => togglePasswordVisibility('password')}
              />
            </div>
            {passwordError && (
                <div className="validation-message">
                  {passwordError}
                </div>
            )}
            <div className="input-group mb-4">
              <FontAwesomeIcon icon={faLock} className="icon" />
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                onBlur={validatePasswords}
                placeholder="Confirm Password"
                required
              />
              <FontAwesomeIcon
                icon={showConfirmPassword ? faEyeSlash : faEye}
                className="eye-icon"
                onClick={() => togglePasswordVisibility('confirmPassword')}
              />
            </div>
            {passwordError && (
                <div className="validation-message">
                  {passwordError}
                </div>
            )}
            <div className='btn-container mb-4'>
              <button type="submit">
                <span>Submit</span>
                <img src={loveArrow} alt="Submit Icon" className="icon-svg" />
              </button>
            </div>
          </form>
        </div>
        <div className='sign-in'>
          <p>Already have an account? <Link className="custom-link" to="/loginPage">Sign in</Link></p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
