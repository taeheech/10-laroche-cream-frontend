import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main/Main";
import SignUp from "./Pages/SignUp/SignUp";
import ProductList from "./Pages/ProductList/ProductList";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/product" component={ProductList} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
