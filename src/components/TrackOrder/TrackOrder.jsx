import React, { useEffect, useState } from "react";
import "./TrackOrder.css";

const TrackOrder = () => {

  const [orders, setOrders] = useState([]);

  // Testing ke liye userId
  const userId = 101;

  // User ke orders fetch karna
  const getOrders = async () => {
    try {

      const response = await fetch(
        `https://e-commerce-backend-production-ce82.up.railway.app/orders/${userId}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch orders");
      }

      const data = await response.json();

      setOrders(data);

    } catch (error) {

      console.error("Error:", error);

    }
  };


  // Page load hote hi orders fetch honge
  useEffect(() => {
    getOrders();
  }, []);


  // Order delete karna
  const deleteOrder = async (id) => {

    try {

      const response = await fetch(
        `https://e-commerce-backend-production-ce82.up.railway.app/orders/${id}`,
        {
          method: "DELETE"
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete order");
      }

      // Delete ke baad UI se bhi order remove
      setOrders(
        orders.filter((order) => order.id !== id)
      );

    } catch (error) {

      console.error("Delete error:", error);

    }
  };


  return (

    <section className="track-order">

      <h2>Track Your Orders</h2>


      {orders.length === 0 ? (

        <p>No orders found.</p>

      ) : (

        orders.map((order) => (

          <div
            className="order-card"
            key={order.id}
          >

            <h3>
              Order #{order.id}
            </h3>


            <p>
              <strong>Name:</strong>{" "}
              {order.name}
            </p>


            <p>
              <strong>Phone:</strong>{" "}
              {order.number}
            </p>


            <p>
              <strong>Food Item:</strong>{" "}
              {order.foodItem}
            </p>


            <p>
              <strong>Address:</strong>{" "}
              {order.address}
            </p>


            <p>
              <strong>Payment:</strong>{" "}
              {order.payment}
            </p>


            <button
              onClick={() => deleteOrder(order.id)}
            >
              Delete Order
            </button>

          </div>

        ))

      )}

    </section>

  );
};

export default TrackOrder;