import React, { useState } from "react";
import "./OrderForm.css";

const OrderForm = () => {

  const [OrderNow, setOrderNow] = useState({
    name: "",
    number: "",
    foodItem: "",
    address: "",
    payment: "",
    userId: 101
  });

  const [message, setmessage] = useState("");


  const HandelChangeOrder = (e) => {

    const { name, value } = e.target;

    setOrderNow((prev) => ({
      ...prev,
      [name]: value
    }));

  };


  const OrderFormData = async (e) => {

    e.preventDefault();


    if (
      OrderNow.name === "" ||
      OrderNow.number === "" ||
      OrderNow.foodItem === "" ||
      OrderNow.address === "" ||
      OrderNow.payment === ""
    ) {

      alert("Please enter all fields");
      return;

    }


    try {

      const response = await fetch(
        "https://e-commerce-backend-production-ce82.up.railway.app/order",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify(OrderNow)
        }
      );


      if (!response.ok) {

        throw new Error(`API Error: ${response.status}`);

      }


      const data = await response.json();

      console.log("Order saved:", data);

      setmessage("Order placed successfully!");


    } catch (error) {

      console.error("Error:", error);

      alert("Something went wrong!");

    }


    setOrderNow({
      name: "",
      number: "",
      foodItem: "",
      address: "",
      payment: "",
      userId: 101
    });

  };


  return (

    <section className="form-section">

      <form
        className="Order-form"
        onSubmit={OrderFormData}
      >

        <label>Name</label>

        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={OrderNow.name}
          onChange={HandelChangeOrder}
        />


        <label>Phone</label>

        <input
          type="tel"
          name="number"
          placeholder="Enter your phone"
          value={OrderNow.number}
          onChange={HandelChangeOrder}
        />


        <label>Food-Item</label>

        <select
          name="foodItem"
          value={OrderNow.foodItem}
          onChange={HandelChangeOrder}
        >

          <option value="">Select Food</option>
          <option value="Burger">Burger</option>
          <option value="Pizza">Pizza</option>
          <option value="Pasta">Pasta</option>
          <option value="Biryani">Biryani</option>

        </select>


        <label>Address</label>

        <input
          type="text"
          name="address"
          placeholder="Enter your address"
          value={OrderNow.address}
          onChange={HandelChangeOrder}
        />


        <label>Payment</label>

        <select
          name="payment"
          value={OrderNow.payment}
          onChange={HandelChangeOrder}
        >

          <option value="">Select Payment</option>
          <option value="UPI">UPI</option>
          <option value="Cash">Cash</option>
          <option value="Card">Card</option>

        </select>


        <div className="form-btn">

          <button type="submit">
            Place Order
          </button>

        </div>


        <p>{message}</p>

      </form>


      <div className="contact-info">

        <h3>Contact Us</h3>

        <p>📍 Dera Gopipur, Himachal Pradesh</p>

        <p>📞 +91 98765 43210</p>

        <p>✉️ hello@foodie.com</p>


        <div className="form-buttons">

          <button>▶ Google Play</button>

          <button> App Store</button>

        </div>

      </div>

    </section>

  );
};


export default OrderForm;