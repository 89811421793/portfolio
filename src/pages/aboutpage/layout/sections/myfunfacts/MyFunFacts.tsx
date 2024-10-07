import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../../../components/SectionTitle";
import { Container } from "../../../../../components/Container";
import { theme } from "../../../../../styles/Theme";
import { StyledHash } from "../../../../../components/StyledHash";
import fivedotsimg from "../../../../../assets/images/Dots.png";
import rect from "../../../../../assets/images/rectangle.png";
import logosign from "../../../../../assets/images/Logo.png";
import streaksimg from "../../../../../assets/images/streaks.png";

export const MyFunFacts: React.FC = () => {
  return (
    <StyledFacts>
      <DecorRect src={rect} alt="" />
      <Container>
        <SectionTitle>
          <SectionTitleLink href="#">
            <StyledHash>#</StyledHash>my-fun-facts
          </SectionTitleLink>
        </SectionTitle>
        <FactsGrid>
          <Fact className="div1">I like winter more than summer</Fact>
          <Fact className="div2">I often bike with my friends</Fact>
          <Fact className="div3">
            I like <FontHighLight>pizza</FontHighLight> and{" "}
            <FontHighLight>pasta</FontHighLight>
          </Fact>
          <Fact className="div4">
            I was in <FontHighLight>Egypt</FontHighLight>,{" "}
            <FontHighLight>Poland</FontHighLight>, and{" "}
            <FontHighLight>Turkey</FontHighLight>
          </Fact>
          <Fact className="div5">
            My favorite movie is <FontHighLight>The Green Mile</FontHighLight>
          </Fact>
          <Fact className="div6">I am still in school</Fact>
          <Fact className="div7">I don’t have any siblings</Fact>
        </FactsGrid>
        <StreaksImage src={streaksimg} alt="" />
        <LogoImage src={logosign} alt="" />
        <DotsImage src={fivedotsimg} alt="" />
      </Container>
    </StyledFacts>
  );
};

const StyledFacts = styled.section`
  position: relative;
  margin-bottom: 100px;
`;

const FactsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 21%);
  grid-template-rows: repeat(5, 25%);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  max-width: 600px;
  margin-top: 25px;
`;

const Fact = styled.span`
  font-family: Fira Code;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  border: 2px solid ${theme.colors.borderColor};
  display: flex;
  align-items: center;
  padding: 3px 4px;
  text-align: left;
  color: ${theme.colors.borderColor};

  /* Установка grid-area для каждой ячейки */
  &.div1 {
    grid-area: 1 / 1 / 2 / 4;
  }
  &.div2 {
    grid-area: 1 / 4 / 2 / 8;
  }
  &.div3 {
    grid-area: 2 / 1 / 3 / 3;
  }
  &.div4 {
    grid-area: 2 / 3 / 3 / 6;
  }
  &.div5 {
    grid-area: 3 / 1 / 4 / 4;
  }
  &.div6 {
    grid-area: 3 / 4 / 4 / 6;
  }
  &.div7 {
    grid-area: 4 / 1 / 5 / 3;
  }
`;

const FontHighLight = styled.span`
  color: ${theme.colors.font};
  display: inline-block;
  margin: 3px;
`;

const SectionTitleLink = styled.a`
  color: ${theme.colors.font};
`;

const DotsImage = styled.img`
  width: 103px;
  height: 103px;
  position: absolute;
  right: -2%;
  bottom: -18%;
`;

const DecorRect = styled.img`
  width: 155px;
  height: 155px;
  position: absolute;
  top: 32%;
  left: -8%;
`;

const LogoImage = styled.img`
  width: 113px;
  height: 113px;
  position: absolute;
  right: 14%;
  bottom: 22%;
`;

const StreaksImage = styled.img`
  width: 125px;
  height: 90px;
  position: absolute;
  right: 17%;
  top: 28%;
`;
