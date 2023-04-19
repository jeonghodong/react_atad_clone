import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 5rem 1rem 5rem 1rem;
  overflow: hidden;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;
const HeaderLeft = styled.div`
  padding-left: 2rem;
  & h2 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  & p {
    font-size: 1rem;
    font-weight: lighter;
  }
`;
const HeaderRight = styled.div`
  padding-right: 2.5rem;
  & button {
    width: 50px;
    background-color: #23aca2;
    color: white;
    border: none;
    padding: 1rem;
    font-size: 1rem;
    cursor: pointer;
    &:nth-child(1) {
      margin-right: 1rem;
    }
  }
`;

const SlideWrap = styled.div`
  display: flex;
  padding-left: 2rem;
  width: 100%;
`;

const Slides = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2.5rem;
  width: 33.3333%;
  & img {
    max-width: 100%;
    border-radius: 1.5rem;
    margin-bottom: 2.5rem;
  }
  & span {
    color: gray;
    font-size: 1rem;
    font-weight: bold;
  }
  & h2 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }
  & p {
    font-size: 1rem;
    font-weight: lighter;
  }
  & button {
    width: 30%;
    padding: 1rem 0rem;
    border-radius: 0.5rem;
    border: none;
    background-color: #cde9e7;
    color: #1fb09c;
    margin-top: 2rem;
  }
`;
function Section3() {
  return (
    <Wrap>
      <Header>
        <HeaderLeft>
          <h2>아타드 뉴스</h2>
          <p>아타드의 새로운 소식을 전합니다.</p>
        </HeaderLeft>
        <HeaderRight>
          <div>
            <button>&lt;</button>
            <button>&gt;</button>
          </div>
          <div></div>
        </HeaderRight>
      </Header>
      <SlideWrap>
        {posts.map((v, index) => (
          <Slides key={index}>
            <img src={v.img} alt="img" />
            <span>{v.stock}</span>
            <h2>{v.name}</h2>
            <p>{v.text}</p>
            <button>MORE VIEW</button>
          </Slides>
        ))}
      </SlideWrap>
    </Wrap>
  );
}

const posts = [
  {
    img: "/public/img/news1.png",
    stock: "아타드(주)",
    name: "글로벌 IP 확장 및 미국 지사 설립",
    text: "글로벌 IP 확장 및 미국 지사 설립",
  },
  {
    img: "/public/img/news1.png",
    stock: "아타드(주)",
    name: "글로벌 IP 확장 및 미국 지사 설립",
    text: "글로벌 IP 확장 및 미국 지사 설립",
  },
  {
    img: "/public/img/news1.png",
    stock: "아타드(주)",
    name: "글로벌 IP 확장 및 미국 지사 설립",
    text: "글로벌 IP 확장 및 미국 지사 설립",
  },
];

export default Section3;
