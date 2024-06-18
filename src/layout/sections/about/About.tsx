import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import aboutimg from "../../../assets/images/AboutImg.png";

export const About:React.FC = () => {
  return (
    <StyledAbout>
      <div>
        <SectionTitle>#about-me</SectionTitle>
        <span>Hello, i’m Elias!</span>
        <p>
          I’m a self-taught front-end developer based in Kyiv, Ukraine. I can
          develop responsive websites from scratch and raise them into modern
          user-friendly web experiences.
        </p>
        <p>
          Transforming my creativity and knowledge into a websites has been my
          passion for over a year. I have been helping various clients to
          establish their presence online. I always strive to learn about the
          newest technologies and frameworks.
        </p>
        <button>Read more -</button>
      </div>
<AboutImage src={aboutimg} alt=''/>
    </StyledAbout>
  );
};

const StyledAbout = styled.section`
  display:flex;
  min-height: 50vh;
  background-color: beige;
`;

const AboutImage = styled.img`
width:339px;
height:507px;
`
