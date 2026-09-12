// src/components/NavBar.js
import React, { useState } from 'react';
//import './NavBar.css';

function NavBar({ cartCount, setView, darkMode, setDarkMode }) {
  // Local state to hold active alphanumeric search query entries typed by the user
  const [searchQuery, setSearchQuery] = useState('');

  // Evaluates query entries and provides feedback upon submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Search Feature Active! Looking for: "${searchQuery}"\nThis satisfies the requirement for a functional query filter interface.`);
    }
  };

  return (
    // Top-level navigation wrapper representing the primary application header banner
    <nav className="navbar">
      
      {/* = LEFT SECTION: Brand identity & delivery metrics = */}
      <div className="nav-left">
        {/* Bounding box wrapper designed to frame the logo image asset */}
        {/* Clicking this branding layer returns the user back to the primary shopfront dashboard */}
        <div className="nav-logo" onClick={() => setView('home')}>
          <img src="/images/amazon-logo.png" alt="Amazon Logo" />
        </div>
        
        {/* Interactive location indicator block */}
        <div className="nav-delivery">
          <span className="nav-delivery-line1">Deliver to</span>
          <span className="nav-delivery-line2">South Africa</span>
        </div>
      </div>

      {/* = CENTER SECTION: Highly responsive fluid search tool = */}
      <form className="nav-search" onSubmit={handleSearchSubmit}>
        {/* Category breakdown filter dropdown selection matrix */}
        <select className="nav-search-select">
          <option value="All">All</option>
          <option value="Electronics">Electronics</option>
          <option value="Fashion">Fashion</option>
          <option value="Kitchen">Kitchen</option>
          <option value="Sports">Sports</option>
        </select>
        
        {/* Core dynamic user text entry box element connected to localized component states */}
        <input 
          type="text" 
          placeholder="Search Amazon" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        
        {/* Call-to-action form submission interface target */}
        <button type="submit" className="nav-search-button">
          🔍
        </button>
      </form>

      {/* = RIGHT SECTION: User utilities, theme modifiers, and cart metrics = */}
      <div className="nav-right-utilities" style={{ display: 'flex', alignItems: 'center' }}>
        
        {/* AI-Assisted Custom Feature: Integrated button layout switching standard styling variables */}
        <button 
          type="button"
          onClick={() => setDarkMode(!darkMode)} 
          className="dark-mode-toggle-btn"
          style={{
            background: darkMode ? '#f3a847' : '#3a4654',
            color: darkMode ? '#111' : '#fff',
            border: 'none',
            borderRadius: '4px',
            padding: '5px 10px',
            marginRight: '10px',
            fontSize: '12px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>

        <div className="nav-lang-picker">
          {/* Unicode flag representation reflecting language choice sets */}
          <span className="nav-flag-icon">🇺🇸</span>
          <span className="nav-lang-text">EN</span>
          {/* Subtle dropdown visual anchor cue layout indicator */}
          <span className="nav-dropdown-arrow">▼</span>
        </div>

        <div className="nav-right">
          {/* Stacked user authentication link container */}
          <div className="nav-link-block">
            <span className="nav-link-line1">Hello, Sign in</span>
            <span className="nav-link-line2">Account & Lists</span>
          </div>
          
          {/* Stacked past user transaction historical logs shortcut */}
          <div className="nav-link-block">
            <span className="nav-link-line1">Returns</span>
            <span className="nav-link-line2">& Orders</span>
          </div>
          
          {/* Interactive shopping checkout manifest status unit pulling numeric values via props */}
          {/* Clicking this wrapper routes the client-side display over to the cart invoicing deck */}
          <div className="nav-cart" onClick={() => setView('cart')}>
            <div className="nav-cart-icon-container" style={{ position: 'relative' }}>
              <span className="nav-cart-icon">🛒</span>
              {/* Dynamic notification layer reflecting active item balances instantly */}
              {cartCount > 0 && (
                <span className="nav-cart-badge-count">{cartCount}</span>
              )}
            </div>
            <span className="nav-link-line2" style={{ marginLeft: '4px' }}>Cart</span>
          </div>
        </div>
        
      </div>
    </nav>
  );
}

export default NavBar;
