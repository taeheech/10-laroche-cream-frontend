import React, { Component } from "react";
import "./MomBaby.scss";

class MomBaby extends Component {
  constructor() {
    super();
    this.state = {
      category: [
        {
          title: "피부고민별",
          content: [
            { type: "민감성피부", link: "/" },
            { type: "민감성피부", link: "/" },
            { type: "민감성피부", link: "/" },
            { type: "민감성피부", link: "/" },
            { type: "민감성피부", link: "/" },
            { type: "민감성피부", link: "/" },
            { type: "민감성피부", link: "/" },
            { type: "민감성피부", link: "/" },
            { type: "민감성피부", link: "/" },
            { type: "민감성피부", link: "/" },
          ],
        },
        {
          title: "피부고민별",
          content: [
            { type: "민감성피부", link: "/" },
            { type: "민감성피부", link: "/" },
            { type: "민감성피부", link: "/" },
            { type: "민감성피부", link: "/" },
            { type: "민감성피부", link: "/" },
            { type: "민감성피부", link: "/" },
            { type: "민감성피부", link: "/" },
            { type: "민감성피부", link: "/" },
            { type: "민감성피부", link: "/" },
            { type: "민감성피부", link: "/" },
            { type: "민감성피부", link: "/" },
            { type: "민감성피부", link: "/" },
          ],
        },
        {
          title: "피부고민별",
          content: [
            { type: "민감성피부", link: "/" },
            { type: "민감성피부", link: "/" },
            { type: "민감성피부", link: "/" },
            { type: "민감성피부", link: "/" },
            { type: "민감성피부", link: "/" },
            { type: "민감성피부", link: "/" },
            { type: "민감성피부", link: "/" },
            { type: "민감성피부", link: "/" },
            { type: "민감성피부", link: "/" },
          ],
        },
      ],
    };
  }

  render() {
    return (
      <>
        <div className="MomBaby">
          <div className="HideMenu">
            <div className="menu_Kategorie">
              <div>
                <ul className="menu_list">
                  <li>
                    <a href="/">
                      <div className="menu_top">피부 고민별</div>
                    </a>
                  </li>
                  <li className="menu_list_top">
                    <a href="/">전체</a>
                  </li>
                  <li>
                    <a href="/">민감성 피부</a>
                  </li>
                  <li>
                    <a href="/">지성/트러블 피부</a>
                  </li>
                  <li>
                    <a href="/">손상 피부</a>
                  </li>
                  <li>
                    <a href="/">건조한 피부</a>
                  </li>
                  <li>
                    <a href="/">UV 차단</a>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="menu_list">
                  <li>
                    <a href="/">
                      <div className="menu_top">제품 라인별</div>
                    </a>
                  </li>
                  <li className="menu_list_top">
                    <a href="/">전체</a>
                  </li>
                  <li>
                    <a href="/">시카플라스트</a>
                  </li>
                  <li>
                    <a href="/">똘러리앙</a>
                  </li>
                  <li>
                    <a href="/">리피카</a>
                  </li>
                  <li>
                    <a href="/">안뗼리오스</a>
                  </li>
                  <li>
                    <a href="/">오 떼르말</a>
                  </li>
                  <li>
                    <a href="/">세로징크</a>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="menu_list">
                  <li>
                    <a href="/">
                      <div className="menu_top">사용 단계별</div>
                    </a>
                  </li>
                  <li className="menu_list_top">
                    <a href="/">전체</a>
                  </li>
                  <li>
                    <a href="/">클렌징</a>
                  </li>
                  <li>
                    <a href="/">토너</a>
                  </li>
                  <li>
                    <a href="/">로션/크림</a>
                  </li>
                  <li>
                    <a href="/">UV 차단</a>
                  </li>
                  <li>
                    <a href="/">바디 케어</a>
                  </li>
                  <li>
                    <a href="/">미스트</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="menu_box">
              <div className="menu_box1">
                전체 제품보기
                <div className="arrow"></div>
              </div>
              <div className="menu_box2">
                피부 민감도 자가진단
                <div className="arrow"></div>
              </div>
            </div>

            <div className="menu_img_box">
              <img
                className="menu_img"
                src="https://www.larocheposay.co.kr/upload/product/main/2020/07/20200717_1757028_235_210x210.png"
              />
              <div className="menu_img_text">
                <div className="menu_img_text1">오 떼르말</div>
                <div className="menu_img_text2">
                  온천수미스트 [300ml] +45ml 샘플 증정
                </div>
                <div className="menu_img_text3">22,000원</div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MomBaby;
