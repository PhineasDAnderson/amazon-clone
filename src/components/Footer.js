// src/components/Footer.js
import React from "react";
import amazonLogo from "../Images/amazon-logo.png";

// The four columns of links at the top of the footer. Each column has a title and a list of links
const footerColumns = [
  {
    title: "Get to Know Us",
    links: [
      "Careers",
      "Blog",
      "About Amazon",
      "Investor Relations",
      "Amazon Devices",
      "Amazon Science",
    ],
  },
  {
    title: "Make Money with Us",
    links: [
      "Sell products on Amazon",
      "Sell on Amazon Business",
      "Sell apps on Amazon",
      "Become an Affiliate",
      "Advertise Your Products",
      "Self-Publish with Us",
      "Host an Amazon Hub",
      "› See More Make Money with Us",
    ],
  },
  {
    title: "Amazon Payment Products",
    links: [
      "Amazon Business Card",
      "Shop with Points",
      "Reload Your Balance",
      "Amazon Currency Converter",
    ],
  },
  {
    title: "Let Us Help You",
    links: [
      "Amazon and COVID-19",
      "Your Account",
      "Your Orders",
      "Shipping Rates & Policies",
      "Returns & Replacements",
      "Manage Your Content and Devices",
      "Help",
    ],
  },
];

// The list of Amazon services in the dark part of the footer. Each has a name and a short line of text
const footerServices = [
  { name: "Amazon Music", text: "Stream millions of songs" },
  { name: "Amazon Ads", text: "Reach customers wherever they spend their time" },
  { name: "6pm", text: "Score deals on fashion brands" },
  { name: "AbeBooks", text: "Books, art & collectibles" },
  { name: "ACX", text: "Audiobook Publishing Made Easy" },
  { name: "Sell on Amazon", text: "Start a Selling Account" },
  { name: "Veeqo", text: "Shipping Software Inventory Management" },
  { name: "Amazon Business", text: "Everything For Your Business" },
  { name: "AmazonGlobal", text: "Ship Orders Internationally" },
  { name: "Amazon Web Services", text: "Scalable Cloud Computing Services" },
  { name: "Audible", text: "Listen to Books & Original Audio Performances" },
  { name: "Box Office Mojo", text: "Find Movie Box Office Data" },
  { name: "Goodreads", text: "Book reviews & recommendations" },
  { name: "IMDb", text: "Movies, TV & Celebrities" },
  { name: "IMDbPro", text: "Get Info Entertainment Professionals Need" },
  { name: "Kindle Direct Publishing", text: "Indie Digital & Print Publishing Made Easy" },
  { name: "Prime Video Direct", text: "Video Distribution Made Easy" },
  { name: "Shopbop", text: "Designer Fashion Brands" },
  { name: "Woot!", text: "Deals and Shenanigans" },
  { name: "Zappos", text: "Shoes & Clothing" },
  { name: "Ring", text: "Smart Home Security Systems" },
  { name: "eero WiFi", text: "Stream 4K Video in Every Room" },
  { name: "Blink", text: "Smart Security for Every Home" },
  { name: "Neighbors App", text: "Real-Time Crime & Safety Alerts" },
  { name: "PillPack", text: "Pharmacy Simplified" },
];

// The footer shown at the bottom of every page
function Footer() {
  // Scroll smoothly back to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-container">
      {/* Back to top bar */}
      <div className="footer-back-to-top" onClick={scrollToTop}>
        <span>Back to top</span>
      </div>

      {/* The four link columns. One column is made for each item in footerColumns */}
      <div className="footer-links-row">
        {footerColumns.map((column) => (
          <div key={column.title} className="footer-column">
            <h3>{column.title}</h3>
            <ul>
              {column.links.map((link) => (
                <li key={link}>
                  <a href={`#${link}`}>{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Logo and the language, currency and country buttons */}
      <div className="footer-brand-panel">
        <div className="footer-logo-frame">
          <img src={amazonLogo} alt="Amazon Logo" />
        </div>
        <div className="footer-regional-selectors">
          <span className="footer-setting-pill">🌐 English</span>
          <span className="footer-setting-pill">$ USD - U.S. Dollar</span>
          <span className="footer-setting-pill">🇺🇸 United States</span>
        </div>
      </div>

      {/* The list of Amazon services. One box is made for each item in footerServices */}
      <div className="footer-services-dark-grid">
        <div className="footer-services-inner">
          {footerServices.map((service) => (
            <div key={service.name} className="service-node">
              <a href={`#${service.name}`}>
                <strong>{service.name}</strong>
                <span>{service.text}</span>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Legal links and copyright at the very bottom */}
      <div className="footer-legal-base">
        <div className="footer-legal-links">
          <a href="#conditions">Conditions of Use</a>
          <a href="#privacy">Privacy Notice</a>
          <a href="#health-privacy">Consumer Health Data Privacy Disclosure</a>
          <a href="#ad-choices">
            Your Ads Privacy Choices{" "}
            <span className="privacy-toggle-icon">☑</span>
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