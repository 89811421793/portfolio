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
          <ContentWrapper>
            <MainTitle>
              Elias is a <Skill>web designer</Skill>{" "}
              and <Skill>front-end developer</Skill>
            </MainTitle>
            <Description>
              He crafts responsive websites where technologies meet creativity
            </Description>
            <StyledButton>Contact me!!</StyledButton>
          </ContentWrapper>
          <figure>
            <MainImage src={mainimg} alt="" />
            <StyledFigcaption>
              <Square></Square>
              <Status>Currently working on</Status>{" "}
              <Portfolio>Portfolio</Portfolio>
            </StyledFigcaption>
          </figure>
        </FlexWrapper>

        <QuoteGrid>
          <Quotation>
            <QuoteMark/>
            <p>With great power comes great electricity bill</p>
          </Quotation>
          <AuthorCite>
            <CiteMark/>
            <span>- Dr. Who</span>
          </AuthorCite>
        </QuoteGrid>
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
  max-width: 450px;
  margin-bottom: 30px;
`;

const Description = styled.p`
  margin: 30px 0;
  color: ${theme.colors.borderColor};
`;

const StyledButton = styled(Button)`
  margin-top: 30px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
`;

const QuoteGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr; // Одна колонка для цитаты и автора
  max-width: 712px; // Максимальная ширина блока
  margin: 20px auto; // Центрируем блок
  margin-top:80px;
`;

const Quotation = styled.blockquote`
  position: relative;
  padding: 32px 30px;
  border: 2px solid #ABB2BF;
  text-align: left; 

  &:before {
    content: '';
    position: absolute;
    top: -16px;
    left: 16px;
    font-size: 40px;
    color: ${theme.colors.accent};
  }
`;

const AuthorCite = styled.cite`
  border: 2px solid #abb2bf;
  padding: 15px 30px;
  font-style: normal;
  display: block;
  text-align: right; 
  position: relative; 
  width: fit-content; 
  margin-left: auto; 
  padding-left: 8px; 
`;

const QuoteMark = styled.span`
  position: absolute;
  top: -16px;
  left: 16px;
  font-size: 40px;
  color: ${theme.colors.accent};
`;

const CiteMark = styled.span`
  position: absolute;
  top: -16px;
  right: 16px;
  font-size: 40px;
  color: ${theme.colors.accent};
`;

const StyledFigcaption = styled.figcaption`
  border: 2px solid #ABB2BF;
  padding: 8px;
`;

const Square = styled.span`
  background-color: ${theme.colors.accent};
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  vertical-align: middle;
`;

const Skill = styled.span`
  color: ${theme.colors.accent};
`;

const Portfolio = styled.span`
  color: "#FFF";
`;

const Status = styled.span`
  color: ${theme.colors.borderColor};
`;