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
        <button>문의하기</button>
        <button>문의하기</button>
      </div>
    </Wrap>
  );
}

export default Header;
