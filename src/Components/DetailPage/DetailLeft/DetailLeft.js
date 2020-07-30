import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./DetailLeft.scss";

class DetailLeft extends Component {
  render() {
    let splitImages;
    if (this.props.sliderData) {
      splitImages = this.props.sliderData.image;
    }

    console.log(splitImages);

    const settings = {
      customPaging: function (imageUrl) {
        return (
          <div>
            <img
              alt="img22"
              src={`https://www.larocheposay.co.kr${imageUrl}`}
            />
          </div>
        );
      },
      dots: true,
      dotsClass: "slick-dots",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="DetailLeft">
        <Slider {...settings}>
          {this.props.sliderData &&
            this.props.sliderData.image.map((imageUrl) => {
              return (
                <div>
                  <img
                    className="detailSlider"
                    alt="img"
                    src={`https://www.larocheposay.co.kr${imageUrl}`}
                  />
                </div>
              );
            })}
        </Slider>
      </div>
    );
  }
}

export default DetailLeft;
