import React, { Component } from "react";

import "./SideLeft.scss";

class SideLeft extends Component {
  constructor() {
    super();
    this.state = {
      sideBarMenu: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/mockdata/data.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          sideBarMenu: res.sideBarMenu,
        });
      });
  }

  render() {
    const { sideBarMenu } = this.state;
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
          <li className="filter">
            <input type="checkbox" id="cleansing"></input>
            <label htmlFor="cleansing">클렌징</label>
          </li>
          <li className="filter">
            <input type="checkbox" id="toner"></input>
            <label htmlFor="toner">토너</label>
          </li>
          <li className="filter">
            <input type="checkbox" id="essence"></input>
            <label htmlFor="essence">세럼/에센스</label>
          </li>
          <li className="filter">
            <input type="checkbox" id="cream"></input>
            <label htmlFor="cream">로션/크림</label>
          </li>
          <li className="filter">
            <input type="checkbox" id="mask"></input>
            <label htmlFor="mask">마스크/팩</label>
          </li>
          <li className="filter">
            <input type="checkbox" id="uv"></input>
            <label htmlFor="uv">UV차단</label>
          </li>
          <li className="filter">
            <input type="checkbox" id="bb"></input>
            <label htmlFor="bb">BB/파운데이션</label>
          </li>
          <li className="filter">
            <input type="checkbox" id="mist"></input>
            <label htmlFor="mist">미스트</label>
          </li>
        </ul>
      </div>
    );
  }
}

export default SideLeft;
