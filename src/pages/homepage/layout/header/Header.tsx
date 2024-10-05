import React from "react";
import styled from "styled-components";
import { Container } from "../../../../components/Container";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { Menu } from "../../../../components/menu/Menu";
import { Logo } from "../../../../components/logo/Logo";




const items = ["#home", "#works", "#about-me", "#contacts"];

export const Header: React.FC = () => {





  return (
    <StyledHeader>
      <Container>
      <FlexWrapper justify='space-between'>
      <Logo />
      <Menu menuItems={items} 
      
      
      
      />
      </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
`;
