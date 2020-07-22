import React, { Component } from "react";
import Nav from "../../Components/Nav";
import TopSlideBar from "./TopSlideBar";
import BestSeller from "./BestSeller";
import BrandStoryBanner from "./BrandStoryBanner";
import Discount from "./Discount";
import Suggestion from "./Suggestion";
import OnlynHot from "./OnlynHot";
import SkinSolution from "./SkinSolution";

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Nav />
        <TopSlideBar />
        <BestSeller />
        <BrandStoryBanner />
        <Discount />
        <Suggestion />
        <OnlynHot />
        <SkinSolution />
      </div>
    );
  }
}

export default Main;
