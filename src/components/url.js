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

export default Url;
