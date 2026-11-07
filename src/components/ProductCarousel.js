// src/components/ProductCarousel.js
import React, { useRef } from "react";

// A row of pictures that scrolls sideways. It gets a title and a list of pictures from MainPage
function ProductCarousel({ title, products }) {
  // Points to the scrolling row so the arrow buttons can move it
  const trackRef = useRef(null);

  // Scroll the row 600px to the right ("next") or to the left ("prev")
  const scrollCarousel = (direction) => {
    const amount = direction === "next" ? 600 : -600;
    trackRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div className="carousel-section-wrapper">
      <h2 className="carousel-section-heading">{title}</h2>

      <div className="carousel-viewport-frame">
        {/* Left arrow button */}
        <button
          className="carousel-arrow-btn left-arrow"
          onClick={() => scrollCarousel("prev")}
        >
          ‹
        </button>

        {/* The row of pictures, one box for each picture in the list */}
        <div className="carousel-scroll-track" ref={trackRef}>
          {products.map((imgSrc, index) => (
            <div key={index} className="carousel-product-node">
              <img src={imgSrc} alt={`Carousel picture ${index + 1}`} />
            </div>
          ))}
        </div>

        {/* Right arrow button */}
        <button
          className="carousel-arrow-btn right-arrow"
          onClick={() => scrollCarousel("next")}
        >
          ›
        </button>
      </div>
    </div>
  );
}

export default ProductCarousel;
