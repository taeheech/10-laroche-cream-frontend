import React, { Component } from "react";
import SignUpInfo from "./SignUpInfo";
import SignUpOptionalInfo from "./SignUpOptionalInfo";
import "./SignUp.scss";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      id: "",
      pw: "",
      checkpw: "",
      email: "",
      domain: "",
      phone: "",
    };
  }

  handleName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleId = (e) => {
    this.setState({
      id: e.target.value,
    });
  };

  handlePw = (e) => {
    this.setState({
      pw: e.target.value,
    });
  };

  checkPw = (e) => {
    this.setState({
      checkpw: e.target.value,
    });
  };

  handleEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handleDomainInput = (e) => {
    this.setState({
      domain: e.target.value,
    });
  };

  handlePhonneNum = (e) => {
    this.setState({
      phone: e.target.value,
    });
  };

  hadleSignUp = (e) => {
    fetch("http://10.58.0.143:8000/user/signup", {
      method: "POST",
      body: JSON.stringify({
        id: this.state.id,
        pw: this.state.pw,
        email: this.state.id + "@" + this.state.domain,
        name: "",
        checkpw: "",
        phone: "",
      }),
    }).then((res) => res.json());
  };

  render() {
    console.log(this.state);
    return (
      <div className="SingUp">
        <div className="content">
          <header>
            <img
              className="logo"
              src="https://www.larocheposay.co.kr/images/common/logo.png?1"
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
              <SignUpInfo
                handleName={this.handleName}
                handleId={this.handleId}
                handlePw={this.handlePw}
                checkPw={this.checkPw}
                handleEmail={this.handleEmail}
                handleDomainInput={this.handleDomainInput}
                handlePhonneNum={this.handlePhonneNum}
              />
              <SignUpOptionalInfo />
            </div>
            <div className="btn_wrap">
              <button type="button">이전단계</button>
              <button
                onClick={this.hadleSignUp}
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
