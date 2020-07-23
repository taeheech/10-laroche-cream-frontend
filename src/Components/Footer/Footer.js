import React, { Component } from "react";
import "./Footer.scss";

class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
        <section className="footNav">
          <nav>
            <ul className="Left">
              <li>ABOUT US</li>
              <li>이용약관</li>
              <li className="privacy">개인정보처리방침</li>

              <a
                className="facebook"
                href="https://www.facebook.com/larocheposayKR"
              ></a>

              <a
                className="blog"
                href="https://m.post.naver.com/larocheposay_korea"
              ></a>

              <a
                className="youtube"
                href="https://www.youtube.com/channel/UCtbZ_cymnMVQwqlwsdl2pFw"
              ></a>
            </ul>
            <ul className="Right">
              <li>GLOBAL SITE</li>
            </ul>
          </nav>
        </section>

        <section className="footContents">
          <div className="contentsLeft">
            <ul className="info">
              <li>
                <span>엘오케이(유)</span>
              </li>
              <li>
                <span>대표 : 크리스티앙 마르코스 아르나이</span>
              </li>
              <li>
                <a href="none">
                  <span>사업자 정보 확인</span>
                </a>
              </li>
            </ul>
            <ul className="cs">
              <li>구매/배송/사이트 이용 문의 080-844-0088</li>
              <li className="csCenter">
                <p>제품 문의 080-344-0088</p>
                <p> 상담 시간 : 평일 09:30 – 17:30</p>
              </li>
              <li className="bull">
                ・ 점심시간 12:30 – 13:30 / 주말, 법정공휴일 휴무
              </li>
              <li className="bull">
                ・ 1:1 상담을 이용하시면 보다 신속하게 답변 받으실 수 있습니다.
              </li>
            </ul>
          </div>
          <div className="contentsRight">
            <address>
              <span>서울특별시 강남구 영동대로 517(삼성동, 아셈타워 31층)</span>
              <span>사업자등록번호 220-81-73483</span>
              <span>통신판매업신고번호 2012-서울강남-01663</span>
              <span>
                개인정보보호책임자 현희경 (IMC&amp;E-commerce Director)
              </span>
              <span>호스팅서비스사업자 : (주)아이네트</span>
              <button type="button">
                라로슈포제 공식 온라인 몰은 고객님의 안전한 전자상거래를 위해
                퍼스트데이터코리아(유)에서 제공하는 구매안전서비스(에스크로)를
                이용하고 있습니다.
              </button>
            </address>
          </div>
        </section>
        <div className="copyright">
          <span>
            KOREA ⎜ COPYRIGHT © 2018 LA ROCHE-POSAY ALL RIGHTS RESERVED
          </span>
        </div>
      </footer>
    );
  }
}

export default Footer;
