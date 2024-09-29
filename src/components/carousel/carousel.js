import React from 'react';
import Slider from 'react-slick';
import './carousel.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const images = [
    require('../../images/155725771-portrait-two-pharmacists-worki.jpg'),
    require('../../images/219432259-medical-employee-helping-multi.jpg'),
    require('../../images/241771676-pharmacy-employee-arranging-st.jpg'),
  ];

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} className="carousel-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;