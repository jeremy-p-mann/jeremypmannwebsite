import * as React from "react";
import styled from "styled-components";
import Paragraph from "../components/paragraph";
import Url from "../components/url";

const AboutMe = () => {
  const linkedin = "https://www.linkedin.com/in/jeremypmann/";
  const linkedin_description = "data scientist";
  const github = "https://www.github.com/jeremy-p-mann";
  const github_description = "creating open source software";
  const youtube = "https://www.youtube.com/user/";
  const youtube_description = "make videos";
  return (
    <div>
      <Paragraph>
        I'm a <Url url={linkedin} description={linkedin_description} />{" "}
        specializing in healthcare. Previously, I was a mathematician and a
        teacher. In my free time, I enjoy{" "}
        <Url url={github} description={github_description} /> and thinking about
        longevity. Sometimes, I{" "}
        <Url url={youtube} description={youtube_description} />.
      </Paragraph>
    </div>
  );
};

export default AboutMe;
