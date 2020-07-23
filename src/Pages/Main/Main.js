import React, { Component } from "react";
// import Nav from "../../Components/Nav";
import TopSlideBar from "./TopSlideBar/TopSlideBar";
import BestSeller from "./BestSeller/BestSeller";
import BrandStoryBanner from "./BrandStoryBanner/BrandStoryBanner";
import Discount from "./Discount/Discount";
import Suggestion from "./Suggestion/Suggestion";
import OnlynHot from "./OnlynHot/OnlynHot";
import SkinSolution from "./SkinSolution/SkinSolution";
import Memebership from "./Membership/Membership";
import Video from "./Video/Video";
import Review from "./Review/Review";
import Notice from "./Notice/Notice";
import Footer from "../../Components/Footer/Footer";

class Main extends Component {
  render() {
    return (
      <div className="Main">
        {/* <Nav /> */}
        <TopSlideBar />
        <BestSeller />
        <BrandStoryBanner />
        <Discount />
        <Suggestion />
        <OnlynHot />
        <SkinSolution />
        <Memebership />
        <Video />
        <Review />
        <Notice />
        <Footer />
      </div>
    );
  }
}

export default Main;
