import React from 'react';
import './Menu.css';
import { Link, useLocation } from 'react-router-dom';

const Menu = () => {

  const location = useLocation();

  // Offers se coupon aa raha hai
  const offerCoupon = location.state?.coupon;

  const menu = [
    // Breakfast
    {
      img: "https://images.unsplash.com/photo-1600335895229-6e75511892c8?w=600",
      id: "1",
      name: "Burger",
      category: "Breakfast",
      price: "149",
      Description:
        "Fresh and delicious burger with crispy vegetables, cheese, and special sauce.",
      Available: "Yes",
      button: "Order Now",
    },

    {
      img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600",
      id: "2",
      name: "Omelette",
      category: "Breakfast",
      price: "99",
      Description:
        "Soft and tasty omelette prepared with fresh eggs and vegetables.",
      Available: "Yes",
      button: "Order Now",
    },

    {
      img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600",
      id: "9",
      name: "Omelette Special",
      category: "Breakfast",
      price: "99",
      Description:
        "Soft and tasty omelette prepared with fresh eggs and vegetables.",
      Available: "Yes",
      button: "Order Now",
    },

    {
      img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600",
      id: "10",
      name: "Cheese Omelette",
      category: "Breakfast",
      price: "129",
      Description:
        "Delicious cheese omelette prepared with fresh eggs and vegetables.",
      Available: "Yes",
      button: "Order Now",
    },

    // Lunch
    {
      img: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=600",
      id: "3",
      name: "Chicken Rice",
      category: "Lunch",
      price: "199",
      Description:
        "Delicious chicken served with fresh and flavorful rice.",
      Available: "Yes",
      button: "Order Now",
    },

    {
      img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600",
      id: "4",
      name: "Veg Thali",
      category: "Lunch",
      price: "179",
      Description:
        "Complete Indian thali with vegetables, dal, rice, roti and salad.",
      Available: "Yes",
      button: "Order Now",
    },

    // Snacks
    {
      img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600",
      id: "5",
      name: "French Fries",
      category: "Snacks",
      price: "99",
      Description:
        "Crispy golden french fries served with delicious dipping sauce.",
      Available: "Yes",
      button: "Order Now",
    },

    {
      img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600",
      id: "6",
      name: "Samosa",
      category: "Snacks",
      price: "60",
      Description:
        "Crispy and spicy samosas filled with delicious potato stuffing.",
      Available: "Yes",
      button: "Order Now",
    },

    // Dinner
    {
      img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600",
      id: "7",
      name: "Paneer Butter Masala",
      category: "Dinner",
      price: "249",
      Description:
        "Creamy paneer cooked in a rich and flavorful butter masala gravy.",
      Available: "Yes",
      button: "Order Now",
    },

    {
      img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600",
      id: "8",
      name: "Biryani",
      category: "Dinner",
      price: "299",
      Description:
        "Aromatic and flavorful biryani prepared with fragrant rice and spices.",
      Available: "Yes",
      button: "Order Now",
    },
  ];

  const categories = [
    "Breakfast",
    "Lunch",
    "Snacks",
    "Dinner"
  ];

  return (
    <section className="menu-container">

      {categories.map((category) => (

        <div className="menu-section" key={category}>

          <h1 className="food-heading">
            {category}
          </h1>

          <div className="menu-card">

            {menu
              .filter((item) => item.category === category)
              .map((item) => (

                <div
                  className="menu-item"
                  key={item.id}
                >

                  <img
                    src={item.img}
                    alt={item.name}
                  />

                  <h2>
                    {item.name}
                  </h2>

                  <div className="category">
                    {item.category}
                  </div>

                  <div className="price">
                    ₹{item.price}
                  </div>

                  <p>
                    {item.Description}
                  </p>

                  <div className="available">

                    {item.Available === "Yes"
                      ? "Available"
                      : "Not Available"
                    }

                  </div>

                  {/* Order Now */}
                  <Link
                    to="/checkout"
                    state={{
                      food: item,
                      coupon: offerCoupon
                    }}
                  >

                    <button>
                      {item.button}
                    </button>

                  </Link>

                </div>

              ))}

          </div>

        </div>

      ))}

    </section>
  );
};

export default Menu;
