import logo from "/public/img/logo.jpg";
import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 1rem;
  & button {
    cursor: pointer;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    border: 1px solid black;
    background-color: white;
  }
  & div {
    display: flex;
    & img {
      padding: 3rem;
      padding-left: 0;
      width: 250px;
    }
    & div {
      padding-left: 3rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      & h2 {
        font-size: 1.3rem;
        font-weight: bold;
        padding-bottom: 0.7rem;
      }
      & span {
        font-size: 1rem;
        font-weight: lighter;
        padding-bottom: 0.5rem;
      }
    }
  }
`;

function Footer() {
  return (
    <Wrap>
      <div>
        <img src={logo} alt="logoimg" />
        <div>
          <h2>아타드 주식회사</h2>
          <span>대표 홍길동 | 사업자번호 123-12-12345</span>
          <span>주소 서울특별시 강남구 영동대로</span>
          <span>Copyright©2023 ATAD All rights reserved.</span>
        </div>
      </div>
      <button>개인정보취급방침</button>
    </Wrap>
  );
}

export default Footer;
