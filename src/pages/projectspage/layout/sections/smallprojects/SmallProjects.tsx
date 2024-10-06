import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../../../components/SectionTitle";
import { Container } from "../../../../../components/Container";
import { SmallProject } from "./smallproject/SmallProject";
import { StyledHash } from "../../../../../components/StyledHash";
import { theme } from "../../../../../styles/Theme";
import fivedotsimg from "../../../../../assets/images/Dots.png";
import rect from "../../../../../assets/images/rectangle.png";

export const SmallProjects: React.FC = () => {
  return (
    <StyledProjects>
      <DecorRect src={rect} alt=''/>
      <DotsImageLeft src={fivedotsimg} alt=''/>
      <DotsImageRight src={fivedotsimg} alt=''/>
      <Container>
        <SectionTitle>
          <SectionTitleLink href="#">
            <StyledHash>#</StyledHash>small-projects
          </SectionTitleLink>
        </SectionTitle>
        <FlexContainer>
          <SmallProject
            list={"Discord.js TS JS"}
            title={"Bot boilerplate"}
            desc="Start creating scalable discord.js bot with typescript in seconds"
            to="Github <~>"
          />
          <SmallProject
            list={"VUE CSS JS"}
            title={"My blog"}
            desc="Front-end of my future blog website written in vue"
            to="Github <~>"
          />
          <SmallProject
            list={"Figma"}
            title={"Chess pro"}
            desc="Figma landing page about service for viewing chess tournaments"
            to="Figma <~>"
          />
          <SmallProject
            list={"Figma"}
            title={"Crash protect website"}
            desc="Figma template for website about anti-raid, anti-crash discord bot"
            to="Figma <~>"
          />
          <SmallProject
            list={"HTML CSS"}
            title={"CSS experiments"}
            desc="Collection of my different little projects in css"
            to="Live <~>"
          />
          <SmallProject
            list={"Lua NeoVim"}
            title={"Web Dev nvim config"}
            desc="Config for neovim perfect for web developer"
            to="Github <~>"
          />
          <SmallProject
            list={"Python Quart HTML"}
            title={"Ooku"}
            desc="Simple link shortener with auth"
            to="Live <~>"
          />
          <SmallProject
            list={"Figma"}
            title={"School website"}
            desc="Figma template website for my school"
            to="Figma <~>"
          />
        </FlexContainer>
      </Container>
    </StyledProjects>
  );
};

const StyledProjects = styled.section`
  position: relative;
  min-height: 50vh;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 35px;
`;

const SectionTitleLink = styled.a`
  color: ${theme.colors.font};
`;


const DecorRect = styled.img`
width: 155px;
height: 155px;
position: absolute;
top: -2px;
left: -82px;
`;

const DotsImageLeft = styled.img`
width: 103px;
height: 103px;
position: absolute;
bottom: 210px;
left: -50px;
`;
const DotsImageRight = styled.img`
width: 103px;
height: 103px;
position: absolute;
top: 140px;
right: -18px;
`;