import React, { Component } from "react";
import "./Modal.scss";

class Modal extends Component {
  render() {
    const { type } = this.props;
    const like = type === "like";
    return (
      <div className={like ? "likeModal" : "cartModal"}>
        <div className={like ? "likeImg" : "cartImg"} />
        <div className={like ? "likeText" : "cartText"}>
          <p>선택하신 제품을</p>
          <p className={like ? "displayNone" : "on"}>장바구니에 담았습니다</p>
          <p className={like ? "on" : "displayNone"}>찜 목록에 담았습니다</p>
        </div>
      </div>
    );
  }
}
export default Modal;
