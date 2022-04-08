import * as React from "react";
import Layout from "../components/layout";
import Paragraph from "../components/paragraph";
import two_simplex from "../images/two_simplex.png";
import simplicial_network from "../images/simplicial_network.png";
import Url from "../components/url";
import Image from "../components/image"

const Artwork = () => {
  const title = "Artwork";
  const content = (
    <div>
      <Paragraph>I also enjoy making art.</Paragraph>
      <Paragraph>
        Above is a relic from a period in my life when I loved all things
        simplicial, even it’s more degenerate facets.
      </Paragraph>
      <Image src={two_simplex} alt="All of the 2-simplex" />
      <Paragraph>
        A standard representation of chains on the 2 simplex, for those who
        prefer to think of sequences of linear maps in terms of feedforward
        networks. The fundamental technique of algebraic topology consists of
        encoding geometry in terms of linear maps.
      </Paragraph>
      <Image src={simplicial_network} alt="Photo of Jeremy Mann" />
    </div>
  );
  return <Layout title={title}>{content}</Layout>;
};

export default Artwork;
