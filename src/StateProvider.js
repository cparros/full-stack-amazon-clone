import React, {createContext, useContext, useReducer } from 'react'

//Prepares data layer
export const StateContext = createContext();

// Wraps our app to help provide the data layer to the whole application
export const StateProvider = ({ reducer, initialState, children}) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//Pull information from data layer
export const useStateValue = () => useContext(StateContext)