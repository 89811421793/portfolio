import React from "react";
import styled from "styled-components";
import { Icon } from "../../../../../components/icon/Icon";
import { SectionTitle } from "../../../../../components/SectionTitle";
import { Container } from "../../../../../components/Container";
import { StyledHash } from "../../../../../components/StyledHash";

export const AllMedia = () => {
  return (
    <StyledMedia>
      <Container>
        <SectionTitle>
          <StyledHash>#</StyledHash>all-media
        </SectionTitle>
        <MediaItem>
          <Icon iconId={"twitter"} />
          <MediaItemLink href="">@elias</MediaItemLink>
        </MediaItem>
        <MediaItem>
          <Icon iconId={"twitter"} />
          <MediaItemLink href="">@elias</MediaItemLink>
        </MediaItem>
      </Container>
    </StyledMedia>
  );
};

const StyledMedia = styled.section`
  min-height: 30vh;
`;

const MediaItem = styled.div`
  display: inline-flex;
  align-items: center;
  margin-top: 30px;
  margin-right: 25px;
`;

const MediaItemLink = styled.a`
  font-family: Fira Code;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  margin-left: 5px;
`;
