// src/components/MainPage.js
import React, { useState } from 'react';
//import './MainPage.css';
import CategoryGrid from './CategoryGrid';
import ProductCarousel from './ProductCarousel';
import gamingHeadsetImg from '../Images/Gaming Headset.jpg';
import dualShockImg from '../Images/Dual-shock Controllers.jpg';
import jeansImg from '../Images/Jeans.jpg';
import dressesImg from '../Images/Dresses.jpg';
import pansImg from '../Images/Pans.jpg';
import kitchenUtensilsImg from '../Images/Kitchen Utensils.jpg';
import yogaMattImg from '../Images/Yoga Matt.jpg';
import waterbottleImg from '../Images/Waterbottle.jpg';
import topsImg from '../Images/Tops.jpg';
import shoesImg from '../Images/Shoes.jpg';
import kitchenImg from '../Images/Kitchen.jpg';
import improvementImg from '../Images/Home Improvement.jpg';
import decorImg from '../Images/Home Decor.jpg';
import beddingImg from '../Images/Bedding & Bath.jpg';
import apronsImg from '../Images/Aprons.jpg';
import toolsImg from '../Images/Home Tools.jpg';
import glovesImg from '../Images/Gloves.jpg';
import gamingImg from '../Images/Gaming.jpg';
import smartphoneImg from '../Images/Smartphone.jpg';
import makeupImg from '../Images/Makeup.jpg';
import laptopsImg from '../Images/Laptops.jpg';
import booksImg from '../Images/Books.jpg';
import woodyImg from '../Images/Woody.jpg';
import rubixImg from '../Images/Rubix Cube.jpg';
import carToysImg from '../Images/Car Toys.jpg';
import actionFiguresImg from '../Images/Action Figures.jpg';
import pcGamingImg from '../Images/PC gaming.jpg';
import pcImg from '../Images/PC.jpg';
import coffeeImg from '../Images/Coffee.jpg';
import skippingRopeImg from '../Images/Skipping Rope.jpg';
import sportsWearImg from '../Images/Sports Wear.jpg';
import sportsWatchImg from '../Images/Sports Watch.jpg';
import retroGamesImg from '../Images/Retro Games.jpg';
import pokemonCardsImg from '../Images/Pokemon Cards.jpg';
import tvGameCatridgeImg from '../Images/Tv Game Catridge.jpg';

function MainPage({ addToCart }) {
  // --- INDIVIDUAL PRODUCT DATA ARCHITECTURE ---
  // Establishes a data registry of 8 items containing title, pricing metrics, asset paths, and ratings categories.
  const directProducts = [
  { id: 101, title: "Sennheiser Wireless Gaming Headset - Pro Audio Noise Cancelling", price: 149.99, img: gamingHeadsetImg },
  { id: 102, title: "DualShock 4 Wireless Controller for PlayStation - Jet Black", price: 59.99, img: dualShockImg },
  { id: 103, title: "Premium Casual Denim Slim-Fit Jeans (Vintage Indigo)", price: 34.95, rating: 4.5, img: jeansImg },
  { id: 104, title: "Women's Summer Floral Accent Casual Dress", price: 28.50, rating: 5, img: dressesImg },
  { id: 105, title: "Cast Iron Non-Stick Grilling Pan - Matte Black Finish", price: 42.00, rating: 4, img: pansImg },
  { id: 106, title: "Heavy Duty Kitchen Utensil Baking Set (12-Piece)", price: 19.99, rating: 5, img: kitchenUtensilsImg },
  { id: 107, title: "Ergonomic High-Density Yoga Exercise Mat with Carrying Strap", price: 24.99, rating: 4.5, img: yogaMattImg },
  { id: 108, title: "Stainless Steel Vacuum Insulated Sports Water Bottle (32oz)", price: 18.75, rating: 4.8, img: waterbottleImg }
];

  // --- CUSTOM PRODUCT FILTERING STATES ---
  // Connects filter selection menus directly to active UI workspace views.
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState(200);

  // Filters data models in real-time based on active criteria parameters.
  const filteredProducts = directProducts.filter(product => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesPrice = product.price <= maxPrice;
    return matchesCategory && matchesPrice;
  });

  // --- FIXED BLUEPRINT MATRICES FROM LANDING TEMPLATE ---
