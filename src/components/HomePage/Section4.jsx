import styled, { keyframes } from "styled-components";
import img1 from "/public/img/cooperation_img1.png";
import img2 from "/public/img/cooperation_img2.png";
import img3 from "/public/img/cooperation_img3.png";
import img4 from "/public/img/cooperation_img4.png";
import img5 from "/public/img/cooperation_img5.png";
import img6 from "/public/img/cooperation_img6.png";
import img7 from "/public/img/cooperation_img7.png";
import img8 from "/public/img/cooperation_img8.png";
import img9 from "/public/img/cooperation_img9.png";
import img10 from "/public/img/cooperation_img10.png";
import img12 from "/public/img/cooperation_img12.png";

const RightMove = keyframes`
 0% {
      transform: translateX(0);
    }
50%{
      transform: translateX(-500%);
}
100%{
      transform: translateX(0);
}
`;

const LeftMove = keyframes`
  0% {
      transform: translateX(-500%);
    }
50%{
      transform: translateX(0);
}
100%{
      transform: translateX(-500%);
}
`;
const Wrap = styled.div`
  width: 100%;
  padding: 3rem 0rem;
  margin: 0 auto;
  background-color: #21aca2;
  color: white;
`;
const InWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  & span {
    font-size: 1rem;
    font-weight: lighter;
  }
`;
const ImgSlideWrap = styled.div`
  display: flex;
  padding-top: 2rem;
  max-width: 1200px;
  overflow: hidden;
  & img {
    width: 200px;
    height: 100px;
    border-radius: 15%;
    padding: 0rem 0.8rem;
    animation: ${RightMove} 15s ease-in-out Infinite;
  }
`;

const ImgSlideWrap2 = styled.div`
  display: flex;
  padding-top: 2rem;
  max-width: 1200px;
  overflow: hidden;
  & img {
    width: 200px;
    height: 100px;
    border-radius: 15%;
    padding: 0rem 0.8rem;
    animation: ${LeftMove} 15s ease-in-out Infinite;
  }
`;

function Section5() {
  return (
    <Wrap>
      <InWrap>
        <h2>아타드 협력사</h2>
        <span>아타드는 스타트업부터 대기업까지 새로운 가치를 함께 나눕니다.</span>
        <ImgSlideWrap>
          <img src={img1} alt="img" />
          <img src={img2} alt="img" />
          <img src={img3} alt="img" />
          <img src={img4} alt="img" />
          <img src={img5} alt="img" />
          <img src={img6} alt="img" />
          <img src={img7} alt="img" />
          <img src={img8} alt="img" />
          <img src={img9} alt="img" />
          <img src={img10} alt="img" />
          <img src={img1} alt="img" />
          <img src={img12} alt="img" />
        </ImgSlideWrap>
        <ImgSlideWrap2>
          <img src={img12} alt="img" />
          <img src={img1} alt="img" />
          <img src={img10} alt="img" />
          <img src={img9} alt="img" />
          <img src={img8} alt="img" />
          <img src={img7} alt="img" />
          <img src={img6} alt="img" />
          <img src={img5} alt="img" />
          <img src={img4} alt="img" />
          <img src={img3} alt="img" />
          <img src={img2} alt="img" />
          <img src={img1} alt="img" />
        </ImgSlideWrap2>
      </InWrap>
    </Wrap>
  );
}

export default Section5;
