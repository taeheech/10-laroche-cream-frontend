import React, { Component } from "react";
import "./LogoBar.scss";

class LogoBar extends Component {
  render() {
    return (
      <>
        <div className="navInput">
          <div className="navRight">
            <input
              type="search"
              placeholder="데일리 트러블 애프터캐어 단독구성"
              maxLength="20"
            />
            <div className="magnifier"></div>
            <div className="cart"> </div>
          </div>
        </div>
        <div className="navLogoText">
          <div className="navLeft">
            <div className="navLeftLogo"></div>
            <a>민감성 피부의 삶을 바꾸는 라로슈포제</a>
          </div>
          <marquee width="290px" scrollamount="3">
            <a className="hashTag">#최대25%즉시할인</a>
            <a className="hashTag">#16,000원 상당 BEST 샘플증정!</a>
            <a className="hashTag">#마일리지 3배증정</a>
            <a className="hashTag">#7월 신규회원님 시카밤5일케어증정</a>
          </marquee>
        </div>
      </>
    );
  }
}

export default LogoBar;
