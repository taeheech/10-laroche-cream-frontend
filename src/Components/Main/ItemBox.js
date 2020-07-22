import React, { Component } from "react";
import "./ItemBox.scss";

class ItemBox extends Component {
  render() {
    const { item } = this.props;
    return (
      <div className="itemFrame">
        <div className="itemBox">
          <img alt="" src={item.img} />
          <p className="itemHash">{item.hash}</p>
          <p className="itemName">{item.name}</p>
          <p className="itemDesc">{item.desc}</p>
          <p className="itemPrice">{item.price}</p>
          <div className="over">
            <div className="detailView"></div>
            <div className="addCart"></div>
          </div>
        </div>
      </div>
    );
  }
}
export default ItemBox;
