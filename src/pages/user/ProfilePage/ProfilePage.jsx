import React, { useState } from 'react';
import './ProfilePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { faHeart, faTimes } from "@fortawesome/free-solid-svg-icons";
import slide_img4 from "../../../assets/profiles/profile_4.jfif";
import slide_img1 from "../../../assets/profiles/profile_1.jfif";
import slide_img2 from "../../../assets/profiles/profile_2.jfif";
import slide_img3 from "../../../assets/profiles/profile_3.jfif";
import slide_img5 from "../../../assets/profiles/profile_5.jfif";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('info');
  const [fullScreenImage, setFullScreenImage] = useState(null);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleImageClick = (imageSrc) => {
    setFullScreenImage(imageSrc);
  };

  const handleCloseFullScreen = () => {
    setFullScreenImage(null);
  };

  return (
    <div className='profile-main-container'>
      <div className="profile-content">
        <img src={slide_img4} alt="" />
        <div className="profile-info">
          <div className='profile-details'>
            <h4>Hannah Masana</h4>
            <p className='profile-role'>Frontend Developer</p>
            <div className="profile-icon-buttons">
              <button className='profile-eye-icon'>
                <box-icon type='logo' name='messenger' className="profile-icon-btn" color="#2B2730" size="1.6rem"></box-icon>
              </button>
              <button className='profile-heart-icon'>
                <FontAwesomeIcon icon={faHeart} className="profile-icon-btn" />
              </button>
            </div>
            <div className='profile-other-social'>
              <button className='profile-facebook-icon'>
                <FontAwesomeIcon icon={faFacebook} className="profile-icon-btn" />
              </button>
              <button className='profile-twitter-icon'>
                <FontAwesomeIcon icon={faTwitter} className="profile-icon-btn" />
              </button>
              <button className='profile-instagram-icon'>
                <FontAwesomeIcon icon={faSquareInstagram} className="profile-icon-btn" />
              </button>
            </div>
            <p className='profile-bio'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="profile-other-info">
            <div className="profile-other-buttons">
              <button
                className={activeTab === 'info' ? 'active' : ''}
                onClick={() => handleTabClick('info')}
              >
                <box-icon type='solid' name='user-circle' size='2.8rem' color='white'></box-icon>
                <p>Other info</p>
              </button>
              <button
                className={activeTab === 'photos' ? 'active' : ''}
                onClick={() => handleTabClick('photos')}
              >
                <box-icon type='solid' name='photo-album' size='2.8rem' color='white'></box-icon>
                <p>Photos</p>
              </button>
            </div>
            {activeTab === 'info' && (
              <div className="profile-hobbies-skills">
                <div className='profile-hobbies'>
                    <h4>HOBBIES</h4>
                    <div className='profile-hobbies-lists'>
                        
                    </div>
                </div>
                <div className='profile-skills'>
                    <h4>SKILLS</h4>
                </div>
              </div>
            )}
            {activeTab === 'photos' && (
              <div className="profile-photos">
                <section className="ag-photo-gallery-block">
                  <div className="ag-format-container">
                    <div className="ag-photo-gallery_list">
                      <div className="ag-photo-gallery_item ag-photo-gallery_item__wide">
                        <figure className="ag-photo-gallery_figure">
                            <img src={slide_img1} className="ag-photo-gallery_img" alt="" onClick={() => handleImageClick(slide_img1)} />
                        </figure>
                      </div>

                      <div className="ag-photo-gallery_item">
                        <figure className="ag-photo-gallery_figure">
                            <img src={slide_img2} className="ag-photo-gallery_img" alt="" onClick={() => handleImageClick(slide_img2)} />
                        </figure>
                      </div>

                      <div className="ag-photo-gallery_item ag-photo-gallery_item__narrow">
                        <figure className="ag-photo-gallery_figure">
                            <img src={slide_img3} className="ag-photo-gallery_img" alt="" onClick={() => handleImageClick(slide_img3)} />
                        </figure>
                      </div>

                      <div className="ag-photo-gallery_item ag-photo-gallery_item__middle">
                        <figure className="ag-photo-gallery_figure">
                            <img src={slide_img5} className="ag-photo-gallery_img" alt="" onClick={() => handleImageClick(slide_img5)} />
                        </figure>
                      </div>

                      <div className="ag-photo-gallery_item ag-photo-gallery_item__narrow">
                        <figure className="ag-photo-gallery_figure">
                            <img src={slide_img1} className="ag-photo-gallery_img" alt="" onClick={() => handleImageClick(slide_img1)} />
                        </figure>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            )}
          </div>
        </div>
      </div>
      {fullScreenImage && (
        <div className="full-screen-overlay">
          <div className="full-screen-image-container">
            <img src={fullScreenImage} alt="Full Screen" className="full-screen-image" />
            <FontAwesomeIcon icon={faTimes} className="close-icon" onClick={handleCloseFullScreen} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
