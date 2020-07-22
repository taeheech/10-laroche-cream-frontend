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
          text: "민감 피부 케어",
        },
        {
          id: 3,
          text: "외부 환경으로 자극받은 피부 케어",
        },
        {
          id: 4,
          text: "UV케어",
        },
        {
          id: 5,
          text: "민감 피부 탄력 & \n 주름* 케어",
        },
      ],
    };
  }

  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 2,
      arrow: true,
      customPaging: () => <div>☐</div>,
    };

    const { solution } = this.state;
    return (
      <div className="SkinSolution">
        <h1 className="skinSolutionTitle">
          SKIN SOLUTION
          <p class="skinSolutionSubTitle">
            피부 고민 별 추천하는 민감 피부 솔루션 제안
          </p>
        </h1>
        <div className="solutionList">
          <Slider {...settings}>
            {solution.map((item) => {
              return (
                <div className="solutionItemBox">
                  <img
                    alt=""
                    className="solutionImages"
                    src={`https://www.larocheposay.co.kr/images/main/bg_branding0${item.id}.png`}
                  />
                  <div className="hoverItems">
                    <hr />
                    <p className="solutionText">{item.text}</p>
                    <hr />
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    );
  }
}
export default SkinSolution;
