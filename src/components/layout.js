import * as React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import NavWindow from "../components/links_at_the_top";

const Body = styled.body`
  margin: 0px;
  font-family: "optima";
  /* background: #eefaff; */
  text-align: center;
  display: grid;
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
    <html lang="en">
      <Helmet>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <Body>
        <NavWindow />
        <Container>
          {children}
        </Container>
      </Body>
    </html>
  );
};

export default Layout;
