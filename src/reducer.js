export const initialState = {
  basket: [],
};

//Selector
export const getBasketTotal = (basket) =>
//map through the basket and take in an initial amount at each item. 
//At each item take the price and add it to the initial amount value. 
//Initial amount value is 0 
  basket?.reduce((amount, item) => item.price + amount, 0)


const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    //when a user does adds to basket action
    case "ADD_TO_BASKET":
      // return the current state plus and current basket state + the added action.item
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    default:
      return state;
  }
};

export default reducer;
