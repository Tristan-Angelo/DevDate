import React, { useState } from "react";
import "./HomePage.css";
import { Link, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faEye } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow } from "swiper/modules";

import slide_img1 from "../../../assets/profiles/profile_1.jfif";
import slide_img2 from "../../../assets/profiles/profile_2.jfif";
import slide_img3 from "../../../assets/profiles/profile_3.jfif";
import slide_img4 from "../../../assets/profiles/profile_4.jfif";
import slide_img5 from "../../../assets/profiles/profile_5.jfif";
import user from "../../../assets/user.png";

const HomePage = () => {
  const [followStatus, setFollowStatus] = useState(
    [...Array(10)].map((_, index) => (index % 2 === 0 ? "Follow" : "Followed"))
  );

  const toggleFollow = (index) => {
    setFollowStatus((prevStatus) =>
      prevStatus.map((status, i) =>
        i === index ? (status === "Follow" ? "Followed" : "Follow") : status
      )
    );
  };

  return (
    <div className="homePage-main-container">
      <div className="content-container">
        <h3>Try and Catch</h3>
        <div className="main-content">
          <div className="left-pane">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={false}
              loop={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
              }}
              modules={[EffectCoverflow]}
              className="swiper_container"
            >
              <SwiperSlide>
                <div className="profile-card">
                  <img
                    src={slide_img1}
                    alt="slide_image"
                    className="profile-image"
                  />
                  <div className="profile-card-1">
                    <div className="profile-info-1">
                      <p>Hannah Masana</p>
                      <p>sample@gmail.com</p>
                    </div>
                    <div className="profile-info-2">
                      <p>0</p>
                      <p>Followers</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="profile-card">
                  <img
                    src={slide_img2}
                    alt="slide_image"
                    className="profile-image"
                  />
                  <div className="profile-card-1">
                    <div className="profile-info-1">
                      <p>Hannah Masana</p>
                      <p>sample@gmail.com</p>
                    </div>
                    <div className="profile-info-2">
                      <p>0</p>
                      <p>Followers</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="profile-card">
                  <img
                    src={slide_img3}
                    alt="slide_image"
                    className="profile-image"
                  />
                  <div className="profile-card-1">
                    <div className="profile-info-1">
                      <p>Hannah Masana</p>
                      <p>sample@gmail.com</p>
                    </div>
                    <div className="profile-info-2">
                      <p>0</p>
                      <p>Followers</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="profile-card">
                  <img
                    src={slide_img4}
                    alt="slide_image"
                    className="profile-image"
                  />
                  <div className="profile-card-1">
                    <div className="profile-info-1">
                      <p>Hannah Masana</p>
                      <p>sample@gmail.com</p>
                    </div>
                    <div className="profile-info-2">
                      <p>0</p>
                      <p>Followers</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="profile-card">
                  <img
                    src={slide_img5}
                    alt="slide_image"
                    className="profile-image"
                  />
                  <div className="profile-card-1">
                    <div className="profile-info-1">
                      <p>Hannah Masana</p>
                      <p>sample@gmail.com</p>
                    </div>
                    <div className="profile-info-2">
                      <p>0</p>
                      <p>Followers</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="footer-1">
              <div className="icon-buttons">
                <div>
                  <FontAwesomeIcon icon={faEye} className="icon-btn" />
                </div>
                <div>
                  <FontAwesomeIcon icon={faHeart} className="icon-btn" />
                </div>
              </div>
              <div className="extra-footer">Find Friends to Try and Catch</div>
            </div>
          </div>
          <div className="right-pane">
            <div className="right-pane-header">
              <span>Suggested for you</span>
              <Link to="" className="see-all-link">
                See all
              </Link>
            </div>
            <div className="suggestions">
              {[...Array(10)].map((_, index) => (
                <div className="suggestion-item" key={index}>
                  <img src={user} alt="Suggestion" />
                  <div>
                    <p>Tristan Angelo</p>
                    <p>Follows you</p>
                  </div>
                  <button
                    className={`follow-btn ${followStatus[
                      index
                    ].toLowerCase()}`}
                    onClick={() => toggleFollow(index)}
                  >
                    {followStatus[index]}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
