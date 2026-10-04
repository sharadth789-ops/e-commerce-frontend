import React from "react";
import "./Footer.css";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer" id="Contact">

      <div className="footer-container">

        {/* Brand */}
        <div className="footer-box footer-brand">
          <h2 className="footer-logo">
            Food<span>ie</span>
          </h2>

          <p>
            Delicious food, fast delivery and happiness at your doorstep.
            Order your favourite food anytime, anywhere.
          </p>

          <div className="social-icons">
            <a href="#">f</a>
            <a href="#">𝕏</a>
            <a href="#">◎</a>
            <a href="#">▶</a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-box">
          <h3>Quick Links</h3>

          <ul>
            <li>
              <a href="#Home">Home</a>
            </li>

            <li>
              <a href="#About">About Us</a>
            </li>

            <li>
              <a href="#Offers">Offers</a>
            </li>

            <li>
              <Link to="/menu">Menu</Link>
            </li>

            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-box">
          <h3>Services</h3>

          <ul>
            <li>
              <Link to="/menu">Food Delivery</Link>
            </li>

            <li>
              <Link to="/track-order">Track Order</Link>
            </li>

            <li>
              <a href="#">Online Payment</a>
            </li>

            <li>
              <a href="#Restaurants">Restaurant Partner</a>
            </li>

            <li>
              <a href="#">Become a Rider</a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-box footer-contact">
          <h3>Contact Us</h3>

          <p>📍 Dera Gopipur, Himachal Pradesh</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ hello@foodie.com</p>

          <div className="app-buttons">
            <button>▶ Google Play</button>
            <button> App Store</button>
          </div>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">

        <p>
          © 2026 Foodie. All Rights Reserved.
        </p>

        <div>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>

      </div>

    </footer>
  );
};

export default Footer;