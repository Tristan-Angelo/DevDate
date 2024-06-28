import React, { useState } from "react";
import "./MessagesPage.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis,
  faCircle,
  faRotate,
  faInfo,
  faPaperPlane,
  faBellSlash,
  faUser,
  faTrash,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

import user from "../../../assets/user.png";

const MessagesPage = () => {
  const [showProfileSettings, setShowProfileSettings] = useState(false);

  const handleProfileClick = () => {
    setShowProfileSettings(!showProfileSettings);
  };

  return (
    <div className="app-container">
      <div className="sidebar">
        <div className="sidebar-heading">
          <p>Online Followers</p>
          <FontAwesomeIcon icon={faEllipsis} className="icon-btn" />
        </div>
        <input type="text" placeholder="Search" className="search-bar" />
        <div className="followers-list">
          <div className="follower">
            <div className="follower-info">
              <img src={user} alt="Suggestion" />
              <div>
                <p>Hannah Masana</p>
                <p>
                  Yes Yes
                  <span>
                    <FontAwesomeIcon icon={faCircle} className="icon" /> 1h
                  </span>
                </p>
              </div>
            </div>
            <FontAwesomeIcon icon={faCircle} className="icon-btn" />
          </div>
          <div className="follower active">
            <div className="follower-info">
              <img src={user} alt="Suggestion" />
              <div>
                <p>Hannah Masana</p>
                <p>
                  No worries naman dun
                  <span>
                    <FontAwesomeIcon icon={faCircle} className="icon" /> 1h
                  </span>
                </p>
              </div>
            </div>
            <FontAwesomeIcon icon={faCircle} className="icon-btn" />
          </div>
          <div className="follower">
            <div className="follower-info">
              <img src={user} alt="Suggestion" />
              <div>
                <p>Hannah Masana</p>
                <p>
                  Ic Ic
                  <span>
                    <FontAwesomeIcon icon={faCircle} className="icon" /> 1h
                  </span>
                </p>
              </div>
            </div>
            <FontAwesomeIcon icon={faCircle} className="icon-btn" />
          </div>
          <div className="follower">
            <div className="follower-info">
              <img src={user} alt="Suggestion" />
              <div>
                <p>Hannah Masana</p>
                <p>
                  Yes Yes
                  <span>
                    <FontAwesomeIcon icon={faCircle} className="icon" /> 1h
                  </span>
                </p>
              </div>
            </div>
            <FontAwesomeIcon icon={faCircle} className="icon-btn" />
          </div>
          <div className="follower">
            <div className="follower-info">
              <img src={user} alt="Suggestion" />
              <div>
                <p>Hannah Masana</p>
                <p>
                  Yes Yes
                  <span>
                    <FontAwesomeIcon icon={faCircle} className="icon" /> 1h
                  </span>
                </p>
              </div>
            </div>
            <FontAwesomeIcon icon={faCircle} className="icon-btn" />
          </div>
        </div>
        <button className="load-more">
          <FontAwesomeIcon icon={faRotate} className="load-icon" />
          Load More Messages
        </button>
      </div>
      <div className="chat-container">
        <div className="chat-header">
          <div className="chat-title">
            <img src={user} alt="Suggestion" />
            Hannah Masana
          </div>
          <button className="info-icon" onClick={handleProfileClick}>
            <FontAwesomeIcon icon={faInfo} className="" />
          </button>
        </div>
        <div className="chat-box">
          <div>
            <input
              type="text"
              placeholder="Type something"
              className="chat-input"
            />
            <button>
              <FontAwesomeIcon icon={faPaperPlane} className="send-icon" />
            </button>
          </div>
        </div>
      </div>
      {showProfileSettings && (
        <div className="profile-settings">
          <div className="profile-picture">
            <img src={user} alt="Suggestion" />
            Hannah Masana
          </div>
          <div className="profile-options">
            <button className="profile-option">
              <FontAwesomeIcon icon={faBellSlash} className="profile-icon" />
              Mute
            </button>
            <button className="profile-option">
              <FontAwesomeIcon icon={faUser} className="profile-icon" />
              Profile
            </button>
            <button className="profile-option">
              <FontAwesomeIcon icon={faTrash} className="profile-icon" />
              Delete
            </button>
            <button className="profile-option">
              <FontAwesomeIcon icon={faSearch} className="profile-icon" />
              Search
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessagesPage;
