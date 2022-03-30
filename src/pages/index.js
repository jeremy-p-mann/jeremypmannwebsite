import * as React from "react";
import styled from "styled-components";
import FontStyles from "../fontStyles";
import AboutMe from "../components/about";
import HeadshotImage from "../components/headshot";
import NameTitle from "../components/name_title";


const Body = styled.body`
  font-family: "optima";
  /* background: #eefaff; */
  text-align: center;
  display: flex;
  padding-top: 5vh;
  justify-content: center;
  @media (max-width: 600px) {
    padding: 5vh;
  }
`;
const Container = styled.div`
  border: 1px solid #000000;
  padding: 4rem;
  max-width: 600px;
  @media (max-width: 600px) {
    height: 75vh;
    padding: 2rem;
`;
const IndexPage = () => {
  return (
    <Body>
      <Container>
        <NameTitle />
        <HeadshotImage />
        <AboutMe />
      </Container>
    </Body>
  );
};

export default IndexPage;
