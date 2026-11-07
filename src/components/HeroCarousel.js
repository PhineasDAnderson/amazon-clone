// src/components/HeroCarousel.js
import React, { useState, useEffect } from "react";
import gamingImg from "../Images/Gaming.jpg";
import toyImg from "../Images/Toy.jpg";
import kitchenImg from "../Images/Kitchen.jpg";
import fathersDayImg from "../Images/FathersDayDeal.jpg";

// The slides for the banner. Each one has a picture and a slogan
const slides = [
  { src: gamingImg, slogan: "Gaming Store - Upgrade your gear" },
  { src: toyImg, slogan: "Toys For Kids - Best Toys for fun times" },
  { src: kitchenImg, slogan: "Kitchen Specials - Top categories in appliances" },
  { src: fathersDayImg, slogan: "Father's Day Deals - Save on gifts for Dad" },
];

// The big banner at the top of the home page that changes picture
function HeroCarousel() {
  // Number of the slide that is showing now (0 is the first slide)
  const [current, setCurrent] = useState(0);

  // Move to the next slide every 5 seconds. The timer is cleared when the banner is removed
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // Go to the next slide. After the last slide it goes back to the first
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  // Go to the previous slide. Before the first slide it goes to the last
  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="carousel">
      {/* Left arrow button */}
      <button className="arrow left" onClick={prevSlide}>
        ‹
      </button>

      {/* The picture and slogan of the current slide */}
      <div className="slide">
        <img src={slides[current].src} alt={slides[current].slogan} />
        <div className="slogan">{slides[current].slogan}</div>
      </div>

      {/* Right arrow button */}
      <button className="arrow right" onClick={nextSlide}>
        ›
      </button>
    </div>
  );
}

export default HeroCarousel;
