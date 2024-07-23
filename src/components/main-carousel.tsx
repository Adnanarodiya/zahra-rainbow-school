"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Slick settings
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000, // Set autoplay speed to 3 seconds
  arrows: false, // Disable default arrows
};

export default function MainCarousel() {
  // Type the ref with React.RefObject<Slider>
  const sliderRef = useRef<Slider>(null);

  // Custom next button handler
  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  // Custom previous button handler
  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <div className="container-fluid p-0 mb-5 position-relative">
      <Slider
        {...settings}
        ref={sliderRef}
        className="header-carousel position-relative"
      >
        <div className="item">
          <img className="img-fluid w-100" src="img/carousel-1.jpg" alt="" />
          <div
            className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
            style={{ background: "rgba(0, 0, 0, .2)" }}
          >
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-10 col-lg-8">
                  <h1 className="display-2 text-white animated slideInDown mb-4">
                    The Best Kindergarten School For Your Child
                  </h1>
                  <p className="fs-5 fw-medium text-white mb-4 pb-2">
                    Vero elitr justo clita lorem. Ipsum dolor at sed stet sit
                    diam no. Kasd rebum ipsum et diam justo clita et kasd rebum
                    sea elitr.
                  </p>
                  <a
                    href=""
                    className="btn btn-primary rounded-pill py-sm-3 px-sm-5 me-3 animated slideInLeft"
                  >
                    Learn More
                  </a>
                  <a
                    href=""
                    className="btn btn-dark rounded-pill py-sm-3 px-sm-5 animated slideInRight"
                  >
                    Our Classes
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <img className="img-fluid w-100" src="img/carousel-2.jpg" alt="" />
          <div
            className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
            style={{ background: "rgba(0, 0, 0, .2)" }}
          >
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-10 col-lg-8">
                  <h1 className="display-2 text-white animated slideInDown mb-4">
                    Make A Brighter Future For Your Child
                  </h1>
                  <p className="fs-5 fw-medium text-white mb-4 pb-2">
                    Vero elitr justo clita lorem. Ipsum dolor at sed stet sit
                    diam no. Kasd rebum ipsum et diam justo clita et kasd rebum
                    sea elitr.
                  </p>
                  <a
                    href=""
                    className="btn btn-primary rounded-pill py-sm-3 px-sm-5 me-3 animated slideInLeft"
                  >
                    Learn More
                  </a>
                  <a
                    href=""
                    className="btn btn-dark rounded-pill py-sm-3 px-sm-5 animated slideInRight"
                  >
                    Our Classes
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
      {/* Custom Navigation Buttons */}
      <button className="carousel-btn prev-btn" onClick={handlePrev}>
        &lt;
      </button>
      <button className="carousel-btn next-btn" onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
}
