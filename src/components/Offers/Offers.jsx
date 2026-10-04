import React from "react";
import "./Offers.css";
import { Link } from "react-router-dom";

const Offers = () => {

  const offers = [
    {
      id: 1,
      icon: "🎉",
      title: "Welcome Offer",
      discount: "50% OFF",
      description: "On your first order",
      code: "WELCOME50",
      button: "Order Now",
    },
    {
      id: 2,
      icon: "🔥",
      title: "Special Offer",
      discount: "30% OFF",
      description: "On orders above ₹500",
      code: "SPECIAL30",
      button: "Order Now",
    },
    {
      id: 3,
      icon: "💝",
      title: "Weekend Offer",
      discount: "20% OFF",
      description: "Valid this weekend",
      code: "WEEKEND20",
      button: "Order Now",
    },
  ];

  return (
    <section className="offer-section" id="Offers">

      {/* =========================
          OFFER HEADING
      ========================= */}

      <div className="offer-heading">

        <span>Special Deals</span>

        <h1>
          Delicious Food,
          <br />
          <strong>Exciting Offers!</strong>
        </h1>

        <p>
          Enjoy your favourite food at amazing prices.
          Grab these special offers and save more on
          your next order.
        </p>

      </div>


      {/* =========================
          OFFER CARDS
      ========================= */}

      <div className="offer-item">

        {offers.map((item) => (

          <div className="offer-card" key={item.id}>

            <div className="offer-icon">
              {item.icon}
            </div>

            <h2>{item.title}</h2>

            <p className="discount">
              {item.discount}
            </p>

            <h4>
              {item.description}
            </h4>

            <h3>
              {item.code}
            </h3>

            <Link
              to="/menu"
              state={{ coupon: item.code }}
            >
              <button>
                {item.button}
              </button>
            </Link>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Offers;
