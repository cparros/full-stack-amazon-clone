import React from "react";
import { Link } from "react-router-dom"
import { useStateValue } from "../StateProvider"
import CheckoutProduct from "./CheckoutProduct"
import "./styles/Payment.css";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="payment">
      <div className="payment__container">
      <h1>
        Checkout (
          <Link to='/checkout'>{basket?.length} items</Link>
          )
      </h1>
        {/* payment section address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>111 New Developer Road</p>
            <p>NewCareer, NC, 11111</p>
          </div>
        </div>
        {/* section review items */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items for Delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map(item => (
              <CheckoutProduct 
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />

            ))}
          </div>
        </div>
        {/* payment method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">

          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
