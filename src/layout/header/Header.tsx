import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { Langswitcher } from "../../components/Langswitcher";

export const Header: React.FC = () => {
  return (
    <Styledheader>
      <Logo />
      <Menu />
    </Styledheader>
  );
};

const Styledheader = styled.header`
  background-color: salmon;
  display:flex;
  justify-content: space-between;
`;
