import React, { Component } from "react";
import "./Modal.scss";

class Modal extends Component {
  render() {
    return (
      <div className="Modal">
        <div className="alertImg"></div>
        <div className="alertText">
          <p>선택하신 제품을</p>
          <p>찜 목록에 담았습니다</p>
        </div>
      </div>
    );
  }
}
export default Modal;
