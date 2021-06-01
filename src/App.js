import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header.js";
import Home from "./components/Home.js";
import Checkout from "./components/Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./components/Payment"
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Orders from './components/Orders'

//paste in api test key from stripe (This is public and safe)
const promise = loadStripe('pk_test_51IunkDAkgJAyOOeUO1DNeNfiKcfmLsWBEk3v5odk5xmoRWYOJcFGcFDr56At8a3KVG4a907V4dteTCN56R9fDoc400rbyCPyeC')

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    //will only run ONCE when App component loads
    auth.onAuthStateChanged((authUser) => {
      // console.log('The User Is >>> ', authUser)
      if (authUser) {
        //if there is an authUser then the user just logged in
        //dispatech to data layer
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    //BEM name convention for styling = _ _ for clss names. 2 underscores
    <Router>
      <div className="app">
        {/* Header is outside switch so that it is always rendered no matter what page the user is on */}

        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/orders">
            <Header />
           <Orders />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
