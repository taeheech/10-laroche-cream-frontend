import React, { Component } from "react";
import "./NonMemberSignIn.scss";

class NonMemberSignIn extends Component {
  render() {
    return (
      <div className="NonMemberSignIn">
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
            <div className="tab">
                <a>회원로그인</a>
                <a>비회원로그인</a>
            </div>
            <div className="orderInfo">
                <div className="input">
                  <input className="orderNum" type="text" placeholder="주문번호" />
                  <input
                    className="order"
                    type="text"
                    placeholder="주문자명"
                  />
                  <button className="track">주문조회</button>
                </div>
            </div>
          </div>
        </main>
        <footer>
          <div>
            <span>이용약관</span>
            <span className='privacy'>개인정보처리방침</span>
          </div>
          <div className='copyright' >COPYRIGHT © 2018 LA ROCHE-POSAY ALL RIGHTS RESERVED</div>
        </footer>
      </div>
    );
  }
}
export default NonMemberSignIn;