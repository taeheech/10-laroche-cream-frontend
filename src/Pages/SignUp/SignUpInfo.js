import React, { Component } from "react";
import "./SignUpInfo.scss";

class SignUpInfo extends Component {
  render() {
    return (
      <section className="SignUpInfo">
        <h3>필수항목</h3>
        <ul className="customer_info">
          <li>
            <input
              onChange={this.props.inputHandler}
              name="name"
              type="text"
              placeholder="이름"
            />
            <div className="input_id">
              <input
                onChange={this.props.inputHandler}
                name="account"
                className="inputId"
                type="text"
                placeholder="아이디 (영문, 숫자 조합 8~20자 내외)"
              />
              <button className="checkId" type="button">
                <span>중복확인</span>
              </button>
            </div>
            <input
              onChange={this.props.inputHandler}
              name="password"
              type="password"
              placeholder="비밀번호 (영문, 숫자, 특수문자 중 2가지 이상 조합 8~20자 내외)"
            />
            <input
              onChange={this.props.inputHandler}
              name="checkpw"
              type="password"
              placeholder="비밀번호 확인"
            />
          </li>
          <li>
            <div className="email_box">
              <div className="email">
                <input
                  onChange={this.props.inputHandler}
                  name="email"
                  className="id"
                  type="text"
                  placeholder="이메일"
                />
                <span>@</span>
                <input
                  onChange={this.props.inputHandler}
                  name="domain"
                  className="domain"
                  type="text"
                />
              </div>
              <select
                onClick={this.props.inputHandler}
                name="domain"
                className="select_domain"
              >
                <option>직접입력</option>
                <option value="naver.com">naver.com</option>
                <option value="hanmail.net">hanmail.net</option>
                <option value="gmail.com">gmail.com</option>
                <option value="hotmail.com">hotmail.com</option>
                <option value="daum.net">daum.net</option>
              </select>
            </div>
            <div className="birthday">
              <input
                onChange={this.props.inputHandler}
                name="birthday"
                className="birthday_input"
                type="text"
              />
              <button
                onClick={this.props.inputHandler}
                name="male"
                value="male"
                type="button"
                className="male"
              >
                남자
              </button>
              <button
                onClick={this.props.inputHandler}
                name="female"
                value="female"
                type="button"
                className="female"
              >
                여자
              </button>
            </div>
            <input
              onChange={this.props.inputHandler}
              name="phoneNumber"
              type="text"
              placeholder="휴대폰 번호"
            />
          </li>
        </ul>
      </section>
    );
  }
}
export default SignUpInfo;
