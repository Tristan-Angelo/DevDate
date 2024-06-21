import React from 'react'
import './LandingPage.css'
import devDateLogo from '../../assets/devdateLogo.png'
import loveArrow from '../../assets/loveArrow.png'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className='landing-main-container'>
      <h3>Welcome to</h3>
      <img className='landing-logo' src={devDateLogo} alt="" />
      <h3>Sign Up and Find Your Match</h3>
      <Link className="landing-custom-link" to="/loginPage">Learn More <img className='landing-icon-svg' src={loveArrow} alt="" /></Link>
    </div> 
  )
}

export default LandingPage