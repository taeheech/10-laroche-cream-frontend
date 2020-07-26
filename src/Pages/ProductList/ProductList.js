import React, { Component } from "react";
import Categories from "./Categories";
import SideLeft from "./SideLeft";
import ItemList from "./ItemList";
import Footer from "../../Components/Footer/Footer";
import FloatBar from "../../Components/FloatBar/FloatBar";
import "./ProductList.scss";

class ProductList extends Component {
  render() {
    return (
      <div className="ProductList">
        <Categories />
        <div className="mainContents">
          <SideLeft />
          <ItemList />
        </div>
        <FloatBar />
        <Footer />
      </div>
    );
  }
}

export default ProductList;
