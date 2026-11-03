
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">

      <div className="footer-main">

        {/* BRAND SECTION */}
        <div className="footer-brand">
          <div className="footer-logo">
            Shop<span>Kart</span>
          </div>

          <p>
            Your one-stop destination for quality
            <br />
            products at the best prices.
          </p>

          <div className="footer-socials">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">f</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">◎</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">𝕏</a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">▶</a>
          </div>
        </div>

        {/* SHOP LINKS */}
        <div className="footer-column">
          <h3>Shop</h3>
          <Link to="/products">All Products</Link>
          <Link to="/products">Categories</Link>
          <Link to="/products">New Arrivals</Link>
          <Link to="/products">Best Sellers</Link>
          <Link to="/products">Deals of the Day</Link>
        </div>

        {/* CUSTOMER SERVICE */}
        <div className="footer-column">
          <h3>Customer Service</h3>
          <Link to="/contact">Contact Us</Link>
          <a href="mailto:support@shopkart.com">FAQs</a>
          <a href="mailto:support@shopkart.com">Shipping Policy</a>
          <a href="mailto:support@shopkart.com">Returns & Refunds</a>
          <Link to="/cart">Track Order</Link>
        </div>

        {/* COMPANY */}
        <div className="footer-column">
          <h3>Company</h3>
          <Link to="/about">About Us</Link>
          <a href="mailto:careers@shopkart.com">Careers</a>
          <a href="mailto:support@shopkart.com">Privacy Policy</a>
          <a href="mailto:support@shopkart.com">Terms & Conditions</a>
          <a href="mailto:support@shopkart.com">Sell on ShopKart</a>
        </div>

        {/* PAYMENT METHODS */}
        <div className="footer-payments">
          <h3>We Accept</h3>

          <div className="payment-methods">
            <span className="payment">VISA</span>
            <span className="payment">Mastercard</span>
            <span className="payment">UPI</span>
            <span className="payment">Paytm</span>
          </div>

          <div className="secure-payment">
            <span className="lock-icon">🔒</span>
            <span>100% Secure Payments</span>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 ShopKart. All Rights Reserved.</p>
        <p>Made with <span>♥</span> for smarter shopping.</p>
      </div>

    </footer>
  );
}

export default Footer;
