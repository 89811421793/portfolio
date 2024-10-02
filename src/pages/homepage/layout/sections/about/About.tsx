import React from "react";
import styled from "styled-components";
import aboutimg from "../../../../../assets/images/AboutImg.png";
import { SectionTitle } from "../../../../../components/SectionTitle";
import { Button } from "../../../../../components/Button";
import { Container } from "../../../../../components/Container";
import { StyledHash } from "../../../../../components/StyledHash";
import { theme } from "../../../../../styles/Theme";

export const About: React.FC = () => {
  return (
    <StyledAbout>
      <Container>
        <SectionTitle>
          <StyledHash>#</StyledHash>about-me
        </SectionTitle>
        <AboutWrapper>
          <AboutInfo>
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
            <Button>Read more &rarr;</Button>
          </AboutInfo>
          <AboutImage src={aboutimg} alt="" />
        </AboutWrapper>
      </Container>
    </StyledAbout>
  );
};

const StyledAbout = styled.section``;

const AboutWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto; 
  gap: 20px; 
`;

const AboutInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  height: 507px; 
  color: ${theme.colors.borderColor};
  padding: 10px 0 50px 0;
  max-width: 515px;
`;

const Name = styled.span`
  margin-top: 30px; 
  margin-bottom: 38px; 
`;

const AboutText = styled.p`
  max-width: 515px;
  margin-bottom: 5px; 
`
const AboutImage = styled.img`
  width: 339px;
  height: 507px;
`;
