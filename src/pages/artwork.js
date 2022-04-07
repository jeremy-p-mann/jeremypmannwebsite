import * as React from "react";
import Layout from "../components/layout";
import Paragraph from "../components/paragraph";

const Artwork = () => {
  const title = "Artwork";
  const content = (
    <div>
      <Paragraph>I also enjoy making art.</Paragraph>
      <Paragraph>
        Below is a relic from a period in my life when I loved all things
        simplicial, even it’s more degenerate facets.
      </Paragraph>
      <Paragraph>
        The standard representation of chains on the 2 simplex, for those who
        prefer to think of sequences of linear maps in terms of feedforward
        networks. The fundamental technique of algebraic topology consists of
        encoding geometry in terms of linear maps.
      </Paragraph>
      <Paragraph>
        The standard representation of chains on the 2 simplex, for those who
        prefer to think of sequences of linear maps in terms of feedforward
        networks. The fundamental technique of algebraic topology consists of
        encoding geometry in terms of linear maps.
      </Paragraph>
    </div>
  );
  return <Layout title={title}>{content}</Layout>;
};

export default Artwork;
