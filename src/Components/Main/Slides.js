import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slides.scss";

class Slides extends Component {
  render() {
    const settings = {
      dots: this.props.dots,
      infinite: true,
      speed: 500,
      slidesToShow: this.props.slidesToShow,
      slidesToScroll: this.props.slidesToScroll,
      arrow: true,
    };
    const { slideList } = this.props;
    return (
      <div className="Slides">
        <Slider {...settings}>
          {slideList.map((item, idx) => {
            return (
              <div className="slideList" key={idx}>
                <div className="slideItemBox">
                  <img className="itemImg" alt="" src={item.img} />
                  <p className="itemDesc">{item.desc}</p>
                  <p className="itemPrice">
                    {item.price}
                    <span>원</span>
                  </p>
                  <p className="prevPrice">{item.prevPrice}</p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
export default Slides;
