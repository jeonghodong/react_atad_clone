import React from "react";
import styled from "styled-components";
import logo from "/img/logo.jpg";
import { Link } from "react-router-dom";

const HeaderWrap = styled.div`
  width: 100%;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 500;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.03);
`;
const Wrap = styled.div`
  width: 100%;
  max-width: 1600px;
  height: auto;
  margin: 0 auto;
  padding: 0 20px;
`;

const InWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Img = styled.img`
  width: 10vw;
  padding: 1rem 0rem;
`;

const Li = styled.a`
  padding: 0rem 1rem;
  font-size: 1.5vw;
  font-weight: bold;
`;

const Btn = styled.button`
  border: none;
  background: linear-gradient(225deg, #0d657e, #23bca0);
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 0.5rem;
  font-size: 0.8rem;
  cursor: pointer;
`;

function Header() {
  return (
    <HeaderWrap>
      <Wrap>
        <InWrap>
          <div>
            <Link to="/react_atad_clone">
              <Img src={logo} alt="logo_img" />
            </Link>
          </div>
          <div>
            <Link to="/about">
              <Li>아타드 소개</Li>
            </Link>
            <Link to="/service">
              <Li>서비스</Li>
            </Link>
            <Link to="/business">
              <Li>사업영역</Li>
            </Link>
          </div>
          <div>
            <Btn>문의하기</Btn>
          </div>
        </InWrap>
      </Wrap>
    </HeaderWrap>
  );
}

export default Header;
