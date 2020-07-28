import React, { Component } from "react";
import Slides from "../../../Components/Main/Slides";
import "./Discount.scss";

class Discount extends Component {
  constructor() {
    super();
    this.state = {
      discountList: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/mockdata/mockupdata.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          discountList: res.data,
        });
      });
  }

  render() {
    const result = this.state.discountList.filter((item) => item.sale === true);
    return (
      <div className="Discount">
        <h1 className="discountTitle">공식몰만의 할인구성</h1>
        <div className="discountList">
          <Slides
            slideList={result}
            settings={this.state.settings}
            dots={false}
            slidesToShow={4}
            slidesToScroll={4}
          />
        </div>
      </div>
    );
  }
}
export default Discount;
