import "./App.css";
import Header from "./components/Header.js";
import Home from "./components/Home.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    //BEM name convention for styling = _ _ for clss names. 2 underscores
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <h1>I AM CHECKOUT PAGE</h1>
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
