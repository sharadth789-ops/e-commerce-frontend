import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">

      {/* Logo */}
      <div className="logo-name">
        <h1>
          Bite<span>Rush</span>
        </h1>
      </div>


      {/* Desktop Navigation */}
      <nav className="desktop-nav">
          <ul>

            <li>
              <a href="#Home">
                🏠Home
              </a>
            </li>
               
               <li>
  <Link to="/menu">
    🍴Menu
  </Link>
</li>

            <li>
              <a href="#Restaurants" >
                🏪Restaurants
              </a>
            </li>

            <li>
              <a href="#Offers" >
               🏷Offers
              </a>
            </li>
   
   <li>
  <Link to="/track-order">
    📍Track Order
  </Link>
</li>

            <li>
              <a href="#About" >
                ℹAbout Us
              </a>
            </li>

            <li>
              <a href="#Contact" >
                ☎Contact
              </a>
            </li>

          </ul>

      </nav>


      {/* Desktop Order Button */}
      <div className="Cta-btn">
        <Link to="/booking">
          <button>Order Now</button>
        </Link>
      </div>


      {/* Hamburger */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>


      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>

        <nav>
          <ul>

            <li>
              <a href="#Home" onClick={closeMenu}>
                🏠Home
              </a>
            </li>

        <li>
  <Link to="/menu">🍴Menu </Link>
          </li>

            <li>
              <a href="#Restaurants" onClick={closeMenu}>
                🏪Restaurants
              </a>
            </li>

            <li>
              <a href="#Offers" onClick={closeMenu}>
               🏷Offers
              </a>
            </li>
     
     <li>
  <Link to="/track-order">📍Track Order </Link>
          </li>

            <li>
              <a href="#About" onClick={closeMenu}>
                ℹAbout Us
              </a>
            </li>

            <li>
              <a href="#Contact" onClick={closeMenu}>
                ☎Contact
              </a>
            </li>

          </ul>
        </nav>


        {/* Mobile Order Button */}
        <Link to="/booking" onClick={closeMenu}>
          <button>Order Now</button>
        </Link>

      </div>

    </header>
  );
};

export default Navbar;
