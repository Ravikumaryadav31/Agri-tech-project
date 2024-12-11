import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import './caro.css';

const Carosel = () => {
  return (
    <Carousel interval={3000}>
      <Carousel.Item>
        <img 
          className="carousel-img"
          src="/images/fertilizer32.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className="carousel-img"
          src="/images/fertilizer12.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className="carousel-img"
          src="/images/fertilizer13.jpg"
          alt="Third slide"
        />

      </Carousel.Item>
      








    </Carousel>
  );
};

export default Carosel;
