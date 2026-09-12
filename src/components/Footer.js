import React from 'react';
//import './Footer.css';

/* Global structural component managing the hierarchical site footer directory layers */
function Footer() {
  
  /* Programmatically scrolls the browser viewport context smoothly to the page ceiling */
  const handleScrollToCeiling = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer-container">
      
      {/* LAYER 1: BACK TO TOP NAVIGATION STRIP */}
      <div className="footer-back-to-top" onClick={handleScrollToCeiling}>
        <span>Back to top</span>
      </div>

      {/* LAYER 2: PRIMARY DIRECTORY LINKS */}
      <div className="footer-links-row">
        
        <div className="footer-column">
          <h3>Get to Know Us</h3>
          <ul>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#about">About Amazon</a></li>
            <li><a href="#relations">Investor Relations</a></li>
            <li><a href="#devices">Amazon Devices</a></li>
            <li><a href="#science">Amazon Science</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Make Money with Us</h3>
          <ul>
            <li><a href="#sell">Sell products on Amazon</a></li>
            <li><a href="#sell-business">Sell on Amazon Business</a></li>
            <li><a href="#sell-apps">Sell apps on Amazon</a></li>
            <li><a href="#affiliate">Become an Affiliate</a></li>
            <li><a href="#advertise">Advertise Your Products</a></li>
            <li><a href="#publish">Self-Publish with Us</a></li>
            <li><a href="#host">Host an Amazon Hub</a></li>
            <li><a href="#see-more">› See More Make Money with Us</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Amazon Payment Products</h3>
          <ul>
            <li><a href="#cards">Amazon Business Card</a></li>
            <li><a href="#points">Shop with Points</a></li>
            <li><a href="#reload">Reload Your Balance</a></li>
            <li><a href="#currency">Amazon Currency Converter</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Let Us Help You</h3>
          <ul>
            <li><a href="#covid">Amazon and COVID-19</a></li>
            <li><a href="#account">Your Account</a></li>
            <li><a href="#orders">Your Orders</a></li>
            <li><a href="#shipping">Shipping Rates & Policies</a></li>
            <li><a href="#returns">Returns & Replacements</a></li>
            <li><a href="#manage">Manage Your Content and Devices</a></li>
            <li><a href="#help">Help</a></li>
          </ul>
        </div>

      </div>

      {/* LAYER 3: BRAND AND REGIONAL SETTINGS PANEL */}
      <div className="footer-brand-panel">
        <div className="footer-logo-frame">
          <img src="/images/amazon-logo.png" alt="Amazon Footer Logo" />
        </div>
        <div className="footer-regional-selectors">
          <span className="footer-setting-pill">🌐 English <span>🌐</span></span>
          <span className="footer-setting-pill">$ USD - U.S. Dollar</span>
          <span className="footer-setting-pill">🇺🇸 United States</span>
        </div>
      </div>

      {/* LAYER 4: DETAILED SUB-SERVICES MICRO-GRID */}
      <div className="footer-services-dark-grid">
        <div className="footer-services-inner">
          
          <div className="service-node">
            <a href="#music"><strong>Amazon Music</strong><span>Stream millions of songs</span></a>
          </div>
          <div className="service-node">
            <a href="#ads"><strong>Amazon Ads</strong><span>Reach customers wherever they spend their time</span></a>
          </div>
          <div className="service-node">
            <a href="#6pm"><strong>6pm</strong><span>Score deals on fashion brands</span></a>
          </div>
          <div className="service-node">
            <a href="#abebooks"><strong>AbeBooks</strong><span>Books, art & collectibles</span></a>
          </div>
          <div className="service-node">
            <a href="#acx"><strong>ACX</strong><span>Audiobook Publishing Made Easy</span></a>
          </div>
          <div className="service-node">
            <a href="#sell-amzn"><strong>Sell on Amazon</strong><span>Start a Selling Account</span></a>
          </div>
          <div className="service-node">
            <a href="#veeqo"><strong>Veeqo</strong><span>Shipping Software Inventory Management</span></a>
          </div>

          <div className="service-node">
            <a href="#business"><strong>Amazon Business</strong><span>Everything For Your Business</span></a>
          </div>
          <div className="service-node">
            <a href="#global"><strong>AmazonGlobal</strong><span>Ship Orders Internationally</span></a>
          </div>
          <div className="service-node">
            <a href="#aws"><strong>Amazon Web Services</strong><span>Scalable Cloud Computing Services</span></a>
          </div>
          <div className="service-node">
            <a href="#audible"><strong>Audible</strong><span>Listen to Books & Original Audio Performances</span></a>
          </div>
          <div className="service-node">
            <a href="#boxoffice"><strong>Box Office Mojo</strong><span>Find Movie Box Office Data</span></a>
          </div>
          <div className="service-node">
            <a href="#goodreads"><strong>Goodreads</strong><span>Book reviews & recommendations</span></a>
          </div>
          <div className="service-node">
            <a href="#imdb"><strong>IMDb</strong><span>Movies, TV & Celebrities</span></a>
          </div>

          <div className="service-node">
            <a href="#imdbpro"><strong>IMDbPro</strong><span>Get Info Entertainment Professionals Need</span></a>
          </div>
          <div className="service-node">
            <a href="#kdp"><strong>Kindle Direct Publishing</strong><span>Indie Digital & Print Publishing Made Easy</span></a>
          </div>
          <div className="service-node">
            <a href="#prime-video"><strong>Prime Video Direct</strong><span>Video Distribution Made Easy</span></a>
          </div>
          <div className="service-node">
            <a href="#shopbop"><strong>Shopbop</strong><span>Designer Fashion Brands</span></a>
          </div>
          <div className="service-node">
            <a href="#woot"><strong>Woot!</strong><span>Deals and Shenanigans</span></a>
          </div>
          <div className="service-node">
            <a href="#zappos"><strong>Zappos</strong><span>Shoes & Clothing</span></a>
          </div>
          <div className="service-node">
            <a href="#ring"><strong>Ring</strong><span>Smart Home Security Systems</span></a>
          </div>

          <div className="service-node">
            <a href="#eero"><strong>eero WiFi</strong><span>Stream 4K Video in Every Room</span></a>
          </div>
          <div className="service-node">
            <a href="#blink"><strong>Blink</strong><span>Smart Security for Every Home</span></a>
          </div>
          <div className="service-node">
            <a href="#neighbors"><strong>Neighbors App</strong><span>Real-Time Crime & Safety Alerts</span></a>
          </div>
          <div className="service-node">
            <a href="#pillpack"><strong>PillPack</strong><span>Pharmacy Simplified</span></a>
          </div>
          <div className="service-node empty-node"></div>
          <div className="service-node empty-node"></div>
          <div className="service-node empty-node"></div>

        </div>
      </div>

      {/* LAYER 5: LEGAL FOOTER AND COMPLIANCE COMPONENT */}
      <div className="footer-legal-base">
        <div className="footer-legal-links">
          <a href="#conditions">Conditions of Use</a>
          <a href="#privacy">Privacy Notice</a>
          <a href="#health-privacy">Consumer Health Data Privacy Disclosure</a>
          <a href="#ad-choices" className="privacy-choices-link">
            Your Ads Privacy Choices <span className="privacy-toggle-icon">☑</span>
          </a>
        </div>
        <p className="footer-copyright">
          © 1996-2026, Amazon.com, Inc. or its affiliates
        </p>
      </div>

    </footer>
  );
}

export default Footer;
