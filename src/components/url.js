import * as React from "react";
import Anchor from "../components/anchor";

const Url = ({ url, description }) => {
  return (
    <Anchor href={url} target="new">
      {description}
    </Anchor>
  );
};

export default Url;
