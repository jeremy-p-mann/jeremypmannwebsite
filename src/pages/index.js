import * as React from "react";
import styled from "styled-components";
import FontStyles from "../fontStyles";
import AboutMe from "../components/about";
import HeadshotImage from "../components/headshot";
import NameTitle from "../components/name_title";
import NavWindow from "../components/links_at_the_top";
import { Helmet } from "react-helmet";

const Body = styled.body`
  margin: 0;
  font-family: "optima";
  background: #eefaff;
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
    <html lang="en">
      <Helmet>
        <title>Jeremy P. Mann</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <Body>
        <Container>
          <NameTitle />
          <HeadshotImage />
          <AboutMe />
        </Container>
      </Body>
    </html>
  );
};

export default IndexPage;
