import React, { Component } from "react";
import "./DetailTab.scss";

class DetailTab extends Component {
  state = {
    info: null,
  };

  componentDidMount() {
    fetch("http://10.58.4.80:8000/core/tag/1")
      .then((res) => res.json())
      .then((res) => console.log("res >>> ", res));
    // .then((res) => this.setState({ info: res.data }));
  }

  render() {
    const { info } = this.state;
    console.log("info >>> ", info);
    return (
      <>
        <div className="DetailTab">
          <div className="itemTab ">제품상세정보</div>
          <div className="buyInfo">구매정보</div>
        </div>
        <div className="detailContents">
          {/* {this.state.info.banner.replace(
            "/upload",
            "https://www.larocheposay.co.kr/upload"
          )} */}
          {/* <div className="banner">
            <img src="https://www.larocheposay.co.kr/upload/product/main/2019/02/20200713_1810013_111.jpg" />
          </div> */}
          {/* {info &&
            console.log(
              info.banner.replace(
                "/upload",
                "https://www.larocheposay.co.kr/upload"
              )
            )} */}
          <div className="detailView">
            <img src="https://www.larocheposay.co.kr/upload/editor//product/editor/201907/20190722101745072740.jpg" />
          </div>
        </div>
        <div className="detailMid">
          <img src="https://www.larocheposay.co.kr/upload/product/main/2019/06/20200713_1810013_107.jpg" />
          <div className="detailMidBox">
            <p className="midBoxOne">유럽 NO.1</p>
            <p className="midBoxTwo"> - 트러플 케어 에센스 (미백 기능성)</p>
            <p className="midBoxThr"> - 각질 용해 및 막힌 모공 케어</p>
            <p className="midBoxThr"> - 트러블 케어</p>
            <p className="midBoxThr"> - 다크스팟 케어</p>
            <p className="midBoxFour">
              *에빠끌라 라인 중 10개국 대상 2017년도 판매 기준
            </p>
            <p className="midBoxFiv">듀오[+] 에센스 트리플 세트] 구성</p>
            <p className="midBoxFiv">에빠끌라 듀오[+] 에센스 40ml 본품 * 3개</p>
          </div>
        </div>
        <div class="detailPoint">
          <h3 class="PointHead">피부 고민 포인트</h3>
          <ul className="PointList">
            <li className="firstList">
              <img
                alt=""
                src="https://www.larocheposay.co.kr/upload/subset/2018/08/20180806_1417015_001.png"
              />
              <p>민감하고 연약한 피부</p>
            </li>
            <li>
              <img
                alt=""
                src="https://www.larocheposay.co.kr/upload/subset/2018/08/20180806_1422039_017.png"
              />
              <p>진정(수딩)이 필요한 피부</p>
            </li>
            <li>
              <img
                alt=""
                src="https://www.larocheposay.co.kr/upload/subset/2018/08/20180806_1424005_021.png"
              />
              <p>트러블성 피부</p>
            </li>
          </ul>
        </div>
        <div className="research">
          <h3 class="researchHead">민감피부 연구소</h3>
          <div>
            <img
              alt=""
              src="https://www.larocheposay.co.kr/upload/editor//product/editor/201808/20180821033621061110.jpg"
            />
          </div>
        </div>
        <div className="detailMedia">
          <h3 class="mediaHead">미디어에 나온 라로슈포제</h3>
          <div className="mediaList">
            <div>
              <img src="https://www.larocheposay.co.kr/upload/product/main/2018/08/20200713_1810013_110.jpg" />
              <div className="mediaText">
                파우더룸 히트 아이템 선정 에센스 1위 <div>2018년 6월</div>
              </div>
            </div>
            <div>
              <img src="https://www.larocheposay.co.kr/upload/product/main/2018/08/20200713_1810013_113.jpg" />
              <div className="mediaText">
                국민일보 컨슈머리포트{" "}
                <div>여름철 꼭 필요한 모공 에센스 1위</div>{" "}
                <div>2018년 6월</div>
              </div>
            </div>
            <div>
              <img src="https://www.larocheposay.co.kr/upload/product/main/2018/08/20200713_1810013_117.jpg" />
              <div className="mediaText">
                <div>얼루어 EDITOR’S PICK</div> <div> 2018년 6월</div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default DetailTab;
