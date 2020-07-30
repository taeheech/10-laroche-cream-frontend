import React, { Component } from "react";
import Nav from "../../Components/Nav";
import MyPageSideBar from "./MyPageSideBar";
import LikeItems from "./LikeItems";
import FloatBar from "../../Components/FloatBar/FloatBar";
import Footer from "../../Components/Footer/Footer";
import "./LikeItemList.scss";

class LikeItemList extends Component {
  render() {
    return (
      <>
        <Nav />
        <div className="LikeItemList">
          <MyPageSideBar />
          <LikeItems />
        </div>
        <FloatBar />
        <Footer />
      </>
    );
  }
}

export default LikeItemList;
