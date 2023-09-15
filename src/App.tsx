import React from "react";
import logo from "./logo.svg";
// import "./App.css";
import Header from "./components/Header";
import Products from "./components/Products/Products";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import CartItem from "./components/Carts/CartItem/CartItem";
import SingleItem from "./components/SingleItem/SingleItem";
import Carts from "./components/Carts";

function App() {
  return (
    // <div>
    //   <Header />
    //   <Products />
    // </div>
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/Carts" component={Carts} />
          <Route exact path="/SingleItem" component={SingleItem} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
{
  /* <Route exact path="/foo" component={} />
          <Route exact path="/bar" component={} /> */
}
