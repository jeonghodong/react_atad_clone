import React from "react";
import styled from "styled-components";
import logo from "/public/img/logo.jpg";
import { Link } from "react-router-dom";

const Wrap = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  padding: 0rem 1rem;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 500;
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
    <Wrap>
      <div>
        <Link to="/">
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
    </Wrap>
  );
}

export default Header;
