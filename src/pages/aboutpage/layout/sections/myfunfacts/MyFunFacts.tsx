import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../../../components/SectionTitle";
import { Container } from "../../../../../components/Container";
import { theme } from "../../../../../styles/Theme";
import { StyledHash } from "../../../../../components/StyledHash";

export const MyFunFacts: React.FC = () => {
  return (
    <StyledFacts>
      <Container>
        <SectionTitle>
          <StyledHash>#</StyledHash>my-fun-facts
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
      </Container>
    </StyledFacts>
  );
};

const StyledFacts = styled.section`
  display: flex;
  justify-content: flex-start;
`;

const FactsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
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
  padding: 2px 6px;
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
