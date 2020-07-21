import React, { Component } from "react";
import "./LogoBar.scss";

class LogoBar extends Component {
  render() {
    return (
      <>
        <div className="nav_input">
          <div className="nav_right">
            <input
              type="search"
              placeholder="데일리 트러블 애프터캐어 단독구성"
              maxLength="20"
            />
            <div className="magnifier"></div>
            <div className="cart"> </div>
          </div>
        </div>
        <div className="nav_logo_text">
          <div className="nav_left">
            <div className="nav_left_logo"></div>
            <a className="nav_left_text">
              민감성 피부의 삶을 바꾸는 라로슈포제
            </a>
          </div>
          <marquee className="hashtag_box" width="290px" scrollamount="3">
            <a className="hash_tag">#최대25%즉시할인</a>
            <a className="hash_tag">#16,000원 상당 BEST 샘플증정!</a>
            <a className="hash_tag">#마일리지 3배증정</a>
            <a className="hash_tag">#7월 신규회원님 시카밤5일케어증정</a>
          </marquee>
        </div>
      </>
    );
  }
}

export default LogoBar;
