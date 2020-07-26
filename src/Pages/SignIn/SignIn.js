import React, { Component } from "react";
import "./SignIn.scss";

class SignIn extends Component {
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
                  <input className="account" type="text" placeholder="아이디" />
                  <input
                    className="account"
                    type="text"
                    placeholder="비밀번호"
                  />
                  <button className="login_btn">로그인</button>
                  <button className="btn">회원가입하고 혜택받기</button>
                </div>
                <div className="save_find">
                  <div>
                    <input type="checkbox" />
                    <label for="checkbox">
                      <em>아이디저장</em>
                    </label>
                  </div>
                  <div>
                    <a className="find_id">아이디 찾기</a>
                    <a>비밀번호 찾기</a>
                  </div>
                </div>
                <ul className="sns">
                  <li>
                    <a>네이버 로그인</a>
                  </li>
                  <li>
                    <a>카카오 로그인</a>
                  </li>
                  <li>
                    <a>페이스북 로그인</a>
                  </li>
                  <li>
                    <a>페이코 로그인</a>
                  </li>
                </ul>
                <p>
                  라로슈포제 계정으로 로그인 후, SNS 계정을 연결할 수 있습니다.
                </p>
              </div>
            </div>
            <div className="membership">
              <div>
                <h2>
                  <i></i>
                  라로슈포제 맴버십 혜택
                </h2>
                <ul>
                  <li>첫 회원가입 시</li>
                  <li>첫 구매확정 시</li>
                  <li>생일 당월 1일</li>
                  <li>추천인 ID 입력 시</li>
                  <li>맴버십 등급 별</li>
                  <li>문자 수신동의 시</li>
                </ul>
              </div>
            </div>
          </div>
        </main>
        <footer>
          <div>
            <span>이용약관</span>
            <span>개인정보처리방침</span>
          </div>
          <div>COPYRIGHT © 2018 LA ROCHE-POSAY ALL RIGHTS RESERVED</div>
        </footer>
      </div>
    );
  }
}
export default SignIn;
