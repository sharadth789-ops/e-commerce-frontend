import React from "react";
import "./Restaurants.css";
import { Link } from "react-router-dom";

const Restaurants = () => {
  const RestaurantsItem = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1579751626657-72bc17010498?w=800",
      name: "Pizza Paradise",
      rating: 4.8,
      category: "Pizza • Italian",
      time: "25-30 min",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800",
      name: "Spice Garden",
      rating: 4.6,
      category: "Indian • North Indian",
      time: "30-35 min",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800",
      name: "Burger House",
      rating: 4.7,
      category: "Burger • Fast Food",
      time: "20-25 min",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?q=80&w=1188&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Biryani Hub",
      rating: 4.9,
      category: "Biryani • Mughlai",
      time: "30-40 min",
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=800",
      name: "Tasty Corner",
      rating: 4.5,
      category: "Fast Food • Snacks",
      time: "20-30 min",
    },
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800",
      name: "Green Bowl",
      rating: 4.7,
      category: "Healthy • Vegetarian",
      time: "25-30 min",
    },
  ];

  return (
    <section className="restaurantsSection" id="Restaurants">

      {/* Section Heading */}
      <div className="restaurant-heading">
        <h2>Explore Top Restaurants</h2>

        <p>
          Discover the best restaurants and enjoy delicious food
          delivered right to your doorstep.
        </p>
      </div>

      {/* Restaurant Cards */}
      <div className="restaurant-menu">
        {RestaurantsItem.map((item) => (
          <div className="restaurant-card" key={item.id}>

            {/* Restaurant Image */}
            <img
              src={item.img}
              alt={item.name}
            />

            {/* Restaurant Information */}
            <h1>{item.name}</h1>

            <div className="rating">
              ⭐ {item.rating}
            </div>

            <p>{item.category}</p>

            <span>🕐 {item.time}</span>

            {/* Button */}
            <Link to="/menu">
               <button>
              View Menu
            </button>
            </Link>

          </div>
        ))}
      </div>

    </section>
  );
};

export default Restaurants;