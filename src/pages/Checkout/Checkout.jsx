import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {

  const location = useLocation();

  const food = location.state?.food;
  const offerCoupon = location.state?.coupon;

  const [quantity, setQuantity] = useState(1);
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [coupon, setCoupon] = useState(offerCoupon || '');
  const [discount, setDiscount] = useState(0);

  const coupons = {
    WELCOME50: 50,
    SPECIAL30: 30,
    WEEKEND20: 20,
  };

  const subtotal = Number(food?.price || 0) * quantity;

  // Coupon apply
  const applyCoupon = () => {

    const code = coupon.trim().toUpperCase();

    const discountPercent = coupons[code];

    if (discountPercent) {

      const discountAmount =
        (subtotal * discountPercent) / 100;

      setDiscount(discountAmount);

    } else {

      setDiscount(0);

      alert('Invalid Coupon');

    }
  };


  // Offer se coupon aaya hai
  // toh automatically apply hoga
  useEffect(() => {

    if (offerCoupon) {

      const code = offerCoupon.toUpperCase();

      const discountPercent = coupons[code];

      if (discountPercent) {

        const discountAmount =
          (subtotal * discountPercent) / 100;

        setDiscount(discountAmount);

      }

    }

  }, [offerCoupon, subtotal]);


  const total = subtotal - discount;


  // API Request
  const placeOrder = async () => {

    // Basic validation
    if (!food) {
      alert('Food not found');
      return;
    }

    if (!address.trim()) {
      alert('Please enter your address');
      return;
    }

    if (!phone.trim()) {
      alert('Please enter your phone number');
      return;
    }


    // Backend ko ye data bhejenge
    const orderData = {

      foodId: food.id,

      quantity: quantity,

      address: address,

      phone: phone,

      coupon: coupon

    };


    try {

      const response = await fetch(
        'https://e-commerce-backend-production-ce82.up.railway.app/food',
        {
          method: 'POST',

          headers: {
            'Content-Type': 'application/json'
          },

          body: JSON.stringify(orderData)
        }
      );


      if (!response.ok) {
        throw new Error('Order request failed');
      }


      const data = await response.json();


      console.log('Order created:', data);

      alert('Order placed successfully!');

    } catch (error) {

      console.error('Error:', error);

      alert('Something went wrong while placing order');

    }

  };


  return (
    <div className="checkout">

      <h1>{food?.name}</h1>


      <img
        src={food?.img}
        alt={food?.name}
      />


      <p>
        {food?.Description}
      </p>


      {/* Quantity */}

      <div className="quantity">

        <button
          onClick={() =>
            setQuantity((prev) =>
              Math.max(1, prev - 1)
            )
          }
        >
          -
        </button>


        <span>
          {quantity}
        </span>


        <button
          onClick={() =>
            setQuantity((prev) =>
              prev + 1
            )
          }
        >
          +
        </button>

      </div>


      {/* Address */}

      <div className="input-group">

        <label>
          Delivery Address
        </label>


        <textarea
          placeholder="Enter your delivery address"
          value={address}
          onChange={(e) =>
            setAddress(e.target.value)
          }
        />

      </div>


      {/* Phone */}

      <div className="input-group">

        <label>
          Phone Number
        </label>


        <input
          type="tel"
          placeholder="Enter your phone number"
          value={phone}
          onChange={(e) =>
            setPhone(e.target.value)
          }
        />

      </div>


      {/* Coupon */}

      <div className="coupon">

        <input
          type="text"
          placeholder="Enter coupon code"
          value={coupon}
          onChange={(e) => {

            setCoupon(
              e.target.value.toUpperCase()
            );

            setDiscount(0);

          }}
        />


        <button onClick={applyCoupon}>
          Apply
        </button>

      </div>


      {/* Price */}

      <div className="price-details">

        <p>
          Subtotal:

          <span>
            ₹{subtotal}
          </span>
        </p>


        <p>
          Discount:

          <span>
            ₹{discount}
          </span>
        </p>


        <h2>
          Total:

          <span>
            ₹{total}
          </span>
        </h2>

      </div>


      {/* Pay Now */}

      <button
        className="pay-btn"
        onClick={placeOrder}
      >
        Pay Now
      </button>

    </div>
  );
};

export default Checkout;
