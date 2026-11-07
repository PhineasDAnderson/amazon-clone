// src/App.js
// React tools and the parts of the page this file puts together
import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import HeroCarousel from './components/HeroCarousel';
import MainPage from './components/MainPage';
import CartItem from './components/CartItem';
import Footer from './components/Footer';

function App() {
  // Cart starts with whatever is saved in localStorage, so items stay after a refresh
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('amazon_clone_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Which page to show: 'home' or 'cart'
  const [currentView, setCurrentView] = useState('home');

  // Dark mode starts with the saved choice from localStorage
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('amazon_dark_mode') === 'true';
  });

  // The shipping form details and the delivery option picked by the user
  const [shippingForm, setShippingForm] = useState({ name: '', address: '', deliveryType: 'standard' });

  // Becomes true after the user places an order
  const [isOrdered, setIsOrdered] = useState(false);

  // What the user has typed in the search bar
  const [searchTerm, setSearchTerm] = useState('');

  // Save the cart to localStorage every time it changes
  useEffect(() => {
    localStorage.setItem('amazon_clone_cart', JSON.stringify(cart));
  }, [cart]);

  // Save dark mode and add or remove the dark class on the page
  useEffect(() => {
    localStorage.setItem('amazon_dark_mode', darkMode);
    if (darkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [darkMode]);

  // Add a product to the cart. If it is already there, add 1 to its quantity
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Change an item's quantity by +1 or -1. If it reaches 0 it is removed
  const updateQuantity = (productId, delta) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => (item.id === productId ? { ...item, quantity: item.quantity + delta } : item))
        .filter((item) => item.quantity > 0)
    );
  };

  // Remove an item from the cart completely
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Work out the totals shown in the cart and order summary
  const totalItemsCount = cart.reduce((total, item) => total + item.quantity, 0);
  const itemsSubtotalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const shippingCost = shippingForm.deliveryType === 'express' ? 15.0 : 0.0;
  const estimatedOrderTotal = itemsSubtotalPrice + shippingCost;

  // Place the order: save it in localStorage, show the confirmation and empty the cart
  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    if (shippingForm.name.trim() === '' || shippingForm.address.trim() === '') {
      return;
    }

    const newOrder = {
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      name: shippingForm.name,
      address: shippingForm.address,
      deliveryType: shippingForm.deliveryType,
      items: cart,
      total: estimatedOrderTotal
    };

    const oldOrders = JSON.parse(localStorage.getItem('amazon_clone_orders')) || [];
    localStorage.setItem('amazon_clone_orders', JSON.stringify([...oldOrders, newOrder]));

    setIsOrdered(true);
    setCart([]);
  };

  // Go back to the home page and clear the confirmation message
  const goBackToShopping = () => {
    setCurrentView('home');
    setIsOrdered(false);
  };

  return (
    <div className={`app ${darkMode ? 'dark-theme' : ''}`}>
      {/* Top bar with the logo, search bar, dark mode button and cart */}
      <NavBar
        cartCount={totalItemsCount}
        setView={setCurrentView}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <main className="main-content-body">
        {/* Home page shows the banner and products. Otherwise show the cart page */}
        {currentView === 'home' ? (
          <>
            {/* The banner is hidden while the user is searching */}
            {searchTerm === '' && <HeroCarousel />}
            <MainPage addToCart={addToCart} searchTerm={searchTerm} />
          </>
        ) : (
          <div className="cart-checkout-container">
            {/* Button to go back to the home page */}
            <button className="back-to-shopping-btn" onClick={goBackToShopping}>
              ← Continue Shopping
            </button>

            {/* After placing an order show the confirmation, otherwise show the cart */}
            {isOrdered ? (
              <div className="checkout-success-panel">
                <span className="success-checkmark-icon">✔</span>
                <h2>Order Confirmed! Thank you for your purchase.</h2>
                <p>Your order has been saved. This is a demo confirmation page.</p>
              </div>
            ) : (
              <div className="checkout-workspace-split">
                <div className="checkout-left-rail">
                  {/* List of items in the cart, one CartItem for each */}
                  <div className="shopping-cart-list-card">
                    <h3>Shopping Cart Review</h3>
                    {cart.length === 0 ? (
                      <p>Your Amazon Cart is empty.</p>
                    ) : (
                      cart.map((item) => (
                        <CartItem
                          key={item.id}
                          id={item.id}
                          title={item.title}
                          price={item.price}
                          img={item.img}
                          quantity={item.quantity}
                          updateQuantity={updateQuantity}
                          removeFromCart={removeFromCart}
                        />
                      ))
                    )}
                  </div>

                  {/* Shipping form only shows when the cart has items */}
                  {cart.length > 0 && (
                    <form id="shipping-form" className="shipping-credential-form" onSubmit={handleCheckoutSubmit}>
                      <h3>Shipping Address</h3>
                      <div className="form-input-field-group">
                        <label>Full Name</label>
                        <input
                          type="text"
                          required
                          value={shippingForm.name}
                          onChange={(e) => setShippingForm({ ...shippingForm, name: e.target.value })}
                        />
                      </div>
                      <div className="form-input-field-group">
                        <label>Street Address</label>
                        <input
                          type="text"
                          required
                          value={shippingForm.address}
                          onChange={(e) => setShippingForm({ ...shippingForm, address: e.target.value })}
                        />
                      </div>
                    </form>
                  )}
                </div>

                {/* Order summary with totals, delivery option and the place order button */}
                <div className="checkout-right-order-summary-rail">
                  <div className="summary-calculation-card">
                    <h3>Order Summary</h3>
                    <div className="calculation-invoice-row">
                      <span>Items ({totalItemsCount}):</span>
                      <span>${itemsSubtotalPrice.toFixed(2)}</span>
                    </div>
                    <div className="calculation-invoice-row">
                      <span>Delivery:</span>
                      <span>{shippingCost === 0 ? 'FREE' : `$${shippingCost.toFixed(2)}`}</span>
                    </div>
                    <div className="calculation-invoice-row total-row-highlight">
                      <span>Order Total:</span>
                      <span>${estimatedOrderTotal.toFixed(2)}</span>
                    </div>

                    {/* Dropdown to choose standard or express delivery */}
                    <div style={{ marginTop: '15px' }}>
                      <label style={{ fontSize: '13px', fontWeight: 'bold' }}>Shipping Speed:</label>
                      <select
                        style={{ width: '100%', padding: '5px', marginTop: '5px' }}
                        value={shippingForm.deliveryType}
                        onChange={(e) => setShippingForm({ ...shippingForm, deliveryType: e.target.value })}
                      >
                        <option value="standard">Standard Shipping (FREE)</option>
                        <option value="express">Express Delivery (+$15.00)</option>
                      </select>
                    </div>

                    {/* Submits the shipping form and places the order */}
                    <button
                      type="submit"
                      form="shipping-form"
                      className="place-fake-order-cta-btn"
                      disabled={cart.length === 0}
                    >
                      Place Your Order
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
        {/* Footer shown on every page */}
        <Footer />
      </main>
    </div>
  );
}

export default App;
