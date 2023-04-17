import { useState } from "react";
import roket from "/public/img/main_rocket.png";
import logo from "/public/img/logo_ico.png";
import styled from "styled-components";

const Wrap = styled.div`
  background-color: #eee;
  display: flex;
  padding: 1rem 0rem;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 15vw;
`;
const RoketWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  margin-right: 5%;
`;
const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.span`
  font-size: 2vw;
  font-weight: bold;
  margin-bottom: 3rem;
  margin-left: 1rem;
  & span {
    color: #5f7d92;
    & span {
      color: black;
      font-weight: 300;
    }
  }
`;
const Text2 = styled.span`
  margin-left: 1rem;
`;

const AboutWrap = styled.div`
  /* background-color: #54596f; */
  background: linear-gradient(225deg, #0d657e, #23bca0);
  display: flex;
  color: white;
  border-radius: 2rem;
  justify-content: center;
  align-items: center;
  width: 60%;
`;

const InWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  align-content: center;
  width: 170px;
  height: 150px;
  margin-right: 3rem;
  border-radius: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #0000001d;
  }
  & h2 {
    margin-bottom: 1rem;
    font-size: 2vw;
    font-weight: bold;
  }
  & p {
    font-size: 1vw;
  }
`;

const TapWrap = styled.div`
  display: flex;
  padding: 16px;
  background-color: #eee;
  & div:nth-child(1) {
    width: 40%;
    height: 700px;
    background-image: url(/public/img/tab_img_a1.jpg);
    background-size: cover;
    border-radius: 2rem 0rem 0rem 2rem;
  }
  & div:nth-child(2) {
    width: 70%;
    border-radius: 0rem 2rem 2rem 0rem;
    background-color: white;
  }
`;
const LogoImg = styled.img`
  width: 3vw;
  height: 3vh;
  margin-bottom: 1rem;
`;

const BtmLWrap = styled.div`
  display: flex;
  padding: 2rem;
  flex-direction: column;
  color: white;
  & h2 {
    font-weight: bold;
    font-size: 2vw;
    margin-bottom: 3rem;
  }
  & p {
    padding: 0.5rem 0.25rem;
    background: linear-gradient(225deg, #0d657e, #23bca0);
    text-align: center;
    width: 10vw;
    font-size: 1.2vw;
    font-weight: bold;
    border-radius: 5px;
    margin-bottom: 1rem;
  }
  & span {
    &:nth-last-child(4) {
      font-size: 6vw;
      font-weight: bold;
      position: relative;
      margin-bottom: 12rem;
      &::before {
        display: block;
        content: "";
        clear: both;
        width: 57%;
        height: 13px;
        background: linear-gradient(225deg, #0d657e, #23bca0);
        position: absolute;
        bottom: -10px;
      }
    }
    &:nth-last-child(3) {
      font-size: 3.2vw;
      font-weight: 900;
      margin-bottom: 0.5rem;
    }
    &:nth-last-child(2) {
      font-size: 3.2vw;
      font-weight: 900;
      color: #23aca2;
      margin-bottom: 2rem;
    }
    &:nth-last-child(1) {
      font-size: 1vw;
      font-weight: bold;
    }
  }
`;

const BtmRWrap = styled.div`
  padding: 1rem;
`;

function Section2() {
  const [selectedWrap, setSelectedWrap] = useState("");

  const handleWrapClick = (v) => {
    const clickedWrapId = v.target.id;
    console.log(clickedWrapId);
    setSelectedWrap(clickedWrapId);
  };

  return (
    <>
      <Wrap>
        <RoketWrap>
          <div>
            <Img src={roket} alt="roket" />
          </div>
          <TextWrap>
            <Text>
              <span>
                아타드<span>의</span>
              </span>
              <br /> 성장 로드맵
            </Text>
            <Text2>생생을 넘어 가치를 창조합니다.</Text2>
          </TextWrap>
        </RoketWrap>
        <AboutWrap>
          <InWrap
            id="Wallet"
            style={{
              backgroundColor: selectedWrap === "Wallet" ? "white" : null,
              color: selectedWrap === "Wallet" ? "black" : null,
            }}
            onClick={(v) => handleWrapClick(v)}
          >
            <h2>Web 3.0</h2>
            <p>개인정보 없는 월렛</p>
          </InWrap>
          <InWrap
            id="Data Market"
            style={{
              backgroundColor: selectedWrap === "Data Market" ? "white" : null,
              color: selectedWrap === "Data Market" ? "black" : null,
            }}
            onClick={(v) => handleWrapClick(v)}
          >
            <h2>데이터 마켓</h2>
            <p>자유로운 데이터 거래</p>
          </InWrap>
          <InWrap
            id="Crowd Sourcing"
            style={{
              backgroundColor: selectedWrap === "Crowd Sourcing" ? "white" : null,
              color: selectedWrap === "Crowd Sourcing" ? "black" : null,
            }}
            onClick={(v) => handleWrapClick(v)}
          >
            <h2>크라우드 소싱</h2>
            <p>지속적인 수익 창출!</p>
          </InWrap>
          <InWrap
            id="VPN"
            style={{
              backgroundColor: selectedWrap === "VPN" ? "white" : null,
              color: selectedWrap === "VPN" ? "black" : null,
              margin: 0,
            }}
            onClick={(v) => handleWrapClick(v)}
          >
            <h2>VPN</h2>
            <p>더 빠르게, 더 안전하게!</p>
          </InWrap>
        </AboutWrap>
      </Wrap>
      <TapWrap>
        <BtmLWrap>
          <LogoImg src={logo} alt="img" />
          <h2>ATAD {selectedWrap}</h2>
          <p>서비스 이용자</p>
          <span>2,052+</span>
          {selectedWrap === "Wallet" ? (
            <>
              <span>개인정보없는</span>
              <span>안전한 전자지갑</span>
              <span>안전하고 간편한 보안 시스템</span>
            </>
          ) : null}
          {selectedWrap === "Data Market" ? (
            <>
              <span>자유로운</span>
              <span>데이터 거래!</span>
              <span>안전하고 데이터 거래 서비스</span>
            </>
          ) : null}
          {selectedWrap === "Crowd Sourcing" ? (
            <>
              <span>지속적인</span>
              <span>수익창출!</span>
              <span>빠른 유저 매칭 서비스</span>
            </>
          ) : null}
          {selectedWrap === "VPN" ? (
            <>
              <span>더 안전하게</span>
              <span>더 빠르게</span>
              <span>광고 없고 빠른 서비스</span>
            </>
          ) : null}
        </BtmLWrap>
        <BtmRWrap>
          <span>adsf</span>
          <span>fdas</span>
        </BtmRWrap>
      </TapWrap>
    </>
  );
}

export default Section2;
