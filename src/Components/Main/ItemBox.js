import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ItemBox.scss";

class ItemBox extends Component {
  constructor() {
    super();
    this.state = {
      isActive: false,
      access_token: localStorage.getItem("access_token"),
    };
  }

  addLikeItem = (key) => {
    console.log(key);
  };

  removeLikeItem = (key) => {
    console.log(key);
  };

  handleClickLikes = (key) => {
    if (!this.state.access_token) {
      alert("먼저 로그인 해주세요");
      return;
    }

    if (this.state.isActive) {
      console.log("삭제!");
      alert("찜하기 취소!");
      this.addLikeItem(key);
      this.setState({
        isActive: false,
      });
    } else {
      console.log("추가!");
      alert("찜하기 성공!");
      this.removeLikeItem(key);
      this.setState({
        isActive: true,
      });
    }
  };

  render() {
    const { item, width, showLikes, isBest, isNew, hash } = this.props;
    const { img, product_line, name, price, sale_price } = this.props.item;
    const { isActive } = this.state;
    const { handleClickLikes } = this;
    return (
      <div className="ItemBox">
        <li>
          <div
            className={
              width === "narrow" ? "frame narrowFrame" : "frame wideFrame"
            }
          >
            <div
              className={showLikes && "like"}
              onClick={() => handleClickLikes(item.id)}
            >
              <div className={isActive ? "on" : "off"}></div>
            </div>

            <div className="itemTag">
              <div className={isBest ? "best" : "displayNone"}>BEST</div>
              <div
                className={isNew ? (isBest ? "bestnew" : "new") : "displayNone"}
              >
                NEW
              </div>
            </div>

            <img alt="" src={img} />
            <p className="itemHash">{hash}</p>
            <p className="itemLine">{product_line}</p>
            <p className="itemName">{name}</p>
            <div className="itemPrice">
              <div className="discount">
                <span className={sale_price ? "discountRate" : "displayNone"}>
                  {Math.round(((price - item.sale_price) / price) * 100) + "%"}
                </span>
                <p className={sale_price ? "salePrice" : "sellingPrice"}>
                  {price
                    .toLocaleString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원"}
                </p>
              </div>
              <p className={sale_price ? "sellingPrice" : "displayNone"}>
                {sale_price > 0 &&
                  sale_price
                    .toLocaleString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원"}
              </p>
            </div>
            <div className="over">
              <Link to="/" className="hoverBtn detailView"></Link>
              <Link to="/" className="hoverBtn addCart"></Link>
            </div>
          </div>
        </li>
      </div>
    );
  }
}
export default ItemBox;
