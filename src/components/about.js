import * as React from "react";
import styled from "styled-components";

const Anchor = styled.a`
  color: #000000;
`;
const Url = ({ url, description }) => {
  return (
    <Anchor href={url} target="new">
      {description}
    </Anchor>
  );
};
const Paragraph = styled.p`
  font-size: 18pt;
  font-weight: 400;
  @media (max-width: 600px) {
    font-size: 18px;
    font-weight: 400;
    margin: 0;
  }
`;
const AboutMe = () => {
  const linkedin = "https://www.linkedin.com/in/jeremypmann/";
  const linkedin_description = "data scientist";
  const github = "https://www.linkedin.com/in/jeremypmann/";
  const github_description = "creating open source software";
  const youtube = "https://www.youtube.com/user/jmann277";
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
