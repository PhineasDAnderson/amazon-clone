// src/components/CategoryGrid.js
import React from "react";

// A row of white category cards. MainPage gives it the list of cards to show
function CategoryGrid({ cardData }) {
  return (
    <div className="grid-container-layout">
      {/* One card for each item in the list */}
      {cardData.map((card) => (
        <div key={card.id} className="grid-card-base">
          <h2 className="grid-card-heading">{card.title}</h2>

          {/* A "single" card shows one big picture, other cards show small pictures with labels */}
          {card.type === "single" ? (
            <div className="category-card-single-box">
              <img src={card.img} alt={card.title} />
            </div>
          ) : (
            <div className="quad-grid-container">
              {card.items.map((item, index) => (
                <div key={index} className="quad-item-box">
                  <div className="quad-image-frame">
                    <img src={item.img} alt={item.label} />
                  </div>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          )}

          {/* Link text at the bottom of the card */}
          <span className="category-card-link">{card.linkText}</span>
        </div>
      ))}
    </div>
  );
}

export default CategoryGrid;
