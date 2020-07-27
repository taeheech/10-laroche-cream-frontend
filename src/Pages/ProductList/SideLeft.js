import React, { Component } from "react";

import "./SideLeft.scss";

class SideLeft extends Component {
  constructor() {
    super();
    this.state = {
      sideBarMenu: [],
      stage: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/mockdata/data.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          sideBarMenu: res.sideBarMenu,
          stage: res.stage,
        });
      });
  }

  render() {
    const { sideBarMenu, stage } = this.state;

    return (
      <div className="SideLeft">
        <div className="sideCateTitle">FACE</div>
        <ul className="sideCateList">
          {sideBarMenu.map((category, idx) => {
            return (
              <li key={idx} className="sideCateItem">
                <h2> {category.title} </h2>
                {category.list.map((item) => {
                  return <p>- {item.id}</p>;
                })}
              </li>
            );
          })}
        </ul>
        <div className="sideCateTitle">
          FILTER
          <button></button>
        </div>
        <ul className="sideCateList">
          <div className="filterTitle">사용 단계 별</div>
          {stage.map((item) => {
            return (
              <label className="filter">
                <input type="checkbox" id="cleansing" />
                {item.id}
              </label>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default SideLeft;
