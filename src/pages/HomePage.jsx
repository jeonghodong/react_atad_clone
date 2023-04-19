import React from "react";
import styled from "styled-components";
import Section1 from "../components/HomePage/Section1";
import Section2 from "../components/HomePage/Section2";
import Section3 from "../components/HomePage/Section3";
import Section4 from "../components/HomePage/Section4";

const Wrap = styled.div`
  padding-top: 4rem;
`;

function Home() {
  return (
    <Wrap>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </Wrap>
  );
}

export default Home;
