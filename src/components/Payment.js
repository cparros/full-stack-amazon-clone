import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "../axios";
import React, { useState, useEffect } from "react";
import CurrencyFormat from "react-currency-format";
import { Link, useHistory } from "react-router-dom";
import { getBasketTotal } from "../reducer";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { db } from '../firebase'

import "./styles/Payment.css";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory()

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    //SUPER IMPORTANT PIECE OF CODE
    //generate stripe secrt that allows charging of customer. You need new secret when basket changes so basket goes in []
    const getClientSecret = async () => {
      const response = await axios({
        method: "POST",
        //stripe expexts the total in a currencies subunits, aka cents. $10 = 10000
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    //when basket changes it will run the function and set the client stripe secret to allow us to charge the correct ammount
    getClientSecret();
  }, [basket]);

  console.log('The Client Secret is >>>', clientSecret)

  const handleSubmit = async (event) => {
    // stripe functions
    event.preventDefault();
    setProcessing(true);

      //payload takes in the client secret from use effect change so it can charge the client
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
      
    }).then(({ paymentIntent }) => {
     //payment intent is payment confirmation 
      db.collection('users')
      .doc(user?.uid)
      .collection('orders')
      .doc(paymentIntent.id)
      .set({
        basket: basket,
        amount: paymentIntent.amount,
        created: paymentIntent.created
      })

     //if is successful
     setSucceeded(true)
     setError(null)
     setProcessing(false)

     dispatch({
       type: 'EMPTY_BASKET'
     })
      // you use replace here because when doing paymets you dont want the user to be able to go back in the browser to another payment page.
     history.replace('./orders')
    });
    
  };

  const handleChange = (event) => {
    //need 2 instances of state one for disabled state and one to set button error
    //listen for changes on card input and look for errors and display
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
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
            {basket.map((item) => (
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
            {/* Stripe info will go here */}

            <form onSubmit={handleSubmit}>
              {/* card element imported from react-stripe-js */}
              <CardElement onChange={handleChange} />

              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  thousandSeparator={true}
                  displayType={"Text"}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {/* If error then show div with error in it */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
