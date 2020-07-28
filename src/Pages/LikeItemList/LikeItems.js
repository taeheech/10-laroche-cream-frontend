import React, { Component } from "react";
import ItemBox from "../../Components/Main/ItemBox";
import "./LikeItems.scss";

class LikeItems extends Component {
  constructor() {
    super();
    this.state = {
      likeItemTable: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/mockdata/data.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          likeItemTable: res.likeItemTable,
        });
      });
  }

  render() {
    const { likeItemTable } = this.state;
    return (
      <div className="LikeItems">
        <div className="itemListTitle">
          <h1>찜 제품</h1>
          <div className="btnWrap">
            <button className="cartBtn">장바구니</button>
            <button className="deleteBtn">삭제</button>
          </div>
        </div>
        <ul className="itemTable">
          {likeItemTable.map((item, idx) => {
            const hash = item.hash.split(",")[0];
            return (
              <>
                <ItemBox
                  key={idx}
                  item={item}
                  width={"narrow"}
                  hash={hash.toString()}
                  showLikes={false}
                  isBest={item.best}
                  isNew={item.new}
                />
              </>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default LikeItems;
