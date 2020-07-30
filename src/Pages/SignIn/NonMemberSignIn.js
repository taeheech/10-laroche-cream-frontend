import React, { Component } from "react";
import "./NonMemberSignIn.scss";

class NonMemberSignIn extends Component {
  render() {
    return (
      <div className="NonMemberSignIn">
        <div>
          <div className="orderInfo">
            <div className="input">
              <input className="orderNum" type="text" placeholder="주문번호" />
              <input className="order" type="text" placeholder="주문자명" />
              <button className="track">주문조회</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default NonMemberSignIn;
