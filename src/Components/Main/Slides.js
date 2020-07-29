import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slides.scss";
import ItemBox from "./ItemBox";

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
    return (
      <div className="Slides">
        <Slider {...settings}>
          {this.props.slideList.map((item, idx) => {
            const hash = item.product.hash_tag.split(",");
            return (
              <ItemBox
                item={item}
                key={idx}
                product_line={item.product_line}
                name={item.name}
                width={"wide"}
                hash={hash}
                isSale={item.sale}
              />
            );
          })}
        </Slider>
      </div>
    );
  }
}
export default Slides;
