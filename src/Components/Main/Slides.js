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
    const { itemList } = this.props;
    return (
      <Slider {...settings}>
        {itemList.map((item) => {
          return (
            <div className="itemList">
              <div className="slideItemBox">
                <img className="itemImg" alt="" src={item.img} />
                <p className="itemDesc">{item.desc}</p>
                <p className="itemPrice">{item.price}</p>
                <p className="prevPrice">{item.prevPrice}</p>
              </div>
            </div>
          );
        })}
      </Slider>
    );
  }
}
export default Slides;
