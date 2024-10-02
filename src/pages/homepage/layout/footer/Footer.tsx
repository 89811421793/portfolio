import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { Icon } from "../../../../components/icon/Icon";
import { Logo } from "../../../../components/logo/Logo";
import { Container } from "../../../../components/Container";
import { theme } from "../../../../styles/Theme";

export const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Container>
        <FooterContent>
          <InfoWrapper>
            <FlexAligner>
              <StyledLogoWrapper>
                <Logo />
              </StyledLogoWrapper>
              <MailLink href="#">elias@elias-dev.ml</MailLink>
            </FlexAligner>
            <StyledH3>Web designer and front-end developer</StyledH3>
          </InfoWrapper>
          <MediaList>
            <FlexWrapper>
              <MediaItem>
                <MediaLink href="#">
                  <Icon iconId={"github"} />
                </MediaLink>
              </MediaItem>
              <MediaItem>
                <MediaLink href="#">
                  <Icon iconId={"figma"} />
                </MediaLink>
              </MediaItem>
              <MediaItem>
                <MediaLink href="#">
                  <Icon iconId={"discord"} />
                </MediaLink>
              </MediaItem>
            </FlexWrapper>
          </MediaList>
        </FooterContent>
        <Copyright>© Copyright 2022. Made by Elias</Copyright>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  border-top: 2px solid ${theme.colors.borderColor};
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: flex-start; 
  margin-bottom: 8px; 
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column; 
  gap: 5px; 
`;

const FlexAligner = styled.div`
  display: flex;
  align-items: center; 
`;

const StyledLogoWrapper = styled.div`
  display: flex;
  align-items: center; 
`;

const MediaList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MediaItem = styled.li``;

const MediaLink = styled.a``;

const Copyright = styled.small`
  display: block;
  text-align: center;
  margin-top: 20px;
  color: ${theme.colors.borderColor};
`;

const MailLink = styled.a`
margin-left: 60px;
`;

const StyledH3 = styled.h3`
font-weight: 400;
`