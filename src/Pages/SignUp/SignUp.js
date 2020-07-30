import React, { Component } from "react";
import SignUpInfo from "./SignUpInfo";
import SignUpOptionalInfo from "./SignUpOptionalInfo";
import "./SignUp.scss";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {};
  }

  inputHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSignUp = (e) => {
    fetch("http://10.58.1.97:8000/user/signup", {
      method: "POST",
      body: JSON.stringify({
        account: this.state.account,
        password: this.state.password,
        email: this.state.account + "@" + this.state.domain,
        phoneNumber: this.state.phoneNumber,
        name: this.state.name,
        birthday: this.state.birthday,
        gender_type: "여자",
        skinType: "지성",
        skinTrouble: "건조한 피부",
        skinSensitivity: this.state.skinSensitivity,
      })
    });
  };

  render() {
    return (
      <div className="SignUp">
        <div className="content">
          <header>
            <img
              className="logo"
              src="https://www.larocheposay.co.kr/images/common/logo.png?1"
              alt="logo_image"
            />
          </header>
          <main className="join_content">
            <div className="step">
              <div className="step_imgs">
                <div className="step1_img"></div>
                <div className="step_after"></div>
                <div className="step2_img"></div>
                <div className="step_after"></div>
                <div className="step3_img"></div>
              </div>
              <div className="step_text">
                <span className="step1_text">이용약관 및 본인인증</span>
                <span className="step2_text">정보입력</span>
                <span className="step3_text">가입완료</span>
              </div>
            </div>
            <div className="join_form">
              <h2>정보입력</h2>
              <SignUpInfo inputHandler={this.inputHandler} />
              <SignUpOptionalInfo inputHandler={this.inputHandler} />
            </div>
            <div className="btn_wrap">
              <button type="button">이전단계</button>
              <button
                onClick={this.handleSignUp}
                className="next_btn"
                type="button"
              >
                가입하기
              </button>
            </div>
          </main>
          <footer>
            <div>
              <span className="policy">이용약관</span>
              <span className="privacy">개인정보처리방침</span>
            </div>
            <div>COPYRIGHT © 2018 LA ROCHE-POSAY ALL RIGHTS RESERVED</div>
          </footer>
        </div>
      </div>
    );
  }
}
export default SignUp;
