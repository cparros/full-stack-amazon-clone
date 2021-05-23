import "./App.css";
import Header from "./components/Header.js";
import Home from "./components/Home.js";

function App() {
  return (
    //BEM name convention for styling
    <div className="app">
      <Header />
      <Home />
    </div>
  );
}

export default App;
