import React from "react";
import styled from "styled-components";
import aboutimg from "../../../../../assets/images/AboutImg.png";
import { SectionTitle } from "../../../../../components/SectionTitle";
import { Button } from "../../../../../components/Button";
import { Container } from "../../../../../components/Container";
import { FlexWrapper } from "../../../../../components/FlexWrapper";

export const About: React.FC = () => {
  return (
    <StyledAbout>
      <Container>
          <SectionTitle>#about-me</SectionTitle>
          <FlexWrapper justify='space-between'>
          <AboutInfo>
          <span>Hello, i’m Elias!</span>
          <p style={{maxWidth:'515px'}}>
            I’m a self-taught front-end developer based in Kyiv, Ukraine. I can
            develop responsive websites from scratch and raise them into modern
            user-friendly web experiences.
          </p>
          <p style={{maxWidth:'515px'}}>
            Transforming my creativity and knowledge into a websites has been my
            passion for over a year. I have been helping various clients to
            establish their presence online. I always strive to learn about the
            newest technologies and frameworks.
          </p>
          <Button>Read more -</Button>
        </AboutInfo>
        <AboutImage src={aboutimg} alt="" />
        </FlexWrapper>
      </Container>
    </StyledAbout>
  );
};

const StyledAbout = styled.section`
`;

const AboutInfo = styled.div`
display:flex;
flex-direction: column;
align-self:center;
`;

const AboutImage = styled.img`
  width: 339px;
  height: 507px;
`;
