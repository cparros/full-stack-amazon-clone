import React from "react";
import { useStateValue } from "../StateProvider";
import anime from 'animejs/lib/anime.es.js';
import "./styles/Product.css";

function Product({ /*props*/ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const scaleProductEnter = (e) => {
    let target = e.target
    anime({
      targets: target,
      scale: 1.05,
    })
  }

  const scaleProductLeave = (e) => {
    let target = e.target
    anime({
      targets: target,
      scale: 1.0,
    })
  }

  const scaleButtonEnter = (e) => {
    let target = e.target
    anime({
      targets: target,
      scale: 1.2,
    })
  }

  const scaleButtonLeave = (e) => {
    let target = e.target
    anime({
      targets: target,
      scale: 1.0,
    })
  }

  const addToBasket = () => {
    // 1. Push data to data layer 2. state = state of global store 3.dispatch is how data is manipulated
    //dispatch the item into data layer
    

    // console.log("This is the basket >>>", basket);

    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div onMouseEnter={scaleProductEnter} onMouseLeave={scaleProductLeave} className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {/* Create an empty array and fill it with the # rating given*/}
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt=''/>

      <button onMouseEnter={scaleButtonEnter} onMouseLeave={scaleButtonLeave} onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
