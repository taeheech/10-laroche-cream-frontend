import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./BestSeller.scss";
import ItemBox from "../../../Components/Main/ItemBox";

class BestSeller extends Component {
  constructor() {
    super();
    this.state = {
      bestSeller: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/mockdata/data.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          bestSeller: res.data,
        });
      });
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      arrow: true,
      customPaging: () => (
        <div>
          <span>🀫</span>
        </div>
      ),
    };

    const { bestSeller } = this.state;

    return (
      <div className="BestSeller">
        <h1 className="bestSellerTitle">
          BEST SELLER
          <p class="bestSellerSubTitle">
            오늘의 베스트! 실시간 가장 HOT한 제품
          </p>
        </h1>
        <span className="seeMore">MORE →</span>
        <div className="bestSellerList">
          <Slider {...settings}>
            {bestSeller.map((item) => {
              return <ItemBox item={item} />;
            })}
          </Slider>
        </div>
      </div>
    );
  }
}

export default BestSeller;
