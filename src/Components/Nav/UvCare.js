import React, { Component } from "react";
import "./UvCare.scss";

class UvCare extends Component {
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
        <div className="UvCare">
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
                    <a href="/">건조한 피부</a>
                  </li>
                  <li>
                    <a href="/">UV 차단</a>
                  </li>
                  <li>
                    <a href="/">톤업/메이크업</a>
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
                    <a href="/">똘러리앙</a>
                  </li>
                  <li>
                    <a href="/">안뗄리오스</a>
                  </li>
                  <li>
                    <a href="/">유비데아</a>
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
                    <a href="/">UV차단</a>
                  </li>
                  <li>
                    <a href="/">로션/크림</a>
                  </li>
                  <li>
                    <a href="/">BB/파운데이션</a>
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
                src="https://www.larocheposay.co.kr/upload/site/gnb/2020/07/20200720_1002051_237.jpg"
              />
              <div className="menu_img_text">
                <div className="menu_img_text1">유비데아</div>
                <div className="menu_img_text2">XL 틴티드 크림[톤보정]</div>
                <div className="menu_img_text3">32,000원</div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default UvCare;
