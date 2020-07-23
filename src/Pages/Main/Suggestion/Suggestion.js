import React, { Component } from "react";
import Slides from "../../../Components/Main/Slides";
import "./Suggestion.scss";

class Suggestion extends Component {
  constructor() {
    super();
    this.state = {
      itemList: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/mockdata/data.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          itemList: res.data,
        });
      });
  }

  render() {
    return (
      <div className="Suggestion">
        <h1 className="suggestionTitle">고객님 피부고민을 위한 맞춤 추천</h1>
        <div className="suggestionList">
          <Slides
            itemList={this.state.itemList}
            settings={this.state.settings}
            dots={false}
            slidesToShow={4}
            slidesToScroll={4}
          />
        </div>
      </div>
    );
  }
}
export default Suggestion;
