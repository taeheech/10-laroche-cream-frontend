import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SkinSolution.scss";

class SkinSolution extends Component {
  constructor() {
    super();
    this.state = {
      skinSolution: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/mockdata/data.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          skinSolution: res.skinSolution,
        });
      });
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

    const { skinSolution } = this.state;
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
            {skinSolution.map((item) => {
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
