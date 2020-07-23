import React, { Component } from "react";
import ItemBox from "../../../Components/Main/ItemBox";
import "./OnlynHot.scss";

class OnlynHot extends Component {
  constructor() {
    super();
    this.state = {
      onlyOneItems: [],
      hotDealItems: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/mockdata/data.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          onlyOneItems: res.onlyOneItems,
          hotDealItems: res.hotDealItems,
        });
      });
  }

  render() {
    const { onlyOneItems, hotDealItems } = this.state;
    return (
      <div className="OnlynHot">
        <div className="OnlynHotList">
          <div className="title">
            <i className="mainTitle">ONLY ONE</i>
            <p class="subTitle">오직 공식몰에만 있다, 라로슈포제 추천템!</p>
          </div>
          <ul className="flexList">
            {onlyOneItems.map((item) => {
              return (
                <li>
                  <ItemBox item={item} />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="OnlynHotList">
          <div className="title">
            <i className="mainTitle">HOT DEAL</i>
            <p class="subTitle">이건 사야해, 라로슈포제 세일템!</p>
          </div>
          <ul className="flexList">
            {hotDealItems.map((item) => {
              return (
                <li>
                  <ItemBox item={item} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
export default OnlynHot;
