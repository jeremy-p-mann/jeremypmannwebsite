import * as React from "react";
import Layout from "../components/layout";
import Paragraph from "../components/paragraph";

const Pde = () => {
  const title = "Personal Development Environment";
  const content = (
        <Paragraph>
            Talk about your dotfiles. Make sure to say more than you need to
            in order for it to fill up all the space.
        </Paragraph>
    );
  return <Layout title={title}>{content}</Layout>;
};

export default Pde;
