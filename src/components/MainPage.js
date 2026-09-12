// src/components/MainPage.js
import React, { useState } from 'react';
//import './MainPage.css';
import CategoryGrid from './CategoryGrid';
import ProductCarousel from './ProductCarousel';

function MainPage({ addToCart }) {
  // --- INDIVIDUAL PRODUCT DATA ARCHITECTURE ---
  // Establishes a data registry of 8 items containing title, pricing metrics, asset paths, and ratings categories.
  const directProducts = [
    { id: 101, title: "Sennheiser Wireless Gaming Headset - Pro Audio Noise Cancelling", price: 149.99, rating: 5, img: "/images/Gaming Headset.jpg", category: "Electronics" },
    { id: 102, title: "DualShock 4 Wireless Controller for PlayStation - Jet Black", price: 59.99, rating: 4, img: "/images/Dual-shock Controllers.jpg", category: "Electronics" },
    { id: 103, title: "Premium Casual Denim Slim-Fit Jeans (Vintage Indigo)", price: 34.95, rating: 4, img: "/images/Jeans.jpg", category: "Fashion" },
    { id: 104, title: "Women's Summer Floral Accent Casual Dress", price: 28.50, rating: 5, img: "/images/Dresses.jpg", category: "Fashion" },
    { id: 105, title: "Cast Iron Non-Stick Grilling Pan - Matte Black Finish", price: 42.00, rating: 4, img: "/images/Pans.jpg", category: "Kitchen" },
    { id: 106, title: "Heavy Duty Kitchen Utensil Baking Set (12-Piece)", price: 19.99, rating: 5, img: "/images/Kitchen Utensils.jpg", category: "Kitchen" },
    { id: 107, title: "Ergonomic High-Density Yoga Exercise Mat with Carrying Strap", price: 24.99, rating: 4, img: "/images/Yoga Matt.jpg", category: "Sports" },
    { id: 108, title: "Stainless Steel Vacuum Insulated Sports Water Bottle (32oz)", price: 18.75, rating: 5, img: "/images/Waterbottle.jpg", category: "Sports" }
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
    { id: 1, title: "Get your game on", type: "single", img: "/images/Gaming.jpg", linkText: "Shop gaming" },
    { id: 2, title: "Shop Fashion for less", type: "quad", items: [{ label: "Jeans", img: "/images/Jeans.jpg" }, { label: "Tops", img: "/images/Tops.jpg" }, { label: "Dresses", img: "/images/Dresses.jpg" }, { label: "Shoes", img: "/images/Shoes.jpg" }], linkText: "See all deals" },
    { id: 3, title: "New arrivals under $50", type: "quad", items: [{ label: "Kitchen", img: "/images/Kitchen Utensils.jpg" }, { label: "Improvement", img: "/images/Home Improvement.jpg" }, { label: "Décor", img: "/images/Decor.jpg" }, { label: "Bedding", img: "/images/Bedding & Bath.jpg" }], linkText: "Shop Home" },
    { id: 4, title: "Grilling must-haves", type: "quad", items: [{ label: "Pans", img: "/images/Pans.jpg" }, { label: "Aprons", img: "/images/Aprons.jpg" }, { label: "Tools", img: "/images/Home Tools.jpg" }, { label: "Gloves", img: "/images/Gloves.jpg" }], linkText: "Shop Father's Day" }
  ];

  const carouselItems1 = ["/images/Yoga Matt.jpg", "/images/Waterbottle.jpg", "/images/Skipping Rope.jpg", "/images/Running Shoes.jpg", "/images/Sports Watch.jpg", "/images/Sports Wear.jpg"];

  const gridRow2 = [
    { id: 5, title: "Wireless Tech", type: "quad", items: [{ label: "Smartphones", img: "/images/Smartphone.jpg" }, { label: "Watches", img: "/images/Watches.jpg" }, { label: "Headphones", img: "/images/Headphones.jpg" }, { label: "Tablets", img: "/images/Tablets.jpg" }], linkText: "Discover more" },
    { id: 6, title: "Level up beauty", type: "quad", items: [{ label: "Makeup", img: "/images/Makeup.jpg" }, { label: "Brushes", img: "/images/Brushes.jpg" }, { label: "Sponges", img: "/images/Sponges.jpg" }, { label: "Mirrors", img: "/images/Mirrors.jpg" }], linkText: "See more" },
    { id: 7, title: "Level up your PC here", type: "quad", items: [{ label: "Laptops", img: "/images/Laptops.jpg" }, { label: "PCs", img: "/images/PCs.jpg" }, { label: "Hard Drives", img: "/images/Hardrives.jpg" }, { label: "Monitors", img: "/images/Monitors.jpg" }], linkText: "Discover more" },
    { id: 8, title: "Deals on top categories", type: "quad", items: [{ label: "Books", img: "/images/Books.jpg" }, { label: "Fashion", img: "/images/Fashion.jpg" }, { label: "PC", img: "/images/PC.jpg" }, { label: "Beauty", img: "/images/Beauty.jpg" }], linkText: "Discover more" }
  ];

  const carouselItems2 = ["/images/Woody.jpg", "/images/Rubix Cube.jpg", "/images/Action Figures.jpg", "/images/Pokemon Cards.jpg", "/images/Tv Game Catridge.jpg", "/images/Retro Games.jpg"];

  const gridRow3 = [
    { id: 9, title: "Level up your gaming", type: "quad", items: [{ label: "PC gaming", img: "/images/PC gaming.jpg" }, { label: "Xbox", img: "/images/Xbox.jpg" }, { label: "PlayStation", img: "images/PlayStation.jpg" }, { label: "Nintendo Switch", img: "images/Nintendo Switch.jpg" }], linkText: "Shop latest" },
    { id: 10, title: "Upgrade on Tech", type: "quad", items: [{ label: "PC", img: "images/PC.jpg" }, { label: "Wireless", img: "/images/Wireless.jpg" }, { label: "Software", img: "/images/Software.jpg" }, { label: "Home audio", img: "/images/Home Audio.jpg" }], linkText: "Shop all tech" },
    { id: 11, title: "Finds for Home", type: "quad", items: [{ label: "Kitchen", img: "/images/Kitchen Accessories.jpg" }, { label: "Home Decor", img: "/images/Home Decor.jpg" }, { label: "Dining", img: "/images/Dining.jpg" }, { label: "Smart Home", img: "/images/Smart Home.jpg" }], linkText: "See more" },
    { id: 12, title: "Home & Kitchen", type: "quad", items: [{ label: "Coffee", img: "/images/Coffee.jpg" }, { label: "Multi-Cookers", img: "/images/Multi cookers.jpg" }, { label: "Vacuums", img: "/images/Vaccuums.jpg" }, { label: "Irons", img: "/images/Irons.jpg" }], linkText: "Shop now" }
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

      {/* ==========================================================================
         INTERACTIVE PRODUCT BUYING INTERFACE GRID AND FILTER PANEL
         ========================================================================== */}
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
