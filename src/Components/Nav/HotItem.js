import React, { Component } from "react";
import "./HotItem.scss";

class HotItem extends Component {
  render() {
    return (
      <div className="HotItem">
        <div className="hideMenu">
          <div>
            <ul className="menuList">
              <li>
                <a>베스트</a>
              </li>
              <li>
                <a>단독구성</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default HotItem;
