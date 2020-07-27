import React, { Component } from "react";
import "./SignIn.scss";

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      account: "",
      password: "",
    };
  }

  handleLoginBtn = () => {
    fetch("http://10.58.3.224:8000/user/signin", {
      method: "POST",
      body: JSON.stringify({
        account: this.state.account,
        password: this.state.password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.access_token) {
          localStorage.setItem("token", res.access_token);
          alert("로그인 성공");
          this.props.history.push("main");
        } else {
          alert("로그인 실패, 회원가입 먼저하세요");
          this.props.history.push("signup");
        }
      });
  };

  handleId = (e) => {
    this.setState({
      account: e.target.value,
    });
  };

  handlePw = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  render() {
    return (
      <div className="SignIn">
        <header>
          <img
            className="logo"
            src="https://www.larocheposay.co.kr/images/common/logo.png?1"
            alt="logo_image"
          />
        </header>
        <main>
          <p>
            회원님만 드리는 <em>풍성한 혜택</em> 놓치지 마세요!
          </p>
          <div>
            <div className="memberSignIn">
              <div className="tab">
                <a>회원로그인</a>
                <a>비회원로그인</a>
              </div>
              <div className="idpw">
                <div className="input">
                  <input
                    onChange={this.handleId}
                    className="account"
                    type="text"
                    placeholder="아이디"
                  />
                  <input
                    onChange={this.handlePw}
                    className="account"
                    type="text"
                    placeholder="비밀번호"
                  />
                  <button onClick={this.handleLoginBtn} className="login_btn">
                    로그인
                  </button>
                  <button className="btn">회원가입하고 혜택받기</button>
                </div>
                <div className="save_find">
                  <div>
                    <input type="checkbox" />
                    <label for="checkbox">아이디저장</label>
                  </div>
                  <div>
                    <a className="find_id">아이디 찾기</a>
                    <a>비밀번호 찾기</a>
                  </div>
                </div>
                <div className="sns">
                  <div className="snsBox">
                    <div className="naver_logo"></div>
                    <div className="sns_login">
                      <a>네이버 로그인</a>
                    </div>
                  </div>
                  <div className="snsBox">
                    <div className="facebook_logo"></div>
                    <div className="sns_login">
                      <a>페이스북 로그인</a>
                    </div>
                  </div>
                </div>
                <div className="sns">
                  <div className="snsBox">
                    <div className="kakao_logo"></div>
                    <div className="sns_login">
                      <a>카카오 로그인</a>
                    </div>
                  </div>
                  <div className="snsBox">
                    <div className="payco_logo"></div>
                    <div className="sns_login">
                      <a>페이코 로그인</a>
                    </div>
                  </div>
                </div>
                <p>
                  라로슈포제 계정으로 로그인 후, SNS 계정을 연결할 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </main>
        <footer>
          <div>
            <span>이용약관</span>
            <span className="privacy">개인정보처리방침</span>
          </div>
          <div className="copyright">
            COPYRIGHT © 2018 LA ROCHE-POSAY ALL RIGHTS RESERVED
          </div>
        </footer>
      </div>
    );
  }
}
export default SignIn;
