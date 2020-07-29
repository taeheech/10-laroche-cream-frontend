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
    this.showBestSeller();
  }

  showBestSeller = () => {
    fetch("http://10.58.4.187:8000/product/allitem")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          bestSeller: res.data
            .filter((item) => item.best === true)
            .slice(0, 12),
        });
      });
  };

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
            {bestSeller.map((item, idx) => {
              const product = item.product;
              const hash = product.hash_tag.split(",");
              console.log(hash[0]);
              return (
                <>
                  <ItemBox
                    key={idx}
                    item={item}
                    width="narrow"
                    hash={hash}
                    showLikes={false}
                    isGift={item.gift}
                    isSale={item.sale}
                  />
                </>
              );
            })}
          </Slider>
        </div>
      </div>
    );
  }
}

export default BestSeller;
