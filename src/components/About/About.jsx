import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

const About = () => {
  const features = [
    {
      icon: "🍕",
      title: "Fresh & Delicious",
      description: "Fresh ingredients se tasty food prepare kiya jata hai.",
    },
    {
      icon: "🚀",
      title: "Fast Delivery",
      description: "Aapka favourite food jaldi aur safely deliver hota hai.",
    },
    {
      icon: "👨‍🍳",
      title: "Best Chefs",
      description: "Experienced chefs ke delicious dishes ka enjoy karein.",
    },
    {
      icon: "❤️",
      title: "Made With Love",
      description: "Har order quality aur care ke saath prepare kiya jata hai.",
    },
  ];

  return (
    <section className="about-section" id="About">
      <div className="about-container">

        {/* Image */}
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80"
            alt="Delicious food"
          />

          <div className="about-badge">
            <span>⭐</span>
            <div>
              <strong>4.9/5</strong>
              <small>Customer Rating</small>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="about-content">
          <span className="about-subtitle">ABOUT US</span>

          <h2>
            We Deliver Happiness
            <span> To Your Door</span>
          </h2>

          <p className="about-description">
            Welcome to our food delivery family! Humara goal simple hai —
            aapko delicious, fresh aur high-quality food ghar baithe provide
            karna.
          </p>

          <p className="about-description">
            Local restaurants aur talented chefs ke saath milkar hum aapke
            favourite meals ko fast aur safely aapke doorstep tak deliver
            karte hain.
          </p>

          {/* Features */}
          <div className="about-features">
            {features.map((feature) => (
              <div className="about-feature" key={feature.title}>
                <div className="feature-icon">
                  {feature.icon}
                </div>

                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

<Link to="/menu">
          <button className="about-btn">
            Explore Our Menu
          </button>
</Link>
</div>
      </div>

      {/* Stats */}
      <div className="about-stats">

        <div className="stat-box">
          <h3>10K+</h3>
          <p>Happy Customers</p>
        </div>

        <div className="stat-box">
          <h3>500+</h3>
          <p>Food Items</p>
        </div>

        <div className="stat-box">
          <h3>100+</h3>
          <p>Restaurants</p>
        </div>

        <div className="stat-box">
          <h3>30 Min</h3>
          <p>Average Delivery</p>
        </div>

      </div>
    </section>
  );
};

export default About;