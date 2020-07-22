import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SkinSolution.scss";

class SkinSolution extends Component {
  constructor() {
    super();
    this.state = {
      solution: [
        {
          id: 1,
          text: "트러블* 케어",
        },
        {
          id: 2,
          text: "민감피부 케어",
        },
        {
          id: 3,
          text: `외부환경으로 \n 자극 받은 피부케어`,
        },
        {
          id: 4,
          text: "UV케어",
        },
        {
          id: 5,
          text: "민감피부 탄력 & \n 주름* 케어",
        },
      ],
    };
  }

  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 2,
      arrow: true,
    };

    const { solution } = this.state;
    return (
      <div className="SkinSolution">
        <div className="solutionList">
          <Slider {...settings}>
            {solution.map((item) => {
              return (
                <div className="solutionItemBox">
                  <img
                    className="solutionImages"
                    src={`https://www.larocheposay.co.kr/images/main/bg_branding0${item.id}.png`}
                  />
                  <div class="hoverItems">
                    <p class="solutionText">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </Slider>
          <button
            type="button"
            data-role="none"
            class="slick-arrow slick-prev slick-disabled"
          >
            Previous
          </button>
          <button type="button" data-role="none" class="slick-arrow slick-next">
            Next
          </button>
        </div>
      </div>
    );
  }
}
export default SkinSolution;
