import * as React from "react";
import styled from "styled-components";

const Paragraph = styled.p`
  font-size: 18pt;
  font-weight: 400;
  margin: 2rem 0;
  @media (max-width: 600px) {
    font-size: 18px;
    font-weight: 400;
    margin: 2rem 0;
  }
`;

export default Paragraph;
