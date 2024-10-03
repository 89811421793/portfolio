import React from "react";
import styled from "styled-components";
import aboutimg from "../../../../../assets/images/AboutImg.png";
import { Container } from "../../../../../components/Container";
import { theme } from "../../../../../styles/Theme";
import { SectionTitle } from "../../../../../components/SectionTitle";
import { StyledSlash } from "../../../../../components/StyledSlash";

export const AboutInfo: React.FC = () => {
  return (
    <StyledAbout>
      <Container>
        <SectionTitle>
          <StyledSlash>/</StyledSlash>about-me
        </SectionTitle>
        <WhoAmIText>Who am I?</WhoAmIText>
        <AboutWrapper>
          <InfoWrapper>
            <Name>Hello, I’m Elias!</Name>
            <AboutText>
              I’m a self-taught front-end developer based in Kyiv, Ukraine. I
              can develop responsive websites from scratch and raise them into
              modern user-friendly web experiences.
            </AboutText>
            <AboutText>
              Transforming my creativity and knowledge into a websites has been
              my passion for over a year. I have been helping various clients to
              establish their presence online. I always strive to learn about
              the newest technologies and frameworks.
            </AboutText>
          </InfoWrapper>
          <AboutImage src={aboutimg} alt="About Elias" />
        </AboutWrapper>
      </Container>
    </StyledAbout>
  );
};

const StyledAbout = styled.section``;

const AboutWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 20px; /* Оставим отступ между колонками как в примере */
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 507px;
  color: ${theme.colors.borderColor};
  padding: 10px 0 50px 0; /* Оставим нижний отступ как в примере */
  max-width: 515px;
`;

const Name = styled.span`
  margin-top: 100px; /* Оставляем верхний отступ как в примере */
  margin-bottom: 45px; /* Оставляем нижний отступ как в примере */
`;

const AboutText = styled.p`
  max-width: 515px;
  margin-bottom: 50px;
`;

const AboutImage = styled.img`
  width: 339px;
  height: 507px;
`;

const WhoAmIText = styled.span`
  display: inline-block;
  margin-top: 17px;
`;
