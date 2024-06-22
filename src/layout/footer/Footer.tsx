import React from "react";
import styled from "styled-components";
import { Container } from "../../components/Container";
import { Logo } from "../../components/logo/Logo";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";

export const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Container>
        <FlexWrapper justify='space-between'>
        <div>
          <Logo />
          <a href="#">elias@elias-dev.ml</a>
          <h3>Web designer and front-end developer</h3>
        </div>
        <div>
          <span>Media</span>
          <MediaList>
            <FlexWrapper>
              <MediaItem>
                <MediaLink href='#'>
                  <Icon iconId={"github"} />
                </MediaLink>
              </MediaItem>

              <MediaItem>
                <MediaLink href='#'>
                  <Icon iconId={"figma"} />
                </MediaLink>
              </MediaItem>

              <MediaItem>
                <MediaLink href='#'>
                  <Icon iconId={"discord"} />
                </MediaLink>
              </MediaItem>
            </FlexWrapper>
          </MediaList>
        </div>
        </FlexWrapper>
        <Copyright>© Copyright 2022. Made by Elias</Copyright>
      
       
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: orange;
`;

const MediaList = styled.ul`
  list-style: none;

`;

const MediaItem = styled.li`
`;

const MediaLink = styled.a`
`;

const Copyright = styled.small``;
