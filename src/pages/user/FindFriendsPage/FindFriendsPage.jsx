import React from 'react'
import './FindFriendsPage.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart, faEye } from "@fortawesome/free-solid-svg-icons"
import slide_img1 from "../../../assets/profiles/profile_1.jfif"
import slide_img3 from "../../../assets/profiles/profile_3.jfif"
import slide_img4 from "../../../assets/profiles/profile_4.jfif"
import slide_img5 from "../../../assets/profiles/profile_5.jfif"

const FindFriendsPage = () => {
  return (
    <div className='find-main-container'>
      <h3 className='find-header'>Find Friends</h3>
      <div className="find-content">
        <div className='find-cards'>
          <img className='find-image' src={ slide_img1 } alt="" />
          <div className="find-icon-buttons">
            <button className='find-eye-icon'>
              <FontAwesomeIcon icon={faEye} className="find-icon-btn" />
            </button>
            <button className='find-heart-icon'>
              <FontAwesomeIcon icon={faHeart} className="-find-icon-btn" />
            </button>
          </div>
        </div>
        <div className='find-cards'>
          <img className='find-image' src={ slide_img4 } alt="" />
          <div className="find-icon-buttons">
            <button className='find-eye-icon'>
              <FontAwesomeIcon icon={faEye} className="find-icon-btn" />
            </button>
            <button className='find-heart-icon'>
              <FontAwesomeIcon icon={faHeart} className="-find-icon-btn" />
            </button>
          </div>
        </div>
        <div className='find-cards'>
          <img className='find-image' src={ slide_img3 } alt="" />
          <div className="find-icon-buttons">
            <button className='find-eye-icon'>
              <FontAwesomeIcon icon={faEye} className="find-icon-btn" />
            </button>
            <button className='find-heart-icon'>
              <FontAwesomeIcon icon={faHeart} className="-find-icon-btn" />
            </button>
          </div>
        </div>
        <div className='find-cards'>
          <img className='find-image' src={ slide_img4 } alt="" />
          <div className="find-icon-buttons">
            <button className='find-eye-icon'>
              <FontAwesomeIcon icon={faEye} className="find-icon-btn" />
            </button>
            <button className='find-heart-icon'>
              <FontAwesomeIcon icon={faHeart} className="-find-icon-btn" />
            </button>
          </div>
        </div>
        <div className='find-cards'>
          <img className='find-image' src={ slide_img5 } alt="" />
          <div className="find-icon-buttons">
            <button className='find-eye-icon'>
              <FontAwesomeIcon icon={faEye} className="find-icon-btn" />
            </button>
            <button className='find-heart-icon'>
              <FontAwesomeIcon icon={faHeart} className="-find-icon-btn" />
            </button>
          </div>
        </div>
        <div className='find-cards'>
          <img className='find-image' src={ slide_img1 } alt="" />
          <div className="find-icon-buttons">
            <button className='find-eye-icon'>
              <FontAwesomeIcon icon={faEye} className="find-icon-btn" />
            </button>
            <button className='find-heart-icon'>
              <FontAwesomeIcon icon={faHeart} className="-find-icon-btn" />
            </button>
          </div>
        </div>
      </div>
    </div> 
  )
}

export default FindFriendsPage