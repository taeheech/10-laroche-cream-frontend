import React, { Component } from "react";
import "./SignUp.scss"

class SignUp extends Component {

  constructor() {
      super()
      this.state = {
        name: "",
        id: "",
        pw: ""
      }
  }

  handleName = (e) => {
      this.setState({
        name: e.target.value
      })
  }

  handleId = (e) => {
      this.setState({
        id: e.target.value
      })
  }

  handlePw = (e) => {
    this.setState({
      pw: e.target.value
    })
  }

  render() {
    console.log(this.state);
    return (
      <div className='SingUp'>
        <div className='content'>
      <header>
        <img className='logo' src='https://www.larocheposay.co.kr/images/common/logo.png?1' />
      </header>
      <main className='join_content'>
        <div className='step'>
          <div className='step_imgs'>
            <div className='step1_img'></div>
            <div className='step_after'></div>
            <div className='step2_img'></div>
            <div className='step_after'></div>
            <div className='step3_img'></div>
          </div>
          <div className='step_text'>
            <span className='step1_text'>이용약관 및 본인인증</span>
            <span className='step2_text'>정보입력</span>
            <span className='step3_text'>가입완료</span>
          </div>
        </div> 
        <div className='join_form'>
          <h2>정보입력</h2>
          <section className='section_1'>
            <h3>필수항목</h3>
            <ul className='customer_info' >
              <li>
                <input onChange={this.handleName} type='text' placeholder='이름' />
                <div className='input_id'>
                  <input onChange={this.handleId} type='text' placeholder='아이디 (영문, 숫자 조합 8~20자 내외)' />
                  <button type='button'>
                    <span>중복확인</span>
                  </button>
                </div>
                <input onChange={this.handlePw} type='password' placeholder='비밀번호 (영문, 숫자, 특수문자 중 2가지 이상 조합 8~20자 내외)' />
                <input type='password' placeholder='비밀번호 확인' />
              </li>
              <li>
                <div className="email_box">
                  <div className="email">
                    <input className='id' type='text' placeholder='이메일' />
                    <span>@</span>
                    <input className='domain' type='text' />
                  </div>
                  <select className='select_domain'>
                      <option>직접입력</option>
                      <option value='naver.com'>naver.com</option>
                      <option value='hanmail.net'>hanmail.net</option>
                      <option value='gmail.com'>gmail.com</option>
                      <option value='hotmail.com'>hotmail.com</option>
                      <option value='daum.net'>daum.net</option>
                    </select>
                </div>
                <div className='birthday'>
                  <input className='birthday_input' type='text' />
                  <button type='button' className='male'>남자</button>
                  <button type='button' className='female'>여자</button>
                </div>
                <input type='text' placeholder='휴대폰 번호' />
              </li>
            </ul>
          </section>
          <section className='section_2'>
            <h3>선택항목</h3>
            <ul className='customer_info'>
              <li>
                <div className='address'>
                  <input className='address_input' type='text' />
                  <a className='postal_code'>우편번호</a>
                </div>
                <input className='detail_address' type='text' />
                <input className='detail_address' type='text' placeholder='상세주소' />
              </li>
              <li>
                <div className='friend'>
                  <input className='friend_id' type='text' placeholder='추천인아이디' />
                  <a className='check_id'>아이디확인</a>
                </div>
                <ul className='dot_list'>
                  <li>회원가입 후 첫 구매 구매확정 시, 추천인 아이디와 회원님께 각각 마일리지 5,000점씩을 적립해 드립니다.</li>
                  <li>회원가입 시 입력한 추천인 아이디는 수정이 불가하오니, 신중히 입력해 주세요.</li>
                </ul>
              </li>
              <li>
                <h4>민감 정보 수집에 대한 동의 (필수)</h4>
                <div className='add_agree'>
                  <div className='radio_wrap'>
                    <span className='radiocss'>
                      <input className='radio' type='radio' />
                      <label>
                        <em>동의</em>
                      </label>
                    </span>
                    <span className='radiocss'>
                      <input className='radio' type='radio' />
                      <label>
                        <em>미동의</em>
                      </label>
                    </span>
                  </div>
                  <p>
                    엘오케이(유)는 (이하 "당사")는 다음과 같이 귀하의 민감정보를 수집 및 이용합니다.
                    <br/>수집항목 : 피부민감도, 피부타입, 피부고민
                    <br/>이용목적 :  개인맞춤 서비스 제공
                    <br/>보유 및 이용 기간 : 회원탈퇴 시 지체없이 파기
                    <br/>귀하는 개인정보보호법에 따라 개인정보 수집/이용 동의를 거부하실 수 있으며, 거부 시에는 일부 서비스에 제한이 있을 수 있습니다.
                  </p>
                </div>
              </li>
              <li>
                <h4>피부타입</h4>
                <div className='radio_wrap_skin_type'>
                  <span className='radiocss'>
                    <input type='radio' />
                    <label>
                      <em>건성 (얼굴 전체적으로 당김)</em>
                    </label>
                  </span>
                  <span className='radiocss'>
                    <input type='radio' />
                    <label>
                      <em>복합성 (양 볼만 당김, T존 번들거림)</em>
                    </label>
                  </span>
                  <span className='radiocss'>
                    <input type='radio' />
                    <label>
                      <em>중성 (건성과 지성의 중간)</em>
                    </label>
                  </span>
                  <span className='radiocss'>
                    <input type='radio' />
                    <label>
                      <em>지성 (얼굴 전체적으로 번들거림)</em>
                    </label>
                  </span>
                </div>
              </li>
              <li>
                <h4>
                피부고민
                <span>(최대 3개 선택)</span>
                </h4>
                <div className='check_box_skin_problem'>
                  <span className='checkcss'>
                    <input type='checkbox' />
                    <label>
                      <em>민감성 피부</em>
                    </label>
                  </span>
                  <span className='checkcss'>
                    <input type='checkbox' />
                    <label>
                      <em>손상 피부</em>
                    </label>
                  </span>
                  <span className='checkcss'>
                    <input type='checkbox' />
                    <label>
                      <em>지성/트러블 피부</em>
                    </label>
                  </span>
                  <span className='checkcss'>
                    <input type='checkbox' />
                    <label>
                      <em>건조한 피부</em>
                    </label>
                  </span>
                  <span className='checkcss'>
                    <input type='checkbox' />
                    <label>
                      <em>주름</em>
                    </label>
                  </span>
                  <span className='checkcss'>
                    <input type='checkbox' />
                    <label>
                      <em>탄력</em>
                    </label>
                  </span>
                  <span className='checkcss'>
                    <input type='checkbox' />
                    <label>
                      <em>브라이트닝</em>
                    </label>
                  </span>
                  <span className='checkcss'>
                    <input type='checkbox' />
                    <label>
                      <em>톤업/메이크업</em>
                    </label>
                  </span>
                  <span className='checkcss'>
                    <input type='checkbox' />
                    <label>
                      <em>UV차단</em>
                    </label>
                  </span>
                  <span className='checkcss'>
                    <input type='checkbox' />
                    <label>
                      <em>두피 모발 강화</em>
                    </label>
                  </span>
                </div>
              </li>
              <li>
                <h4>
                  피부민감도
                  <span>(5점 척도)</span>
                </h4>
                <div className='radio_wrap_sensitivity'>
                  <div className='radiocss'>
                    <input type='radio' />
                    <label>
                      <em>1</em>
                    </label>
                  </div>
                  <div className='radiocss'>
                    <input type='radio' />
                    <label>
                      <em>2</em>
                    </label>
                  </div>
                  <div className='radiocss'>
                    <input type='radio' />
                    <label>
                      <em>3</em>
                    </label>
                  </div>
                  <div className='radiocss'>
                    <input type='radio' />
                    <label>
                      <em>4</em>
                    </label>
                  </div>
                  <div className='radiocss'>
                    <input type='radio' />
                    <label>
                      <em>5</em>
                    </label>
                  </div>
                </div>
                <div className='sensitive'>
                  <span className='left'>전혀 민감하지 않다</span>
                  <span className='right'>매우 민감하다</span>
                </div>
              </li>
            </ul>
          </section>
        </div>
        <div className='btn_wrap'>
          <button className='back_btn' type='button'>이전단계</button>
          <button type='button'>가입하기</button>
        </div>
      </main>
      <footer>
        <div>
          <span className='policy' >이용약관</span>
          <span className='privacy'>개인정보처리방침</span>
        </div>
        <div>
          COPYRIGHT © 2018 LA ROCHE-POSAY ALL RIGHTS RESERVED
        </div>
      </footer>
    </div>
      </div>
    )
  }
}

export default SignUp;
