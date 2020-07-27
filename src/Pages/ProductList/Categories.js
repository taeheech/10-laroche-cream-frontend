import React, { Component } from "react";
import "./Categories.scss";

class Categories extends Component {
  constructor() {
    super();
    this.state = {
      categoryData: [
        {
          title: "FACE",
          list: [
            { id: "FACE" },
            { id: "BODY" },
            { id: "SUN CARE" },
            { id: "MOM/BABY" },
          ],
        },
        {
          title: "피부 고민별",
          list: [
            { id: "피부 고민별" },
            { id: "제품 라인별" },
            { id: "사용 단계별" },
          ],
        },
        {
          title: "전체",
          list: [
            { id: "전체보기" },
            { id: "민감성 피부" },
            { id: "지성/트러블 피부" },
            { id: "손상 피부" },
            { id: "건조한 피부" },
            { id: "UV 차단" },
            { id: "톤업/메이크업" },
            { id: "탄력" },
            { id: "주름" },
            { id: "브라이트닝" },
          ],
        },
      ],
      isClicked: false,
    };
  }

  handleClickEvent = () => {
    this.setState({
      isClicked: !this.state.isClicked,
    });
  };

  render() {
    const { categoryData, isClicked } = this.state;
    const { handleClickEvent } = this;
    return (
      <div className="Categories">
        <section>
          <nav>
            <ol className="totalCate">
              <li className="Cate">
                <div className="cateTitle">
                  <div href="/">
                    <i>HOME</i>
                  </div>
                </div>
              </li>
              {categoryData.map((category, idx) => {
                return (
                  <li className="Cate">
                    <div className="cateTitle">
                      <a onClick={handleClickEvent}>
                        <i>{category.title}</i>
                        <span>▲</span>
                      </a>
                    </div>
                    <ul key={idx} className={isClicked ? "on" : "displayNone"}>
                      {category.list.map((item) => {
                        return (
                          <a href="/">
                            <li>{item.id}</li>
                          </a>
                        );
                      })}
                    </ul>
                  </li>
                );
              })}
            </ol>
          </nav>
        </section>
      </div>
    );
  }
}

export default Categories;
