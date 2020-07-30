import React, { Component } from "react";
import Nav from "../../Components/Nav";
import CartItems from "./CartItems";
import FloatBar from "../../Components/FloatBar/FloatBar";
import Footer from "../../Components/Footer/Footer";

class Cart extends Component {
  render() {
    return (
      <>
        <Nav />
        <CartItems />
        <FloatBar />
        <Footer />
      </>
    );
  }
}

export default Cart;
