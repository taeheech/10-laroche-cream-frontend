import React, { Component } from "react";
import { Link } from "react-router-dom";
import TopBar from "./Nav/TopBar";
import LogoBar from "./Nav/LogoBar";
import MenuBar from "./Nav/MenuBar";

class Nav extends Component {
  render() {
    return (
      <>
        <TopBar />
        <LogoBar />
        <MenuBar />
      </>
    );
  }
}

export default Nav;
