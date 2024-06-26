import React from "react";
import styled from "styled-components";
import mainimg from "../../../../../assets/images/MainImg.png";
import { FlexWrapper } from "../../../../../components/FlexWrapper";
import { Button } from "../../../../../components/Button";
import { Container } from "../../../../../components/Container";
import { theme } from "../../../../../styles/Theme";

export const Main: React.FC = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper align="center" justify="space-around">
          <div>
            <MainTitle>
              Elias is a <span style={{ color: 'fuchsia' }}>web designer</span>{" "}
              and <span style={{ color: 'fuchsia' }}>front-end developer</span>
            </MainTitle>
            <p>
              He crafts responsive websites where technologies meet creativity
            </p>
            <Button>Contact me!!</Button>
          </div>
          <figure>
            <MainImage src={mainimg} alt="" />
            <figcaption style={{ border: "2px solid #ABB2BF", padding: 8 }}>
              <Square></Square>
              Currently working on{" "}
              <span style={{ color: "#FFF" }}>Portfolio</span>
            </figcaption>
          </figure>
        </FlexWrapper>
        <Quotation>
          <p style={{ border: "2px solid #ABB2BF" }}>
            With great power comes great electricity bill
          </p>
          <Cite>
            <span>- Dr. Who</span>
          </Cite>
        </Quotation>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section``;

const MainImage = styled.img`
  width: 457px;
  height: 386px;
`;

const MainTitle = styled.h1`
  maxwidth: "450px";
`;

const Quotation = styled.blockquote`
  position: relative;
  padding: 32px;
  max-width: 712px;

  &: before {
    position: absolute;
  }
`;

const Cite = styled.cite`
  border: 2px solid #abb2bf;
  padding: 16px;
  font-style: normal;
`;

const Square = styled.span`
background-color: ${theme.colors.accent};
display: inline-block;
width: 20px;
height: 20px;
margin-right: 10px;
vertical-align: middle;
`

