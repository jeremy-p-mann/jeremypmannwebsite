import * as React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import NavWindow from "../components/links_at_the_top";

const Page = styled.html`
   background: #eefaff;
`
const Body = styled.body`
  font-family: "optima";
  text-align: center;
  display: grid;
  padding-top: 5vh;
  vertical-align: middle;
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
const Layout = ({ title, children }) => {
  return (
    <Page>
      <Helmet>
        <title>Jeremy P. Mann</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <Body>
        <NavWindow />
        <Container>
          <h1>{title}</h1>
          {children}
        </Container>
      </Body>
    </Page>
  );
};

export default Layout;
