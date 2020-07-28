import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./FloatBar.scss";

class FloatBar extends Component {
  constructor() {
    super();
    this.state = {
      floatProducts: [],
      likedProducts: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/mockdata/data.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          floatProducts: res.data,
          likedProducts: res.likeItemTable, // db에 있는 찜목록
        });
      });
  }

  goToTop = () => {
    window.scrollTo(0, 0);
  };

  render() {
    const { goToTop } = this;
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrow: true,
    };
    const { floatProducts } = this.state;
    const { likedProducts } = this.state;
    return (
      <div className="FloatBar">
        <div className="floatContainer">
          <div className="floatGreeting">
            <strong>
              <em>user</em>님
            </strong>
            <p>반갑습니다</p>
          </div>
          <div className="icon">
            <div className="floatCart">
              <p className="count">1</p>
            </div>
          </div>
          <div className="icon">
            <div className="floatLike">
              <p className="count">{likedProducts.length}</p>
            </div>
          </div>
          <div className="floatProduct">
            <Slider {...settings}>
              {floatProducts.map((item, idx) => {
                return (
                  <img
                    key={idx}
                    className="itemImg"
                    alt={item.desc}
                    src={item.img}
                  />
                );
              })}
            </Slider>
          </div>
          <div className="goToTop" onClick={goToTop}>
            TOP ↑
          </div>
        </div>
      </div>
    );
  }
}
export default FloatBar;
