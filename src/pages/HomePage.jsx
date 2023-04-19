import React from "react";
import styled from "styled-components";
import Section1 from "../components/HomePage/Section1";
import Section2 from "../components/HomePage/Section2";
import Section3 from "../components/HomePage/Section3";

const Wrap = styled.div``;

function Home() {
  return (
    <Wrap>
      <Section1 />
      <Section2 />
      <Section3 />
    </Wrap>
  );
}

export default Home;
