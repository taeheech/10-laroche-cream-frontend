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
    this.showOnlynHot();
  }

  showOnlynHot = () => {
    fetch("http://10.58.4.187:8000/product/allitem")
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          onlyOneItems: res.data.slice(1, 3),
          hotDealItems: res.data.slice(8, 9),
        })
      );
  };

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
            {onlyOneItems.map((item, idx) => {
              const product = item.product;
              const hash = product.hash_tag.split(",");
              return (
                <>
                  <ItemBox
                    key={idx}
                    item={item}
                    width={"narrow"}
                    hash={hash}
                    isGift={item.gift}
                    isSale={item.sale}
                  />
                </>
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
            {hotDealItems.map((item, idx) => {
              const product = item.product;
              const hash = product.hash_tag.split(",");
              return (
                <>
                  <ItemBox
                    key={idx}
                    item={item}
                    width={"narrow"}
                    hash={hash}
                    isGift={item.gift}
                    isSale={item.sale}
                  />
                </>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
export default OnlynHot;
