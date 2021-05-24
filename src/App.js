import "./App.css";
import Header from "./components/Header.js";
import Home from "./components/Home.js";
import Checkout from "./components/Checkout";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";

function App() {
  return (
    //BEM name convention for styling = _ _ for clss names. 2 underscores
    <Router>
      <div className="app">
        {/* Header is outside switch so that it is always rendered no matter what page the user is on */}
        <Header />
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
