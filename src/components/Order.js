import React from "react";
import "./styles/Order.css";
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct"
import CurrencyFormat from "react-currency-format"

function Order({ order }) {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      <p className="order__id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map(orderItem => (
        <CheckoutProduct 
          id={orderItem.id}
          title={orderItem.title}
          image={orderItem.image}
          price={orderItem.price}
          rating={orderItem.rating}
        />
      ))}
      <CurrencyFormat 
        renderText={(value) => (
          <h3 className="order__total">Order Total: {value}/</h3>
        )}
        decmialScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        />
    </div>
  );
}

export default Order;
