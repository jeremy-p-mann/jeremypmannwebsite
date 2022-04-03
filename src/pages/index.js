import * as React from "react";
import styled from "styled-components";
import FontStyles from "../fontStyles";
import AboutMe from "../components/about";
import HeadshotImage from "../components/headshot";
import NameTitle from "../components/name_title";
import NavWindow from "../components/links_at_the_top";
import Layout from "../components/layout";
import { Helmet } from "react-helmet";

const IndexPage = () => {
  const content = (
    <div>
      <NameTitle />
      <HeadshotImage />
      <AboutMe />
    </div>
  );
  const title = "Jeremy P. Mann";
  return <Layout title={title}>{content}</Layout>;
};

export default IndexPage;
