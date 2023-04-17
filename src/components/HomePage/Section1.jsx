import styled from "styled-components";
import bg from "/public/img/background.jpg";

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

function Section1() {
  return (
    <>
      <Img src={bg} alt="bg" />
    </>
  );
}

export default Section1;
