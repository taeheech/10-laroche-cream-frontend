import React, { Component } from "react";
import Slider from "react-slick";
import ItemBox from "../../../Components/Main/ItemBox";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./BestSeller.scss";

class BestSeller extends Component {
  constructor() {
    super();
    this.state = {
      itemList: [
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
        {
          id: "3",
          img:
            "https://www.larocheposay.co.kr/upload/product/main/2020/06/20200630_1641030_694_210x210.png",
          hash: "#피지케어크림",
          name: "에빠끌라",
          desc: "MAT 세보 컨트롤링 모이스춰라이저",
          price: "29,000",
          prevPrice: "33,000",
        },
        {
          id: "4",
          img:
            "https://www.larocheposay.co.kr/upload/product/main/2020/06/20200630_1641030_694_210x210.png",
          hash: "#미세미세클렌저",
          name: "똘러리앙",
          desc: "퓨리파잉 포밍 크림",
          price: "25,000",
          prevPrice: "28,000",
        },
        {
          id: "5",
          img:
            "https://www.larocheposay.co.kr/upload/product/main/2020/06/20200630_1641030_694_210x210.png",
          hash: "#피지제거포밍크림",
          name: "에빠끌라",
          desc: "딥 클렌징 포밍 크림",
          price: "22,000",
          prevPrice: "25,000",
        },
        {
          id: "6",
          img:
            "https://www.larocheposay.co.kr/upload/product/main/2020/06/20200630_1641030_694_210x210.png",
          hash: "#피지케어토너",
          name: "에빠끌라",
          desc: "클래리파잉 로션 [병원판매제품]",
          price: "30,000",
          prevPrice: "35,000",
        },
        {
          id: "7",
          img:
            "https://www.larocheposay.co.kr/upload/product/main/2020/06/20200630_1641030_694_210x210.png",
          hash: "#피지케어크림",
          name: "에빠끌라",
          desc: "MAT 세보 컨트롤링 모이스춰라이저",
          price: "29,000",
          prevPrice: "34,000",
        },
        {
          id: "8",
          img:
            "https://www.larocheposay.co.kr/upload/product/main/2020/06/20200630_1641030_694_210x210.png",
          hash: "#미세미세클렌저",
          name: "똘러리앙",
          desc: "퓨리파잉 포밍 크림",
          price: "25,000",
          prevPrice: "29,000",
        },
      ],
    };
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      arrow: true,
      customPaging: () => <div>☐</div>,
    };

    const { itemList } = this.state;

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
            {itemList.map((item) => {
              return <ItemBox item={item} />;
            })}
          </Slider>
        </div>
      </div>
    );
  }
}

export default BestSeller;
