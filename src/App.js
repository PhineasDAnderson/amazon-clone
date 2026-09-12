// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import HeroCarousel from './components/HeroCarousel';
import MainPage from './components/MainPage';
import Footer from './components/Footer';

function App() {
  // --- STATE SYSTEM SETUP ---
  
  // Sourced initial storage parameters out of client browser memories to establish persistent context state records.
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('amazon_clone_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Determines structural UI branch routing layouts between storefront components and invoice summary listings.
  const [currentView, setCurrentView] = useState('home');

  // Extracts current theme configurations from memory indexes to preserve selected aesthetic preferences.
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('amazon_dark_mode') === 'true';
  });

  // Controls parameters during transaction validation sequences.
  const [shippingForm, setShippingForm] = useState({ name: '', address: '', deliveryType: 'standard' });
  const [isOrdered, setIsOrdered] = useState(false);

  // --- LOCAL MEMORY HOOKS ---
  
  // Updates browser memory arrays automatically following incremental transactional mutations.
  useEffect(() => {
    localStorage.setItem('amazon_clone_cart', JSON.stringify(cart));
  }, [cart]);

  // Adjusts primary context body configurations while committing operational choices inside local records.
  useEffect(() => {
    localStorage.setItem('amazon_dark_mode', darkMode);
    if (darkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [darkMode]);

  // --- SHOPPING OPERATIONS ---
  
  // Appends incoming item payloads to baseline records or modifies item amounts upon identifier detection.
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

  // Updates operational item amounts dynamically while deleting references dropping below single units.
  const updateQuantity = (productId, delta) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => (item.id === productId ? { ...item, quantity: item.quantity + delta } : item))
        .filter((item) => item.quantity > 0)
    );
  };

  // Traverses primary state indices to prune out items matching removal criteria parameters.
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Confirms informational credential submissions, resets checkout structures, and updates payment states.
  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    if (shippingForm.name.trim() && shippingForm.address.trim()) {
      setIsOrdered(true);
      setCart([]);
    }
  };

  // --- INVOICE ARITHMETIC ---
  // Processes data models sequentially to compute accurate billing summaries across variable states.
  const totalItemsCount = cart.reduce((total, item) => total + item.quantity, 0);
  const itemsSubtotalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shippingCost = shippingForm.deliveryType === 'express' ? 15.00 : 0.00;
  const estimatedOrderTotal = itemsSubtotalPrice + shippingCost;

    // --- COMPONENT MASTER LAYOUT RETURN ---
return (
  <div className={`app ${darkMode ? 'dark-theme' : ''}`}>
    <NavBar 
      cartCount={totalItemsCount} 
      setView={setCurrentView} 
      darkMode={darkMode}
      setDarkMode={setDarkMode}
    />

      
      <main className="main-content-body">
        {currentView === 'home' ? (
          <>
            <HeroCarousel />
            <MainPage addToCart={addToCart} />
          </>
        ) : (
          <div className="cart-checkout-container">
            <button className="back-to-shopping-btn" onClick={() => { setCurrentView('home'); setIsOrdered(false); }}>
              ← Continue Shopping
            </button>

            {isOrdered ? (
              <div className="checkout-success-panel">
                <span className="success-checkmark-icon">✔</span>
                <h2>Order Confirmed! Thank you for your purchase.</h2>
                <p>Your package is being processed. This interface demonstrates a custom fake order confirmation layout.</p>
              </div>
            ) : (
              <div className="checkout-workspace-split">
                
                <div className="checkout-left-rail">
                  <div className="shopping-cart-list-card">
                    <h3>Shopping Cart Review</h3>
                    {cart.length === 0 ? <p>Your Amazon Cart is empty.</p> : cart.map((cartItem) => {
                      // Performs standard JavaScript object destructuring to extract values directly from mapped entries.
                      const { id, title, price, img, quantity } = cartItem;
                      return (
                        <div key={id} className="cart-item-row-node">
                          <div className="cart-item-thumbnail-frame"><img src={img} alt={title} /></div>
                          <div className="cart-item-details-metadata">
                            <h4>{title}</h4>
                            <div className="cart-item-action-controls">
                              <button onClick={() => updateQuantity(id, -1)} className="qty-adjustment-toggle">-</button>
                              <span>{quantity}</span>
                              <button onClick={() => updateQuantity(id, 1)} className="qty-adjustment-toggle">+</button>
                              <button onClick={() => removeFromCart(id)} className="cart-delete-action-link">Delete</button>
                            </div>
                          </div>
                          <div><strong>${(price * quantity).toFixed(2)}</strong></div>
                        </div>
                      );
                    })}
                  </div>

                  {cart.length > 0 && (
                    <form className="shipping-credential-form" onSubmit={handleCheckoutSubmit}>
                      <h3>Shipping Address</h3>
                      <div className="form-input-field-group">
                        <label>Full Name</label>
                        <input type="text" required value={shippingForm.name} onChange={(e) => setShippingForm({ ...shippingForm, name: e.target.value })} />
                      </div>
                      <div className="form-input-field-group">
                        <label>Street Address</label>
                        <input type="text" required value={shippingForm.address} onChange={(e) => setShippingForm({ ...shippingForm, address: e.target.value })} />
                      </div>
                    </form>
                  )}
                </div>

                <div className="checkout-right-order-summary-rail">
                  <div className="summary-calculation-card">
                    <h3>Order Summary</h3>
                    <div className="calculation-invoice-row"><span>Items ({totalItemsCount}):</span><span>${itemsSubtotalPrice.toFixed(2)}</span></div>
                    <div className="calculation-invoice-row"><span>Delivery:</span><span>{shippingCost === 0 ? 'FREE' : `$${shippingCost.toFixed(2)}`}</span></div>
                    <div className="calculation-invoice-row total-row-highlight"><span>Order Total:</span><span>${estimatedOrderTotal.toFixed(2)}</span></div>
                    
                    <div style={{ marginTop: '15px' }}>
                      <label style={{ fontSize: '13px', fontWeight: 'bold' }}>Shipping Speed:</label>
                      <select style={{ width: '100%', padding: '5px', marginTop: '5px' }} value={shippingForm.deliveryType} onChange={(e) => setShippingForm({ ...shippingForm, deliveryType: e.target.value })}>
                        <option value="standard">Standard Shipping (FREE)</option>
                        <option value="express">Express Delivery (+$15.00)</option>
                      </select>
                    </div>

                    <button className="place-fake-order-cta-btn" disabled={cart.length === 0} onClick={handleCheckoutSubmit}>
                      Place Your Order
                    </button>
                  </div>
                </div>

              </div>
            )}
          </div>
        )}
        <Footer />
      </main>
    </div>
  );
}

export default App;
