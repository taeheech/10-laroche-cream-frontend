import React, { Component } from "react";
import "./TopBar.scss";

class TopBar extends Component {
  render() {
    return (
      <nav>
        <img
          className="navLogo"
          onClick=""
          src="https://www.larocheposay.co.kr/images/common/logo.png?1"
        ></img>
        <ul className="topNav">
          <li>
            <a href="">로그인</a>
          </li>
          <li>
            <a href="">회원가입</a>
          </li>
          <li>
            <a href="">주문/배송조회</a>
          </li>
          <li>
            <a href="" className="topNavEnd">
              고객케어센터
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default TopBar;
