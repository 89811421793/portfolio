import React from "react";
import styled from "styled-components";
import aboutimg from "../../../../../assets/images/AboutImg.png";
import { SectionTitle } from "../../../../../components/SectionTitle";
import { Button } from "../../../../../components/Button";
import { Container } from "../../../../../components/Container";
import { StyledHash } from "../../../../../components/StyledHash";
import { theme } from "../../../../../styles/Theme";
import { Link } from "react-router-dom";

export const About: React.FC = () => {
  return (
    <StyledAbout>
      <Container>
        <SectionTitle id="about-me">
          <Link to="/about">
            <SectionTitleLink href="#">
              <StyledHash>#</StyledHash>about-me
            </SectionTitleLink>
          </Link>
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
            <Link to="/about">
              <StyledButton>Read more &rarr;</StyledButton>
            </Link>
          </AboutInfo>
          <AboutImageWrapper>
          <AboutImage src={aboutimg} alt="" />
          </AboutImageWrapper>
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
  font-family: Fira Code;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
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
`;
const AboutImage = styled.img`
  width: 339px;
  height: 507px;
`;

const AboutImageWrapper = styled.div`
  position: relative;
  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    width: 271px;
    height: 1px;
    left: 47px;
    border-bottom: 1px solid ${theme.colors.accent};
  }
`;

const StyledButton = styled(Button)`
  font-family: Fira Code;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
`;

const SectionTitleLink = styled.a`
  color: ${theme.colors.font};

  position: relative;

  &::before {
    content: "";
    display: block;
    width: 326px;
    height: 1px;
    background-color: ${theme.colors.accent};
    position: absolute;
    top: 55%;
    left: 190px;
    transform: translateY(-50%);
  }
`;




