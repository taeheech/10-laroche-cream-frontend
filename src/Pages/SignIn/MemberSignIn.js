import React, { Component } from "react";

class MemberSignIn extends Component {
  render() {
    return (
      <div className="idpw">
        <div className="input">
          <input
            onChange={this.props.handleInput}
            name="account"
            className="account"
            type="text"
            placeholder="아이디"
          />
          <input
            onChange={this.props.handleInput}
            name="password"
            className="account"
            type="text"
            placeholder="비밀번호"
          />
          <button onClick={this.props.handleLoginBtn} className="login_btn">
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
        <p>라로슈포제 계정으로 로그인 후, SNS 계정을 연결할 수 있습니다.</p>
      </div>
    );
  }
}
export default MemberSignIn;
