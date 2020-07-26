import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Categories.scss";

class Categories extends Component {
  constructor() {
    super();
    this.state = {
      categoryData: [],
      isActivated: false,
      clickedCategory: -1,
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/mockdata/data.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          categoryData: res.categoryData,
        });
      });
  }

  handleClickEvent = (idx) => {
    this.setState({
      isActivated: !this.state.isActivated,
      clickedCategory: idx,
    });
  };

  render() {
    const { categoryData, clickedCategory, isActivated } = this.state;
    const { handleClickEvent } = this;

    return (
      <div className="Categories">
        <section>
          <nav>
            <ol className="totalCate">
              <li className="Cate">
                <div className="cateTitle">
                  <Link to="/">HOME</Link>
                </div>
              </li>
              {categoryData.map((category, idx) => {
                const categoryShown =
                  clickedCategory === idx && isActivated === true;
                return (
                  <li key={idx} className="Cate">
                    <div
                      className="cateTitle"
                      onClick={() => handleClickEvent(idx)}
                    >
                      <div>
                        <i>{category.title}</i>
                        <span className={categoryShown ? "on" : "displayNone"}>
                          ▼
                        </span>
                        <span className={categoryShown ? "displayNone" : "on"}>
                          ▲
                        </span>
                      </div>
                    </div>
                    <ul className={categoryShown ? "on" : "displayNone"}>
                      {category.list.map((item, idx) => {
                        return <li key={idx}>{item.id}</li>;
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
