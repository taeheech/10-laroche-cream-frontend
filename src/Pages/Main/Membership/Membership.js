import React, { Component } from "react";
import "./Membership.scss";

class Memebership extends Component {
  render() {
    return (
      <div className="Membership">
        <div className="left">
          <div className="membershipLogo"></div>
          <p className="condition">LA ROCHE-POSAY</p>
          <p className="detail">라로슈포제 멤버십 혜택 →</p>
        </div>
        <div className="right">
          <ul className="rightFlex">
            <li className="membershipBox">
              <div className="membershipImg join"></div>
              <p className="condition">회원가입 완료 시</p>
              <p className="detail">15% 할인쿠폰 + 무료배송</p>
            </li>
            <vr />
            <li className="membershipBox">
              <div className="membershipImg firstBuy"></div>
              <p className="condition">첫 구매 확정 시</p>
              <p className="detail">10,000원 할인쿠폰</p>
            </li>
            <li className="membershipBox">
              <div className="membershipImg birthdayImg"></div>
              <p className="condition">생일 축하 기념</p>
              <p className="detail">5,000원 할인쿠폰</p>
            </li>
            <li className="membershipBox lastBox">
              <div className="membershipImg confirmPurchaseImg"></div>
              <p className="condition">구매 확정 시</p>
              <p className="detail">등급별 3~10% 적립</p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Memebership;
