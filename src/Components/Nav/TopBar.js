import React, { Component } from "react";
import { Link } from "react-router-dom";
import { userAPI } from "../../config";
import "./TopBar.scss";

class TopBar extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
    };
  }
  componentDidMount() {
    fetch(userAPI, {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("Authorization"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({ userName: res.경로 });
      });
  }

  render() {
    return (
      <nav>
        <Link to="/">
          <img
            alt=""
            className="navLogo"
            onClick=""
            src="https://www.larocheposay.co.kr/images/common/logo.png?1"
          ></img>
        </Link>
        <ul className="topNav">
          {localStorage.getItem("Authorization") ? (
            <>
              <li>
                <Link to="">{this.state.userName} 님</Link>
              </li>
              <li>
                <Link to="">로그아웃</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/signin">로그인</Link>
              </li>
              <li>
                <Link to="/signup">회원가입</Link>
              </li>
            </>
          )}

          <li>
            {/* {localStorage.getItem("Authorization") ? (
     
            ) : (
            
            )} */}
          </li>
          <li>
            <Link to="">주문/배송조회</Link>
          </li>
          <li>
            <Link to="" className="topNavEnd">
              고객케어센터
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default TopBar;
