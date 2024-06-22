import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Container } from "../../components/Container";


const items = ["#home", "#works", "#about-me", "#contacts"];

export const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Container>
      <FlexWrapper justify='space-between'>
      <Logo />
      <Menu menuItems={items} />
      </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: salmon;
`;
