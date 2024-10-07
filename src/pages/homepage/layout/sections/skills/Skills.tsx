import React from "react";
import styled from "styled-components";
import { Skill } from "./skill/Skill";
import { SectionTitle } from "../../../../../components/SectionTitle";
import { FlexWrapper } from "../../../../../components/FlexWrapper";
import { Container } from "../../../../../components/Container";
import { StyledHash } from "../../../../../components/StyledHash";
import { theme } from "../../../../../styles/Theme";
import fivedotsimg from "../../../../../assets/images/Dots.png";
import rect from "../../../../../assets/images/rectangle.png";
import logosign from "../../../../../assets/images/Logo.png";

export const Skills: React.FC = () => {
  return (
    <StyledSkills>
      <Container>
        <SectionTitle>
          <SectionTitleLink href="#">
            <StyledHash>#</StyledHash>skills
          </SectionTitleLink>
        </SectionTitle>
        <EmptyBetween></EmptyBetween>
        <FlexWrapper align={"center"} justify={"space-around"}>
          <SkillsDecor>
            <DotsImageFirst src={fivedotsimg} alt="" />
            <DotsImageSecond src={fivedotsimg} alt="" />
            <DecorSquareBig src={rect} alt="" />
            <DecorSquareSmall src={rect} alt="" />
            <LogoImage src={logosign} alt="" />
          </SkillsDecor>
          <SkillsGroup>
            <Skill
              title={"Languages"}
              list={"TypeScript Lua Python JavaScript"}
            />
            <Skill title={"Databases"} list={"SQLite PostgreSQL Mongo"} />
            <Skill title={"Other"} list={"HTML CSS EJS SCSS REST Jinja"} />
            <Skill
              title={"Tools"}
              list={"VSCode Neovim Linux Figma XFCE Arch Git Font Awesome"}
            />
            <Skill
              title={"Frameworks"}
              list={"React Vue Disnake Discord.js Flask Express.js"}
            />
          </SkillsGroup>
        </FlexWrapper>
      </Container>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  min-height: 50vh;
`;

const SkillsGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  align-items: start;

  & > :nth-child(1) {
    grid-column: 1;
    grid-row: 1;
  }
  & > :nth-child(2) {
    grid-column: 2;
    grid-row: 1;
  }
  & > :nth-child(3) {
    grid-column: 2;
    grid-row: 2;
    margin-top: -20px; 
  }
  & > :nth-child(4) {
    grid-column: 3;
    grid-row: 1;
  }
  & > :nth-child(5) {
    grid-column: 3;
    grid-row: 2;
  }
`;

const SkillsDecor = styled.div`
  position: relative;
  min-width: 350px;
  height: 282px;
  margin-right: 65px;
`;

const DotsImageFirst = styled.img`
  width: 63px;
  height: 63px;
  position: absolute;
  top: -8%;
  left: 10%;
`;
const DotsImageSecond = styled.img`
  width: 63px;
  height: 63px;
  position: absolute;
  bottom: 40%;
  right: 25%;
`;

const DecorSquareBig = styled.img`
  width: 91px;
  height: 91px;
  position: absolute;
  top: -20%;
  right: 2%;
`;

const DecorSquareSmall = styled.img`
  width: 52px;
  height: 52px;
  position: absolute;
  bottom: 25%;
  right: -8%;
`;

const LogoImage = styled.img`
  width: 113px;
  height: 113px;
  position: absolute;
  bottom: 14%;
  left: 12%;
`;

const SectionTitleLink = styled.a`
  color: ${theme.colors.font};

  position: relative;

  &::before {
    content: "";
    display: block;
    width: 240px;
    height: 1px;
    background-color: ${theme.colors.accent};
    position: absolute;
    top: 55%;
    left: 148px;
    transform: translateY(-50%);
  }
`;

const EmptyBetween = styled.div`
  height: 40px;   /*вынужденный отступ - просто пустой div*/
`;
