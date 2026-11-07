                                    // src/components/NavBar.js
                                    
// React and the logo picture
import React from 'react';
import amazonLogo from '../Images/amazon-logo.png';

// The top bar. App.js gives it the cart count, the search text and the dark mode setting
function NavBar({ cartCount, setView, darkMode, setDarkMode, searchTerm, setSearchTerm }) {
  // Save what the user types and go back to the home page so the results can be seen
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setView('home');
  };

  // Stop the page from reloading when the search form is submitted
  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  // Go to the home page and clear the search
  const goHome = () => {
    setView('home');
    setSearchTerm('');
  };

  return (
    <nav className="navbar">
      {/* Left side: logo (click to go home) and delivery text */}
      <div className="nav-left">
        <div className="nav-logo" onClick={goHome}>
          <img src={amazonLogo} alt="Amazon Logo" />
        </div>

        {/* Delivery location text */}
        <div className="nav-delivery">
          <span className="nav-delivery-line1">Deliver to</span>
          <span className="nav-delivery-line2">South Africa</span>
        </div>
      </div>

      {/* Middle: search bar. The products on the home page filter as the user types */}
      <form className="nav-search" onSubmit={handleSearchSubmit}>
        {/* Category dropdown. It is only for the look and does not filter yet */}
        <select className="nav-search-select">
          <option value="All">All</option>
          <option value="Electronics">Electronics</option>
          <option value="Fashion">Fashion</option>
          <option value="Kitchen">Kitchen</option>
          <option value="Sports">Sports</option>
        </select>

        {/* Search box. Typing updates the search text in App.js */}
        <input
          type="text"
          placeholder="Search Amazon"
          value={searchTerm}
          onChange={handleSearchChange}
        />

        {/* Search button with the Material Icons search icon */}
        <button type="submit" className="nav-search-button">
          <span className="material-icons">search</span>
        </button>
      </form>

      {/* Right side: dark mode button, language, account links and cart */}
      <div className="nav-right-utilities">
        {/* Dark mode button. It was built with Cursor's help */}
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
          {darkMode ? 'Light' : 'Dark'}
        </button>

        {/* Language picker (flag and EN). It is only for the look */}
        <div className="nav-lang-picker">
          <span className="nav-flag-icon">🇺🇸</span>
          <span className="nav-lang-text">EN</span>
          <span className="nav-dropdown-arrow">▼</span>
        </div>

        <div className="nav-right">
          {/* Account link (only for the look) */}
          <div className="nav-link-block">
            <span className="nav-link-line1">Hello, Sign in</span>
            <span className="nav-link-line2">Account & Lists</span>
          </div>

          {/* Orders link (only for the look) */}
          <div className="nav-link-block">
            <span className="nav-link-line1">Returns</span>
            <span className="nav-link-line2">& Orders</span>
          </div>

          {/* Cart icon with a number badge. Clicking it opens the cart page */}
          <div className="nav-cart" onClick={() => setView('cart')}>
            <div className="nav-cart-icon-container">
              <span className="material-icons nav-cart-icon">shopping_cart</span>
              {cartCount > 0 && (
                <span className="nav-cart-badge-count">{cartCount}</span>
              )}
            </div>
            <span className="nav-link-line2">Cart</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
