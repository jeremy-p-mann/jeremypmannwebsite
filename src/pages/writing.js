import * as React from "react";
import Layout from "../components/layout";
import Paragraph from "../components/paragraph";

const Writing = () => {
  const title = "Writing";
  const content = (
        <Paragraph>
            Talk about your Artwork. Make sure to say more than you need to
            in order for it to fill up all the space.
        </Paragraph>
    );
  return <Layout title={title}>{content}</Layout>;
};

export default Writing;
