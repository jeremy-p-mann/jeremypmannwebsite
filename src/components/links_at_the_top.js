import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-around;
  padding-left: 0;
  text-align: center;
  font-size: 18pt;
  font-weight: 400;
  margin-bottom: 2rem;
  @media (max-width: 600px) {
    font-size: 20px;
    font-weight: 400;
  }
`;
const NavLinkItem = styled.li`
  display: inline;
`;

const NavLink = styled(Link)`
  color: black;
`;

const NavWindow = () => {
  return (
    <header>
      <nav>
        <NavLinks>
          <NavLinkItem>
            <NavLink to="/"> About</NavLink>
          </NavLinkItem>
          <NavLinkItem>
            <NavLink to="/artwork"> Artwork</NavLink>
          </NavLinkItem>
          <NavLinkItem>
            <NavLink to="/writing"> Writing</NavLink>
          </NavLinkItem>
          <NavLinkItem>
            <NavLink to="/pde"> PDE</NavLink>
          </NavLinkItem>
        </NavLinks>
      </nav>
    </header>
  );
};

export default NavWindow;
