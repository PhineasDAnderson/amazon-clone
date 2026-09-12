// src/components/CategoryGrid.js
import React from 'react';
//import './CategoryGrid.css';

function CategoryGrid({ cardData }) {
  return (
    <div className="grid-container-layout">
      {cardData.map((card) => (
        <div key={card.id} className="grid-card-base">
          {/* Universal title header segment */}
          <h2 className="grid-card-heading">{card.title}</h2>

          {/* Conditional layout check: Renders a single image panel */}
          {card.type === 'single' ? (
            <div className="category-card-single-box">
              <img src={card.img} alt={card.title} />
            </div>
          ) : (
            /* Conditional layout check: Renders a 4-quadrant mini block matrix */
            <div className="quad-grid-container">
              {card.items && card.items.map((item, index) => (
                <div key={index} className="quad-item-box">
                  <div className="quad-image-frame">
                    <img src={item.img} alt={item.label} />
                  </div>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          )}

          {/* Action navigation link anchored cleanly below the visual assets */}
          <span className="category-card-link">{card.linkText}</span>
        </div>
      ))}
    </div>
  );
}

export default CategoryGrid;
