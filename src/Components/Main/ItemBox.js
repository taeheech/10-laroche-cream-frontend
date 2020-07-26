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
    // fetch("api주소", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     access_token: this.state.access_token,
    //     user_id: key,     // key값 확인
    //   }),
    // }).then((res) => res.json());
  };

  removeLikeItem = (key) => {
    console.log(key);
    // fetch("api주소", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     access_token: this.state.access_token,
    //     user_id: key,     // key값 확인
    //   }),
    // }).then((res) => res.json());
  };

  handleClickLikes = (key) => {
    if (this.state.access_token) {
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
    } else {
      alert("먼저 로그인 해주세요");
    }
  };

  render() {
    const { item, width, showLikes, isBest, isNew, hash } = this.props;

    const { isActive } = this.state;
    const { handleClickLikes } = this;
    console.log(item.price);
    console.log(item.sale_price > 0);
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

            <img alt="" src={item.img} />
            <p className="itemHash">{hash}</p>
            <p className="itemLine">{item.product_line}</p>
            <p className="itemName">{item.name}</p>
            <div className="itemPrice">
              <div className="discount">
                <span
                  className={item.sale_price ? "discountRate" : "displayNone"}
                >
                  {Math.round(
                    ((item.price - item.sale_price) / item.price) * 100
                  ) + "%"}
                </span>
                <p className={item.sale_price ? "salePrice" : "sellingPrice"}>
                  {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
                    "원"}
                </p>
              </div>
              <p className={item.sale_price ? "sellingPrice" : "displayNone"}>
                {item.sale_price > 0 &&
                  item.sale_price
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원"}
              </p>
            </div>
            <div className="over">
              <Link to="/" className="detailView"></Link>
              <Link to="/" className="addCart"></Link>
            </div>
          </div>
        </li>
      </div>
    );
  }
}
export default ItemBox;
