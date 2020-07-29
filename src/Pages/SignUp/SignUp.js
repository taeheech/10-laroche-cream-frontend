import React, { Component } from "react";
import SignUpInfo from "./SignUpInfo";
import SignUpOptionalInfo from "./SignUpOptionalInfo";
import "./SignUp.scss";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      skinTrouble: [],
    };
  }

  inputHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  
  clickedSensitivity = (e) => {
    this.setState({
      sensitivity: Number(e.target.dataset.value)
    })
  }

  handleCheckbox = (e) => {
    if (e.target.checked === true) {
      if (this.state.skinTrouble.length >= 3) {
        alert('최대 3개 선태 가능')
        e.target.checked = false;
        return;
      }
      this.state.skinTrouble.push(e.target.value)
      this.setState({skinTrouble: this.state.skinTrouble})
    } else {
      const newskinTrouble = this.state.skinTrouble.filter(el => el !== e.target.value);
      this.setState({skinTrouble: newskinTrouble})
    }
  }

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
        gender_type: this.state.gender_type,
        skinType: this.state.skinType,
        skinTrouble: this.state.skinTrouble,
        skinSensitivity: this.state.skinSensitivity,
      })
    });
  };

    render() {
      console.log(this.state);
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
                <SignUpOptionalInfo clickedSensitivity={this.clickedSensitivity} handleCheckbox={this.handleCheckbox} inputHandler={this.inputHandler} skinTrouble={this.state.skinTrouble} sensitivity={this.state.sensitivity} />
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
