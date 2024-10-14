import React from "react";
import styled from "styled-components";
import { Icon } from "../../../../../components/icon/Icon";
import { SectionTitle } from "../../../../../components/SectionTitle";
import { Container } from "../../../../../components/Container";
import { StyledHash } from "../../../../../components/StyledHash";
import { theme } from "../../../../../styles/Theme";
import fourdotsimg from "../../../../../assets/images/FDots.png";

export const AllMedia: React.FC = () => {
  return (
    <StyledMedia>
      <FDotsImage src={fourdotsimg} alt="" />
      <Container>
        <SectionTitle>
          <SectionTitleLink href="#">
            <StyledHash>#</StyledHash>all-media
          </SectionTitleLink>
        </SectionTitle>
        <MediaItem>
          <MediaItemLink href="">
            <Icon iconId={"twitter"} />
            @elias
          </MediaItemLink>
        </MediaItem>
        <MediaItem>
          <MediaItemLink href="">
            <Icon iconId={"twitter"} />
            @elias
          </MediaItemLink>
        </MediaItem>
      </Container>
    </StyledMedia>
  );
};

const StyledMedia = styled.section`
  min-height: 30vh;
  position: relative;
`;

const MediaItem = styled.div`
  display: inline-flex;
  align-items: center;
  margin-top: 30px;
  margin-right: 25px;
`;

const MediaItemLink = styled.a`
  display: inline-flex;
  font-family: Fira Code;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  margin-left: 5px;
  align-items: center;


  &:hover {
    color: ${theme.colors.font};

    svg {
      color: ${theme.colors.font}; // This will change the icon color on hover
    }
  }
`;

const SectionTitleLink = styled.a`
  color: ${theme.colors.font};
`;

const FDotsImage = styled.img`
  width: 109px;
  height: 49px;
  position: absolute;
  top: 15%;
  left: -3%;
`;
