import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <main id="Home">
      <div className="heroSection">
        <div className="food-content">
          <h1>Delicious Food</h1>
          <h2>Delivered Fast!</h2>

          <div className="food-title">
       <p>
              Craving something delicious? Order your favourite meals from
              nearby restaurants and enjoy them at your doorstep.
            </p>
          </div>

          <div className="btn">
            <Link to="/booking" className="order-btn">
              Order Now
            </Link>

            <Link to="/menu" className="menu-btn">
              Explore Menu
            </Link>
          </div>
        </div>

        <div className="food-img">
          <img
            src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1170&auto=format&fit=crop"
            alt="Delicious food served on a table"
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;