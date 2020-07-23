import React, { Component } from "react";
import "./Skin.scss";

class Skin extends Component {
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
        <div className="Skin">
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
                  <li>
                    <a href="/">톤업/메이크업</a>
                  </li>
                  <li>
                    <a href="/">탄력</a>
                  </li>
                  <li>
                    <a href="/">주름</a>
                  </li>
                  <li>
                    <a href="/">브라이트닝</a>
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
                    <a href="/">에빠끌라</a>
                  </li>
                  <li>
                    <a href="/">시카플라스트</a>
                  </li>
                  <li>
                    <a href="/">똘러리랑</a>
                  </li>
                  <li>
                    <a href="/">히알루 B5</a>
                  </li>
                  <li>
                    <a href="/">유비데아</a>
                  </li>
                  <li>
                    <a href="/">퓨어비타민C10</a>
                  </li>
                  <li>
                    <a href="/">안뗼리오스</a>
                  </li>
                  <li>
                    <a href="/">세로징크</a>
                  </li>
                  <li>
                    <a href="/">오 떼르말</a>
                  </li>
                  <li>
                    <a href="/">미셀라 클렌징 워터</a>
                  </li>
                  <li>
                    <a href="/">리더믹</a>
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
                    <a href="/">세럼/에센스</a>
                  </li>
                  <li>
                    <a href="/">로션/크림</a>
                  </li>
                  <li>
                    <a href="/">마스크/팩</a>
                  </li>
                  <li>
                    <a href="/">UV차단</a>
                  </li>
                  <li>
                    <a href="/">BB/파운데이션</a>
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
                src="https://www.larocheposay.co.kr/upload/product/main/2020/07/20200716_1728008_212_210x210.png"
              />
              <div className="menu_img_text">
                <div className="menu_img_text1">에빠끌라</div>
                <div className="menu_img_text2">듀오[+]에센스+샘플2종증정</div>
                <div className="menu_img_text3">25,000원</div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Skin;
