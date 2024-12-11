import React from 'react';
import './Footer.css'; // CSS file for Footer styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Footer Logo and Description */}
        <div className="footer-logo-section">
          <h2>ShopList</h2>
          <p>Your one-stop destination for finding the best agricultural shops in your area!</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Email: support@shoplist.com</p>
          <p>Phone: +91 12345 67890</p>
          <div className="footer-social-icons">
            <a href="https://facebook.com"><img src="images/facebook.png" alt="Facebook" /></a>
            <a href="https://instagram.com"><img src="images/instagram.png" alt="Instagram" /></a>
            <a href="https://twitter.com"><img src="images/twitter.png" alt="Twitter" /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 ShopList. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
