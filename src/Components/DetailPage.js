import React, { Component } from "react";
import Nav from "./Nav";
import DetailLeft from "./DetailPage/DetailLeft/DetailLeft";
import DetailRight from "./DetailPageRight/DetailRight";
import DetailTab from "./DetailTab/DetailTab";
import DetailSlider from "./DetailSlider/DetailSlider";
import PayInfo from "./PayInfo/Payinfo";
import "./DetailPage.scss";

class DetailPage extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch("http://10.58.4.187:8000/product/detail", {
      method: "POST",
      body: JSON.stringify({
        id: 1,
      }),
    })
      .then((res) => res.json())
      .then((res) => this.setState({ data: res.data }));
  }

  render() {
    return (
      <>
        <Nav />
        <div className="DetailPageTop">
          <DetailLeft sliderData={this.state.data} />
          <DetailRight rightData={this.state.data} />
        </div>
        <DetailSlider />
        <DetailTab />
        <PayInfo />
      </>
    );
  }
}

export default DetailPage;
