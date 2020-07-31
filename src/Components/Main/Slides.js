import React, { Component } from "react";
import Slider from "react-slick";
import ItemBox from "./ItemBox";
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
    return (
      <div className="Slides">
        <Slider {...settings}>
          {this.props.slideList.map((item, idx) => {
            const product = item.product;
            const hash = product.hash_tag.split(",");
            return (
              <ItemBox
                item={item}
                key={idx}
                product_line={item.productLine}
                name={item.name}
                width={"wide"}
                price={product.price}
                productLine={product.product_line}
                discountPrice={product.sale_price}
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
