import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../../../components/SectionTitle";
import { Container } from "../../../../../components/Container";

export const MyFunFacts: React.FC = () => {
  return (
    <StyledFacts>
      <Container>
        <SectionTitle>#my-fun-facts</SectionTitle>
        <Fact>I like winter more than summer</Fact>
        <Fact>I often bike with my friends</Fact>
        <Fact>I like pizza and pasta</Fact>
        <Fact>I was in Egypt, Poland and Turkey</Fact>
        <Fact>My favorite movie is The Green Mile</Fact>
        <Fact>I am still in school</Fact>
        <Fact>I don’t have any siblings</Fact>
      </Container>
    </StyledFacts>
  );
};

const StyledFacts = styled.section`
`;

const Fact = styled.span`
  border: 2px solid chocolate;
`;
