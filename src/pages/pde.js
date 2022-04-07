import * as React from "react";
import Layout from "../components/layout";
import Paragraph from "../components/paragraph";
import Url from "../components/url";

const Pde = () => {
  const title = "PDE";
  const pde_description = "github";
  const pde_url = "https://github.com/jmann277/dotfiles";
  const content = (
        <Paragraph>
            PDE is an acronym for personal development environment.
            I primarily use a combination of tmux and neovim.
            You can find the source code for my PDE
            on <Url url={pde_url} description={pde_description} />
        </Paragraph>
    );
  return <Layout title={title}>{content}</Layout>;
};

export default Pde;
