import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import matthew from "../assets/images/matthew.png";
import LUNA from "../assets/images/LUNA.png";
import quinton from "../assets/images/quinton.png";
import jeff from "../assets/images/jeff.png";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div 
    className="block onclick={onClick}">
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
    arrows: false,
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
    </Slider>
  );
};

export default Carousel;
