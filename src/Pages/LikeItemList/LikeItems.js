import React, { Component } from "react";
import LikeItemBox from "../../Components/Main/LikeItemBox";
import "./LikeItems.scss";

class LikeItems extends Component {
  constructor() {
    super();
    this.state = {
      likeItemTable: [],
    };
  }

  componentDidMount() {
    this.showLikeItems();
  }

  showLikeItems = () => {
    fetch("http://10.58.4.80:8000/user/likeproduct", {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("Authorization"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.setState({ likeItemTable: res.like_list });
      });
  };

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
            const hash = item.hash_tag.split(",");
            console.log(hash[0]);
            return (
              <>
                <LikeItemBox
                  id={idx}
                  item={item}
                  width={"narrow"}
                  hash={hash}
                  showLikes={false}
                  isGift={item.gift}
                  isSale={item.sale}
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
