import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0;
  text-align: center;
`;
const NavLinkItem = styled.li`
  display: inline;
  padding-right: 2rem;
`;

const NavLink = styled(Link)`
  color: black;
`;

const NavWindow = () => {
  return (
    <NavLinks>
      <NavLinkItem>
        <NavLink to="/artwork"> Projects</NavLink>
      </NavLinkItem>
      <NavLinkItem>
        <NavLink to="/writing"> Writing</NavLink>
      </NavLinkItem>
      <NavLinkItem>
        <NavLink to="/pde"> PDE</NavLink>
      </NavLinkItem>
    </NavLinks>
  );
};

export default NavWindow;
