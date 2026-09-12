import React, { useRef } from 'react';
//import './ProductCarousel.css';

/* Handles programmatic horizontal image scrolling chains using native window methods */
function ProductCarousel({ title, products }) {
  const scrollContainerRef = useRef(null);

  /* Triggers scroll viewport leaps on action click events */
  const executeScrollTranslation = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollMagnitude = 600; 
      container.scrollBy({
        left: direction === 'next' ? scrollMagnitude : -scrollMagnitude,
        behavior: 'smooth' 
      });
    }
  };

  return (
    <div className="carousel-section-wrapper">
      <h2 className="carousel-section-heading">{title}</h2>
      
      <div className="carousel-viewport-frame">
        <button className="carousel-arrow-btn left-arrow" onClick={() => executeScrollTranslation('prev')}>‹</button>
        
        <div className="carousel-scroll-track" ref={scrollContainerRef}>
          {products.map((imgSrc, index) => (
            <div key={index} className="carousel-product-node">
              <img src={imgSrc} alt={`Carousel element tracking entry ${index}`} />
            </div>
          ))}
        </div>
        
        <button className="carousel-arrow-btn right-arrow" onClick={() => executeScrollTranslation('next')}>›</button>
      </div>
    </div>
  );
}

export default ProductCarousel;
