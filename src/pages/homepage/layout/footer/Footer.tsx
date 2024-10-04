import React from "react";
import styled from "styled-components";
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
            <MediaTitle>Media</MediaTitle>
            <MediaIconsWrapper>
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
            </MediaIconsWrapper>
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

const MediaList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MediaTitle = styled.h4`
font-family: Fira Code;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  margin-bottom: 10px;
  text-align: left;
  width: 100%;
`;

const MediaIconsWrapper = styled.ul`
  display: flex;
  gap: 10px;
  padding: 0;
  margin: 0;
`;

const MediaItem = styled.li``;

const MediaLink = styled.a``;

const Copyright = styled.small`
  font-family: Fira Code;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  display: block;
  text-align: center;
  margin-top: 20px;
  color: ${theme.colors.borderColor};
`;

const MailLink = styled.a`
  font-family: Fira Code;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  margin-left: 30px;
`;

const StyledH3 = styled.h3`
  font-family: Fira Code;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
`;
