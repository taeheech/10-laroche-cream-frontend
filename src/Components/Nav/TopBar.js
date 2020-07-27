import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./TopBar.scss";

class TopBar extends Component {
  render() {
    return (
      <nav>
        <Link to="/">
          <img
            alt=""
            className="navLogo"
            onClick=""
            src="https://www.larocheposay.co.kr/images/common/logo.png?1"
          ></img>
        </Link>
        <ul className="topNav">
          <li>
            <Link to="">로그인</Link>
          </li>
          <li>
            <Link to="/signup">회원가입</Link>
          </li>
          <li>
            <Link to="">주문/배송조회</Link>
          </li>
          <li>
            <Link to="">className="topNavEnd">
              고객케어센터
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default TopBar;
