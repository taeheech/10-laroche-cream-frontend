import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TopSlideBar.scss";

class TopSlideBar extends Component {
  constructor() {
    super();
    this.state = {
      images: [
        {
          id: 1,
          name: "img1",
          img:
            "https://www.larocheposay.co.kr/upload/site/main/2020/07/20200714_1612041_146.jpg",
        },
        {
          id: 2,
          name: "img2",
          img:
            "https://www.larocheposay.co.kr/upload/site/main/2020/02/20200225_1840003_152.jpg",
        },
        {
          id: 3,
          name: "img3",
          img:
            "https://www.larocheposay.co.kr/upload/site/main/2020/02/20200225_1841014_156.jpg",
        },
        {
          id: 4,
          name: "img4",
          img:
            "https://www.larocheposay.co.kr/upload/site/main/2020/07/20200720_1429049_268.jpg",
        },
        {
          id: 5,
          name: "img5",
          img:
            "https://www.larocheposay.co.kr/upload/site/main/2020/06/20200629_1039052_486.jpg",
        },
        {
          id: 6,
          name: "img6",
          img:
            "https://www.larocheposay.co.kr/upload/site/main/2020/02/20200225_1840027_154.jpg",
        },
      ],
    };
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      // autoplay: true,
      // autoplaySpeed: 2000,
      arrow: true,
      customPaging: () => <div>☐</div>,
    };
    const { images } = this.state;
    return (
      <div className="TopSlideBar">
        <Slider {...settings}>
          {images.map((item) => {
            return <div className={item.name} />;
          })}
        </Slider>
      </div>
    );
  }
}
export default TopSlideBar;
