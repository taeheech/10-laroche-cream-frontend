import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main/Main";
import SignUp from "./Pages/SignUp/SignUp";
import ProductList from "./Pages/ProductList/ProductList";
import DetailPage from "./Pages/DetailPage/DetailPage";
import LikeItemList from "./Pages/LikeItemList/LikeItemList";
import Cart from "./Pages/Cart/Cart";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/productlist" component={ProductList} />
          <Route exact parth="/detailpage/:id" component={DetailPage} />
          <Route exact path="/likeitemlist" component={LikeItemList} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/product" component={ProductList} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
