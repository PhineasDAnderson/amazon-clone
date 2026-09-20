import gamingImg from '../Images/Gaming.jpg';
import toyImg from '../Images/Toy.jpg';
import kitchenImg from '../Images/Kitchen.jpg';
import fathersDayImg from '../Images/FathersDayDeal.jpg';
// Imported React to use JSX and hooks
import React, { useState, useEffect } from "react";
// Imported CSS file for styling
//import "./HeroCarousel.css";
import bannerImg from '../Images/banner-image.jpg';
import productImg from '../Images/product-image.png';

// Defined the HeroCarousel component
function HeroCarousel() {
  // Array of slides: each has an image path and a slogan
 const slides = [
    { src: gamingImg, slogan: "Gaming Store - Upgrade your gear" },
    { src: toyImg, slogan: "Toys For Kids - Best Toys for fun times" },
    { src: kitchenImg, slogan: "Kitchen Specials - Top categories in appliances" },
    { src: fathersDayImg, slogan: "Father's Day Deals - Save on gifts for Dad" },
  ];

  // State to track which slide is currently visible
  const [current, setCurrent] = useState(0);

  // useEffect hook sets up auto-rotation every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      // Move to the next slide, loop back to start if at the end
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    // Cleanup: clear the timer when component unmounts
    return () => clearInterval(timer);
  }, [slides.length]);

  // Function to go to the next slide manually
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);

  // Function to go to the previous slide manually
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  // JSX returned by the component
  return (
    <div className="carousel">
      {/* Left arrow button for manual navigation */}
      <button className="arrow left" onClick={prevSlide}>‹</button>

      {/* Current slide image + slogan overlay */}
      <div className="slide">
        <img src={slides[current].src} alt={slides[current].slogan} />
        <div className="slogan">{slides[current].slogan}</div>
      </div>

      {/* Right arrow button for manual navigation */}
      <button className="arrow right" onClick={nextSlide}>›</button>
    </div>
  );
}

// Export the component so App.js can use it
export default HeroCarousel;
