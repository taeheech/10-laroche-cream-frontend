import React, { Component } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import "./ItemBox.scss";

class ItemBox extends Component {
  constructor() {
    super();
    this.state = {
      isActive: false,
      access_token: localStorage.getItem("access_token"),
    };
  }

  // addLikeItem = (key) => {
  //   console.log(key);
  //   fetch("api주소", {
  //     method: "POST",
  //     headers: {
  //       Authorization: localStorage.getItem("access_token"),
  //     },
  //     body: JSON.stringify({ product_id: key }),
  //   }).then((res) => res.json());
  // };

  // removeLikeItem = (key) => {
  //   console.log(key);
  //   fetch("api주소", {
  //     method: "POST",
  //     headers: {
  //       Authorization: localStorage.getItem("access_token"),
  //     },
  //     body: JSON.stringify({ product_id: key }),
  //   }).then((res) => res.json());
  // };

  handleClickLikes = (key) => {
    if (!this.state.access_token) {
      alert("먼저 로그인 해주세요");
      return;
    }

    if (this.state.isActive) {
      // this.addLikeItem(key);
      this.setState({
        isActive: false,
      });
    } else {
      // this.removeLikeItem(key);
      this.setState({
        isActive: true,
      });
    }
  };

  render() {
    const { item, width, showLikes, isBest, isNew, isGift, hash } = this.props;
    const { images, product } = this.props.item;
    const { id, name, price, product_line, sale_price } = product;
    const priceNum = Number(price);
    const sale_priceNum = Number(sale_price);
    const { isActive } = this.state;
    const { handleClickLikes } = this;

    return (
      <div className="ItemBox" key={id}>
        <div className={isActive ? "showModal" : "displayNone"}>
          <Modal />
        </div>
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

            <img
              alt=""
              src={`https://www.larocheposay.co.kr${images[0].slice(
                1,
                images[0].length - 1
              )}`}
            />

            <p className="itemHash">{hash[0]}</p>
            <p className="itemLine">{product_line}</p>
            <p className="itemName">{name}</p>
            <div className="itemPrice">
              <div className="discount">
                <span
                  className={
                    sale_price !== price ? "discountRate" : "displayNone"
                  }
                >
                  {Math.round(((priceNum - sale_priceNum) / priceNum) * 100) +
                    "%"}
                </span>
                <p
                  className={
                    sale_price !== price ? "salePrice" : "sellingPrice"
                  }
                >
                  {priceNum.toLocaleString() + "원"}
                </p>
              </div>
              <p
                className={
                  sale_price !== price ? "sellingPrice" : "displayNone"
                }
              >
                {sale_priceNum > 0 && sale_priceNum.toLocaleString() + "원"}
              </p>
            </div>
            <div className="giftSaleTag">
              <p className={isGift ? "gift" : "displayNone"}>증정</p>
              <p className={sale_price !== price ? "sale" : "displayNone"}>
                세일
              </p>
            </div>
            <div className="over">
              <Link
                to={`detailpage/${product.id}`}
                className="hoverBtn detailView"
              ></Link>
              <div to="/" className="hoverBtn addCart"></div>
            </div>
          </div>
        </li>
      </div>
    );
  }
}
export default ItemBox;
