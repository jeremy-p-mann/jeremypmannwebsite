import * as React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import NavWindow from "../components/links_at_the_top";

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
const Layout = ({ title, children }) => {
  return (
    <html>
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
    </html>
  );
};

export default Layout;
