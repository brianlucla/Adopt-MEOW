import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../index.css";

import matthew from "../assets/images/matthew.png";
import LUNA from "../assets/images/sofia(1).png";
import quinton from "../assets/images/quinton.png";
import jeff from "../assets/images/jeff.png";
import michelle from "../assets/images/michelle.png";
import bdog from "../assets/images/bdog.png";
import meeks from "../assets/images/meeks.png";
import left from "../assets/images/left-arrow.png";
import right from "../assets/images/right-arrow.png";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div 
    className={className} style={{...style,display: "block" }} onClick={onClick}>
      <img src={right} alt="Next" />
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <img src={left} alt="Previous" />
    </div>
  );
};

const Carousel = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dots: false,
    fade: true,
    cssEase: "linear",
    className: "carousel-container",
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={matthew} alt="Photo 1" className="carousel-image" />
      </div>
      <div>
        <img src={LUNA} alt="Photo 2" className="carousel-image" />
      </div>
      <div>
        <img src={quinton} alt="Photo 3" className="carousel-image" />
      </div>
      <div>
        <img src={jeff} alt="Photo 4" className="carousel-image" />
      </div>
      <div>
        <img src={michelle} alt="Photo 5" className="carousel-image" />
      </div>
      <div>
        <img src={bdog} alt="Photo 6" className="carousel-image" />
      </div>
      <div>
        <img src={meeks} alt="Photo 7" className="carousel-image" />
      </div>
    </Slider>
  );
};

export default Carousel;
