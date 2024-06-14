import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";

const items = ["#home", "#works", "#about-me", "#contacts"];

export const Header: React.FC = () => {
  return (
    <Styledheader>
      <Logo />
      <Menu menuItems={items} />
    </Styledheader>
  );
};

const Styledheader = styled.header`
  background-color: salmon;
  display: flex;
  justify-content: space-between;
`;
