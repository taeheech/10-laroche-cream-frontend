import React, { Component } from "react";
import "./MenuBar.scss";

class MenuBar extends Component {
  render() {
    return (
      <>
        <div className="menu_bar">
          <div className="menu_bar_left">
            <span className="menu_bar_left_list">
              <a href="">
                <span>HOT 아이템</span>
                <em>HOT ITEM</em>
              </a>
              <a href="">
                <span>스킨케어</span>
                <em>FACE</em>
              </a>
              <a href="">
                <span>바디케어</span>
                <em>BODY</em>
              </a>
              <a href="">
                <span>UV 케어</span>
                <em>SUN CREAM</em>
              </a>
              <a href="">
                <span>맘/베이비</span>
                <em>MOM/BABY</em>
              </a>
              <a href="">
                <span>리얼리뷰</span>
                <em>REVIEW</em>
              </a>
            </span>
          </div>
          <div className="menu_bar_right">
            <span>
              <a>이벤트</a>
              <div className="coupon_membership">
                <div className="coupon_icon"></div>
                <a>쿠폰/멤버십</a>
              </div>
            </span>
          </div>
        </div>
      </>
    );
  }
}

export default MenuBar;
