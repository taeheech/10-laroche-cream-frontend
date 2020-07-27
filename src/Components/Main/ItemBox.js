import React, { Component } from "react";
import "./ItemBox.scss";

class ItemBox extends Component {
  render() {
    const { item } = this.props;
    return (
      <div className="ItemBox">
        <li>
          <div className="itemBoxFrame">
            <img alt="" src={item.img} />
            <p className="itemHash">{item.hash}</p>
            <p className="itemName">{item.name}</p>
            <p className="itemDesc">{item.desc}</p>
            <p className="itemPrice">
              <strong>{item.price}</strong>
              <span>원</span>
            </p>
            <div className="over">
              <div className="detailView"></div>
              <div className="addCart"></div>
            </div>
          </div>
        </li>
      </div>
    );
  }
}
export default ItemBox;
