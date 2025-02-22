import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Slider.css';

function Slider() {
  return (
    <Carousel interval={5000} fade>
      <Carousel.Item>
      <img className="d-block w-100" src="/images/slider1.webp" alt="First slide"/>
        <Carousel.Caption className="carousel-caption">
          <h3 className="carousel-title">Healthy Smile</h3>
          <p className="carousel-description">
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/slider2.webp"
          alt="Second slide"
        />
        <Carousel.Caption className="carousel-caption">
          <h3 className="carousel-title">Perfect Smile</h3>
          <p className="carousel-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="slider1.jpg"
          alt="Third slide"
        />
        <Carousel.Caption className="carousel-caption">
          <h3 className="carousel-title">Professional Care</h3>
          <p className="carousel-description">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
