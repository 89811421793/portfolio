import React from "react";
import styled from "styled-components";
import mainimg from "../../../../../assets/images/MainImg.png";
import logosign from "../../../../../assets/images/Logo.png";
import fivedotsimg from "../../../../../assets/images/Dots.png";
import rect from "../../../../../assets/images/rectangle.png";
import { Button } from "../../../../../components/Button";
import { Container } from "../../../../../components/Container";
import { theme } from "../../../../../styles/Theme";
import { Icon } from "../../../../../components/icon/Icon";
import { Projects } from "../projects/Projects";
import { Skills } from "../skills/Skills";
import { About } from "../about/About";
import { Contacts } from "../contacts/Contacts";

export const Main: React.FC = () => {
  return (
    <StyledMain>
      <Container>
        <FlexContainer>
          <ContentWrapper id="home">
            <MainTitle>
              Elias is a <Skill>web designer</Skill> and{" "}
              <Skill>front-end developer</Skill>
            </MainTitle>
            <Description>
              He crafts responsive websites where technologies meet creativity
            </Description>
            <StyledButton>Contact me!!</StyledButton>
          </ContentWrapper>
          <StyledFigure>
            <LogoEmblemImage src={logosign} alt="" />
            <DotsImage src={fivedotsimg} alt="" />
            <MainImage src={mainimg} alt="" />
            <StyledFigcaption>
              <Square></Square>
              <Status>Currently working on</Status>{" "}
              <Portfolio>Portfolio</Portfolio>
            </StyledFigcaption>
          </StyledFigure>
        </FlexContainer>
        <QuoteGrid>
          <Quotation>
            <QuoteMark>
              <Icon
                iconId="quotes"
                width="40"
                height="40"
                viewBox="0 0 38 40"
              />
            </QuoteMark>
            <p>With great power comes great electricity bill</p>
            <Rect src={rect} alt="" />
          </Quotation>
          <AuthorCite>
            <CiteMark>
              <Icon
                iconId="quotes"
                width="40"
                height="40"
                viewBox="0 0 38 40"
              />
            </CiteMark>
            <span>- Dr. Who</span>
          </AuthorCite>
        </QuoteGrid>
      </Container>
      <Projects />
      <Skills />
      <About />
      <Contacts />
    </StyledMain>
  );
};

const StyledMain = styled.section`
  min-height: 50vh;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media ${theme.media.tablet} {
    flex-wrap: wrap;
    margin-top: 34px;
  }
`;

const MainImage = styled.img`
  width: 457px;
  height: 386px;

  @media ${theme.media.tablet} {
    width: 308px;
    height: 260px;
  }
`;

const DotsImage = styled.img`
  width: 84px;
  height: 84px;
  position: absolute;
  bottom: 23%;
  right: 3%;

  @media ${theme.media.tablet} {
    width: 56px;
    height: 56px;
    bottom: 33%;
    right: 9%;
  }
`;

const LogoEmblemImage = styled.img`
  width: 155px;
  height: 155px;
  position: absolute;
  z-index: -1;
  top: 20%;
  left: -3%;

  @media ${theme.media.tablet} {
    width: 104px;
    height: 104px;
  }
`;

const StyledFigure = styled.figure`
  position: relative;
  margin-left: 30px;

  @media ${theme.media.tablet} {
    margin-left: 16px;
  }
`;

const Rect = styled.img`
  width: 91px;
  height: 91px;
  position: absolute;
  top: 15%;
  right: -50%;
`;

const MainTitle = styled.h1`
  font-family: Fira Code;
  font-weight: 600;
  font-size: 32px;
  line-height: 42px;
  max-width: 537px;
  margin-bottom: 30px;
`;

const Description = styled.p`
  font-family: Fira Code;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  margin: 15px 0;
  color: ${theme.colors.borderColor};
  max-width: 465px;

  @media ${theme.media.tablet} {
    line-height: 21px;
  }
`;

const StyledButton = styled(Button)`
  font-family: Fira Code;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  margin-top: 30px;

  @media ${theme.media.tablet} {
    display: none;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;

  @media ${theme.media.tablet} {
    margin-left: 16px;
  }
`;

const QuoteGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr; // Одна колонка для цитаты и автора
  max-width: 712px; // Максимальная ширина блока
  margin: 20px auto; // Центрируем блок
  margin-top: 80px;
`;

const Quotation = styled.blockquote`
  position: relative;
  padding: 32px 30px;
  border: 2px solid #abb2bf;
  text-align: left;

  p {
    font-family: Fira Code;
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    color: ${theme.colors.font};
  }
`;

const AuthorCite = styled.cite`
  border: 2px solid #abb2bf;
  border-top: transparent;
  padding: 15px 30px;
  font-style: normal;
  display: block;
  text-align: right;
  position: relative;
  width: fit-content;
  margin-left: auto;
  padding-left: 8px;

  span {
    font-family: Fira Code;
    font-weight: 400;
    font-size: 24px;
    line-height: 30px;
  }
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
  border: 2px solid #abb2bf;
  padding: 8px;
`;

const Square = styled.span`
  background-color: ${theme.colors.accent};
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  vertical-align: middle;

  @media ${theme.media.tablet} {
    display: inline-block;
    transform: translateY(50%);
  }
`;

const Skill = styled.span`
  color: ${theme.colors.accent};
`;

const Portfolio = styled.span`
  font-family: Fira Code;
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  color: "#FFF";

  @media ${theme.media.tablet} {
    margin-left: 31px;
  }
`;

const Status = styled.span`
  font-family: Fira Code;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  color: ${theme.colors.borderColor};
`;
