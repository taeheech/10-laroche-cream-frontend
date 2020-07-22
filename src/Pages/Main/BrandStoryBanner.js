import React, { Component } from "react";
import "./BrandStoryBanner.scss";

class BrandStoryBanner extends Component {
  constructor() {
    super();
    this.state = {
      storyBox: [
        {
          id: 1,
          hoverImg:
            "https://www.larocheposay.co.kr/images/main/campain_banner_v3_1_on.png",
          img:
            "https://www.larocheposay.co.kr/images/main/campain_banner_v3_1.jpg",
        },
        {
          id: 2,
          hoverImg:
            "https://www.larocheposay.co.kr/images/main/campain_banner_v3_2_on.png",
          img:
            "https://www.larocheposay.co.kr/images/main/campain_banner_v3_2.jpg",
        },
        {
          id: 3,
          hoverImg:
            "https://www.larocheposay.co.kr/images/main/campain_banner_v3_3_on.png",
          img:
            "https://www.larocheposay.co.kr/images/main/campain_banner_v3_3.jpg",
        },
        {
          id: 4,
          hoverImg:
            "https://www.larocheposay.co.kr/images/main/campain_banner_v3_4_on.png",
          img:
            "https://www.larocheposay.co.kr/images/main/campain_banner_v3_4.jpg",
        },
      ],
    };
  }
  render() {
    const { storyBox } = this.state;
    return (
      <div className="BrandStoryFrame">
        <ul className="brandStory">
          {storyBox.map((item) => {
            return (
              <li className="storyItem">
                <img className="storyImage" src={item.img} />
                <img className="storyHoverImage" src={item.hoverImg} />
              </li>
            );
          })}
          <li className="storyRef">
            <span>
              *Euromonitor International Limited - 2019년 소비자가 판매액,
              뷰티&퍼스널 케어 2020 edition 기준
            </span>
          </li>
        </ul>
      </div>
    );
  }
}
export default BrandStoryBanner;
