import React from "react";
import "./HomePage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faEye } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import slide_img1 from "../../../assets/profiles/profile_1.jfif";
import slide_img2 from "../../../assets/profiles/profile_2.jfif";
import slide_img3 from "../../../assets/profiles/profile_3.jfif";
import slide_img4 from "../../../assets/profiles/profile_4.jfif";
import slide_img5 from "../../../assets/profiles/profile_5.jfif";
import user from "../../../assets/user.png";

const HomePage = () => {
  return (
    <div className="homePage-main-container">
      <div className="container-fluid">
        <div className="header">Try and Catch</div>
        <div className="main-content">
          <div className="left-pane">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
              }}
              pagination={{ el: ".swiper-pagination", clickable: true }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
                clickable: true,
              }}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className="swiper_container"
            >
              <SwiperSlide>
                <img src={slide_img1} alt="slide_image" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide_img2} alt="slide_image" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide_img3} alt="slide_image" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide_img4} alt="slide_image" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide_img5} alt="slide_image" />
              </SwiperSlide>
              {/* <div className="slider-controler">
                <div className="swiper-button-prev slider-arrow">
                  <FontAwesomeIcon icon={faAngleLeft} className="arrow-icon" />
                </div>
                <div className="swiper-button-next slider-arrow">
                  <FontAwesomeIcon icon={faAngleRight} className="arrow-icon" />
                </div>
                <div className="swiper-pagination"></div>
              </div> */}
            </Swiper>
            <div className="footer">
              <div className="icon-buttons">
                <div>
                  <FontAwesomeIcon icon={faEye} className="icon-btn" />
                </div>
                <div>
                  <FontAwesomeIcon icon={faHeart} className="icon-btn" />
                </div>
              </div>
            </div>
            <div className="extra-footer">Find Friends to Try and Catch</div>
          </div>
          <div className="right-pane">
            <div className="right-pane-header">
              <span>Suggested for you</span>
              <span>See All</span>
            </div>
            <div className="suggestions">
              {[...Array(5)].map((_, index) => (
                <div className="suggestion-item" key={index}>
                  <img src={user} alt="Suggestion" />
                  <div>
                    <p>Tristan Angelo</p>
                    <p>Follows you</p>
                  </div>
                  <button
                    className={`follow-btn ${
                      index % 2 === 0 ? "follow" : "followed"
                    }`}
                  >
                    {index % 2 === 0 ? "Follow" : "Followed"}
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
