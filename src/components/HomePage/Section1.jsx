import styled from "styled-components";
import bg from "/img/background.jpg";

const Img = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

function Section1() {
  return (
    <>
      <a href="https://www.naver.com/" target="_blank">
        <Img src={bg} alt="bg" />
      </a>
    </>
  );
}

export default Section1;
