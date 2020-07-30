import React, { Component } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import "./ItemBox.scss";

class ItemBox extends Component {
  constructor() {
    super();
    this.state = {
      addLike: false,
      addCart: false,
      Authorization: localStorage.getItem("Authorization"),
    };
  }

  addLikeItem = (key) => {
    console.log(key);
    fetch("http://10.58.4.80:8000/user/likeproduct", {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("Authorization"),
      },
      body: JSON.stringify({ product_id: key }),
    }).then((res) => res.json());
  };

  removeLikeItem = (key) => {
    console.log(key);
    fetch("http://10.58.4.80:8000/user/likeproduct", {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("Authorization"),
      },
      body: JSON.stringify({ product_id: key }),
    }).then((res) => res.json());
  };

  addCartItem = (key) => {
    console.log(key);
    fetch("http://10.58.4.80:8000/user/cartproduct", {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("Authorization"),
      },
      body: JSON.stringify({ product_id: key }),
    }).then((res) => res.json());
  };

  removeCartItem = (key) => {
    console.log(key);
    fetch("http://10.58.4.80:8000/user/cartproduct", {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("Authorization"),
      },
      body: JSON.stringify({ product_id: key }),
    }).then((res) => res.json());
  };

  handleClickLikes = (key) => {
    if (!this.state.Authorization) {
      alert("먼저 로그인 해주세요");
      return;
    }

    if (this.state.addLike) {
      this.addLikeItem(key);
      this.setState({
        addLike: false,
      });
    } else {
      this.removeLikeItem(key);
      this.setState({
        addLike: true,
      });
    }
  };

  handleClickCart = (key) => {
    if (!this.state.Authorization) {
      alert("먼저 로그인 해주세요");
      return;
    }

    if (this.state.addCart) {
      this.addCartItem(key);
      this.setState({
        addCart: false,
      });
    } else {
      this.removeCartItem(key);
      this.setState({
        addCart: true,
      });
    }
  };

  render() {
    const { item, width, showLikes, isBest, isNew, isGift, hash } = this.props;
    const {
      id,
      name,
      price,
      product_line,
      sale_price,
      images,
    } = this.props.item;
    const firstImg = images.slice(1, images.length - 1).split(",")[0];
    const priceNum = Number(price);
    const sale_priceNum = Number(sale_price);
    const { addLike, addCart } = this.state;
    const { handleClickLikes, handleClickCart } = this;

    return (
      <div className="ItemBox" key={id}>
        <div className={addLike ? "showModal" : "displayNone"}>
          <Modal type="like" />
        </div>
        <div className={addCart ? "showModal" : "displayNone"}>
          <Modal type="cart" />
        </div>
        <li>
          <div
            className={
              width === "narrow" ? "frame narrowFrame" : "frame wideFrame"
            }
          >
            <div
              className={showLikes && "like"}
              onClick={() => handleClickLikes(id)}
            >
              <div className={addLike ? "on" : "off"}></div>
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
              src={`https://www.larocheposay.co.kr${firstImg.slice(
                1,
                firstImg.length - 1
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
                to={`detailpage/${item.id}`}
                className="hoverBtn detailView"
              ></Link>
              <div
                className="hoverBtn addCart"
                onClick={() => handleClickCart(id)}
              ></div>
            </div>
          </div>
        </li>
      </div>
    );
  }
}
export default ItemBox;
