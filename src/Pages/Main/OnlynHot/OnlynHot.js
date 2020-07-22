import React, { Component } from "react";
import ItemBox from "../../../Components/Main/ItemBox";
import "./OnlynHot.scss";

class OnlynHot extends Component {
  constructor() {
    super();
    this.state = {
      onlyOneItems: [
        {
          id: "1",
          img:
            "https://www.larocheposay.co.kr/upload/product/main/2020/06/20200630_1641030_694_210x210.png",
          hash: "#피지제거포밍크림",
          name: "에빠끌라",
          desc: "딥 클렌징 포밍 크림",
          price: "22,000",
          prevPrice: "25,000",
        },
        {
          id: "2",
          img:
            "https://www.larocheposay.co.kr/upload/product/main/2020/06/20200630_1641030_694_210x210.png",
          hash: "#피지케어토너",
          name: "에빠끌라",
          desc: "클래리파잉 로션 [병원판매제품]",
          price: "30,000",
          prevPrice: "32,000",
        },
      ],
      hotDealItems: [
        {
          id: "1",
          img:
            "https://www.larocheposay.co.kr/upload/product/main/2020/06/20200630_1641030_694_210x210.png",
          hash: "#피지제거포밍크림",
          name: "에빠끌라",
          desc: "딥 클렌징 포밍 크림",
          price: "22,000",
          prevPrice: "25,000",
        },
      ],
    };
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
