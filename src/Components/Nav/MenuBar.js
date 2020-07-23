import React, { Component } from "react";
import Skin from "./Skin";
import Body from "./Body";
import UvCare from "./UvCare";
import MomBaby from "./MomBaby";
import HotItem from "./HotItem";
import "./MenuBar.scss";

const arr = [
  { 1: <Skin /> },
  { 2: <Body /> },
  { 3: <UvCare /> },
  { 4: <MomBaby /> },
  { 5: <HotItem /> },
];

class MenuBar extends Component {
  constructor() {
    super();
    this.state = {
      check: false,
      currentNavMenu: 0,
    };
  }
  handleCheck = () => {
    const { check } = this.state;
    this.setState({
      check: !check,
    });
  };

  setCurrentIdx = (idx) => {
    this.setState({ currentNavMenu: idx });
  };

  render() {
    const { check, currentNavMenu } = this.state;

    return (
      <>
        <div
          className="menu_bar"
          // onMouseEnter={this.handleCheck}
          // onMouseLeave={this.handleCheck}
        >
          <div className="menu_bar_main">
            <span className="menu_bar_left_list">
              <a
                href="/"
                onMouseEnter={() => this.setCurrentIdx(5)}
                onMouseLeave={() => this.setCurrentIdx(0)}
              >
                <span
                  className="hot_item"
                  className={currentNavMenu === 5 ? "blue" : "black"}
                >
                  {currentNavMenu === 5 ? "HOT ITEM" : "HOT 아이템"}
                </span>

                {this.state.currentNavMenu === 5 && <HotItem />}
              </a>
              <a
                href="/"
                onMouseEnter={() => this.setCurrentIdx(1)}
                onMouseLeave={() => this.setCurrentIdx(0)}
              >
                <span
                  className={this.state.currentNavMenu === 1 ? "blue" : "black"}
                >
                  {currentNavMenu === 1 ? "FACE" : "스킨케어"}
                </span>

                {this.state.currentNavMenu === 1 && <Skin />}
              </a>
              <a
                href=""
                onMouseEnter={() => this.setCurrentIdx(2)}
                onMouseLeave={() => this.setCurrentIdx(0)}
              >
                <span className={currentNavMenu === 2 ? "blue" : "black"}>
                  {currentNavMenu === 2 ? "BODY" : "바디케어"}
                </span>

                {this.state.currentNavMenu === 2 && <Body />}
              </a>
              <a
                href=""
                onMouseEnter={() => this.setCurrentIdx(3)}
                onMouseLeave={() => this.setCurrentIdx(0)}
              >
                <span className={currentNavMenu === 3 ? "blue" : "black"}>
                  {currentNavMenu === 3 ? "SUN CARE" : "UV 케어"}
                </span>

                {currentNavMenu === 3 && <UvCare />}
              </a>
              <a
                href=""
                onMouseEnter={() => this.setCurrentIdx(4)}
                onMouseLeave={() => this.setCurrentIdx(0)}
              >
                <span className={currentNavMenu === 4 ? "blue" : "black"}>
                  {currentNavMenu === 4 ? "MOM/BABY" : "맘/베이비"}
                </span>

                {currentNavMenu === 4 && <MomBaby />}
              </a>
              <a href="">
                <span>리얼리뷰</span>
              </a>
            </span>
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
        </div>
      </>
    );
  }
}

export default MenuBar;