const gridRow1 = [
  { id: 1, title: "Get your game on", type: "single", img: gamingImg, linkText: "Shop gaming" },
  { 
    id: 2, 
    title: "Shop Fashion for less", 
    type: "quad", 
    items: [
      { label: "Jeans", img: jeansImg },
      { label: "Tops", img: topsImg },
      { label: "Dresses", img: dressesImg },
      { label: "Shoes", img: shoesImg }
    ], 
    linkText: "See more" 
  },
  { 
    id: 3, 
    title: "New arrivals under $50", 
    type: "quad", 
    items: [
      { label: "Kitchen", img: kitchenImg },
      { label: "Improvement", img: improvementImg },
      { label: "Décor", img: decorImg },
      { label: "Bedding", img: beddingImg }
    ], 
    linkText: "Shop now" 
  },
  { 
    id: 4, 
    title: "Grilling must-haves", 
    type: "quad", 
    items: [
      { label: "Pans", img: pansImg },
      { label: "Aprons", img: apronsImg },
      { label: "Tools", img: toolsImg },
      { label: "Gloves", img: glovesImg }
    ], 
    linkText: "Explore all" 
  }
];

  const carouselItems1 = [
  yogaMattImg, 
  waterbottleImg, 
  skippingRopeImg, 
  shoesImg, 
  glovesImg, 
  toolsImg, 
  sportsWearImg,
  sportsWatchImg
];

const gridRow2 = [
  { id: 5, title: "Wireless Tech", type: "quad", items: [{ label: "Smartphones", img: smartphoneImg }] },
  { id: 6, title: "Level up beauty", type: "quad", items: [{ label: "Makeup", img: makeupImg }] },
  { id: 7, title: "Level up your PC here", type: "quad", items: [{ label: "Laptops", img: laptopsImg }] },
  { id: 8, title: "Deals on top categories", type: "quad", items: [{ label: "Books", img: booksImg }] }
];

const carouselItems2 = [woodyImg, rubixImg, actionFiguresImg, carToysImg, retroGamesImg, pokemonCardsImg, tvGameCatridgeImg];

const gridRow3 = [
  { id: 9, title: "Level up your gaming", type: "quad", items: [{ label: "PC gaming", img: pcGamingImg }] },
  { id: 10, title: "Upgrade on Tech", type: "quad", items: [{ label: "PC", img: pcImg }] },
  { id: 11, title: "Finds for Home", type: "quad", items: [{ label: "Kitchen", img: kitchenImg }] },
  { id: 12, title: "Home & Kitchen", type: "quad", items: [{ label: "Coffee", img: coffeeImg }] }
];

  return (
    <div className="main-page-scroller">
      
      <div className="row-overlap-adjust">
        <CategoryGrid cardData={gridRow1} />
      </div>

      <ProductCarousel title="Best Sellers in Sports & Outdoors" products={carouselItems1} />
      <CategoryGrid cardData={gridRow2} />
      <ProductCarousel title="Top Sellers in Toys for you" products={carouselItems2} />
      <CategoryGrid cardData={gridRow3} />

      {/* = INTERACTIVE PRODUCT BUYING INTERFACE GRID AND FILTER PANEL = */}

      <div className="featured-products-section">
        <div className="products-filter-header">
          <h3>Trending Products For You</h3>
          
          <div className="filter-controls-row">
            <label>Category:</label>
            <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
              <option value="All">All Categories</option>
              <option value="Electronics">Electronics</option>
              <option value="Fashion">Fashion</option>
              <option value="Kitchen">Kitchen</option>
              <option value="Sports">Sports</option>
            </select>

            <label style={{ marginLeft: '20px' }}>Max Price: ${maxPrice}</label>
            <input 
              type="range" 
              min="15" 
              max="200" 
              value={maxPrice} 
              onChange={(e) => setMaxPrice(Number(e.target.value))} 
            />
          </div>
        </div>

        {/* Computes dynamic content list views adjusting responsively on variable layouts */}
        <div className="direct-products-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-buy-card">
              
              {/* Locks thumbnail frameworks into perfectly uniform alignment containers */}
              <div className="product-img-frame">
                <img src={product.img} alt={product.title} />
              </div>
              
              <h4 className="product-card-title">{product.title}</h4>
              
              <div className="product-card-stars">
                {"⭐".repeat(product.rating)}
                <span className="rating-count-text"> ({product.id + 24} ratings)</span>
              </div>
              
              {/* Formats currency pricing tags cleanly using isolated structural text segments */}
              <div className="product-card-price">
                <span className="price-symbol">$</span>
                <span className="price-whole">{Math.floor(product.price)}</span>
                <span className="price-fraction">{(product.price % 1).toFixed(2).substring(2)}</span>
              </div>

              {/* Action callback connecting transaction clicks directly to parent context hooks */}
              <button type="button" className="add-to-cart-btn" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
              
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default MainPage;
