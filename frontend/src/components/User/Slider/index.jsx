import React, { useState } from "react";
import "./Slider.css";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    { title: "First Slide", description: "Healthy smile begins with us!" },
    { title: "Second Slide", description: "Achieve the perfect smile." },
    { title: "Third Slide", description: "Professional care for healthy teeth." }
  ];

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="slider">
      <div className="slider-content">
        {slides.map((slide, index) => (
          <div
            className={`slide ${index === currentIndex ? "active" : ""}`}
            key={index}
          >
            <h2>{slide.title}</h2>
            <p>{slide.description}</p>
          </div>
        ))}
      </div>
      <button className="prev slider-button" onClick={prevSlide}>❮</button>
      <button className="next slider-button" onClick={nextSlide}>❯</button>
    </div>
  );
};

export default Slider;
