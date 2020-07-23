import React, { Component } from "react";
import "./HotItem.scss";

class HotItem extends Component {
  constructor() {
    super();
    this.state = {
      category: [
        {
          title: "피부고민별",
          content: [
            { type: "민감성피부", link: "/" },
            { type: "민감성피부", link: "/" },
            { type: "민감성피부", link: "/" },
            { type: "민감성피부", link: "/" },
            { type: "민감성피부", link: "/" },
            { type: "민감성피부", link: "/" },
            { type: "민감성피부", link: "/" },
            { type: "민감성피부", link: "/" },
            { type: "민감성피부", link: "/" },
            { type: "민감성피부", link: "/" },
          ],
        },
        {
          title: "피부고민별",
          content: [
            { type: "민감성피부", link: "/" },
            { type: "민감성피부", link: "/" },
            { type: "민감성피부", link: "/" },
            { type: "민감성피부", link: "/" },
            { type: "민감성피부", link: "/" },
            { type: "민감성피부", link: "/" },
            { type: "민감성피부", link: "/" },
            { type: "민감성피부", link: "/" },
            { type: "민감성피부", link: "/" },
            { type: "민감성피부", link: "/" },
            { type: "민감성피부", link: "/" },
            { type: "민감성피부", link: "/" },
          ],
        },
        {
          title: "피부고민별",
          content: [
            { type: "민감성피부", link: "/" },
            { type: "민감성피부", link: "/" },
            { type: "민감성피부", link: "/" },
            { type: "민감성피부", link: "/" },
            { type: "민감성피부", link: "/" },
            { type: "민감성피부", link: "/" },
            { type: "민감성피부", link: "/" },
            { type: "민감성피부", link: "/" },
            { type: "민감성피부", link: "/" },
          ],
        },
      ],
    };
  }

  render() {
    return (
      <>
        <div className="HotItem">
          <div className="HideMenu">
            <div>
              <ul className="menu_list">
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
      </>
    );
  }
}

export default HotItem;
