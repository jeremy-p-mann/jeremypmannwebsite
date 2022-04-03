import * as React from "react";
import headshot from "../images/headshot.png";
import styled from "styled-components";

const Image = styled.img`
  height: 400px;
  @media (max-width: 600px) {
    height: 200px;
  }
`;
const HeadshotImage = () => {
  return (
    <div>
      <Image src={headshot} alt="Photo of Jeremy Mann" />
    </div>
  );
};

export default HeadshotImage;
