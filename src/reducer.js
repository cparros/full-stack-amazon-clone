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

      // when "remove from basket" clicked the code below checks the basket and splices or removes AT THE INDEX of the item clicked by 1 (index, 1)
    case 'REMOVE_FROM_BASKET': 
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      let newBasket = [...state.basket];

      if(index >= 0) {
        newBasket.splice(index, 1)
      } else {
        console.warn(`Cant remove product (id:${action.id}) it is not in the basket!`)
      }
      return {
        ...state,
        basket: newBasket
      }
  
    default:
      return state;
  }
};

export default reducer;
