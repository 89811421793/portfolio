import React, { useEffect } from "react";
import styled from "styled-components";
import aboutimg from "../../../../../assets/images/AboutImg.png";
import fivedotsimg from "../../../../../assets/images/Dots.png";
import fourdotsimg from "../../../../../assets/images/FDots.png";
import rect from "../../../../../assets/images/rectangle.png";
import { Container } from "../../../../../components/Container";
import { theme } from "../../../../../styles/Theme";
import { SectionTitle } from "../../../../../components/SectionTitle";
import { StyledSlash } from "../../../../../components/StyledSlash";
import { AboutSkills } from "../skills/AboutSkills";
import { MyFunFacts } from "../myfunfacts/MyFunFacts";
import { useLocation } from "react-router-dom";

export const AboutInfo: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const sectionTitle = document.querySelector("#about-me");
    if (sectionTitle) {
      sectionTitle.scrollIntoView();
    }
  }, [location.pathname]);

  return (
    <StyledAbout>
      <FDotsImageLeft src={fourdotsimg} alt="" />
      <Container>
        <SectionTitle>
          <SectionTitleLink href="#" id="about-me">
            <StyledSlash>/</StyledSlash>about-me
          </SectionTitleLink>
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
          <AboutImageWrapper>
            <DotsImage src={fivedotsimg} alt="" />
            <DecorRect src={rect} alt="" />
            <FDotsImageRight src={fourdotsimg} alt="" />
            <AboutImage src={aboutimg} alt="About Elias" />
          </AboutImageWrapper>
        </AboutWrapper>
      </Container>
      <AboutSkills />
      <MyFunFacts />
    </StyledAbout>
  );
};

const StyledAbout = styled.section`
  min-height: 50vh;
  position: relative;
`;

const AboutWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 20px;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 507px;
  color: ${theme.colors.borderColor};
  padding: 10px 0 50px 0;
  max-width: 515px;
`;

const Name = styled.span`
  font-family: Fira Code;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  margin-top: 100px;
  margin-bottom: 45px;
`;

const AboutText = styled.p`
  font-family: Fira Code;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  max-width: 515px;
  margin-bottom: 50px;
`;

const AboutImage = styled.img`
  width: 339px;
  height: 507px;
`;

const AboutImageWrapper = styled.div`
  position: relative;

  &::after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    width: 271px;
    height: 1px;
    left: 47px;
    border-bottom: 1px solid ${theme.colors.accent};
  }
`;

const WhoAmIText = styled.span`
  font-family: Fira Code;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  display: inline-block;
  margin-top: 17px;
`;

const SectionTitleLink = styled.a`
  color: ${theme.colors.font};
`;

const FDotsImageLeft = styled.img`
  width: 109px;
  height: 49px;
  position: absolute;
  left: -3%;
  bottom: 70%;
`;

const FDotsImageRight = styled.img`
  width: 104px;
  height: 56px;
  position: absolute;
  bottom: 34%;
  right: 6%;
`;

const DotsImage = styled.img`
  width: 84px;
  height: 84px;
  position: absolute;
  top: 12%;
  left: -2%;
`;

const DecorRect = styled.img`
  width: 155px;
  height: 155px;
  position: absolute;
  top: 11%;
  right: -60%;
`;
