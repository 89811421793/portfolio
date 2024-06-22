import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../../../components/SectionTitle";
import { FlexWrapper } from "../../../../../components/FlexWrapper";
import { Container } from "../../../../../components/Container";
import { SmallProject } from "./smallproject/SmallProject";

export const SmallProjects: React.FC = () => {
  return (
    <StyledProjects>
      <Container>
        <SectionTitle>#small-projects</SectionTitle>
        <FlexWrapper wrap='wrap'>
          <SmallProject
            list={"Discord.js TS JS"}
            title={"Bot boilerplate"}
            desc="Start creating scalable discord.js bot with typescript in seconds"
            to='Github <~>'
          />
           <SmallProject
            list={"VUE CSS JS"}
            title={"My blog"}
            desc="Front-end of my future blog website written in vue"
            to='Github <~>'
          />
          <SmallProject
            list={"Figma"}
            title={"Chess pro"}
            desc="Figma landing page about service for viewing chess tournaments"
            to='Figma <~>'
          />
         
          <SmallProject
            list={"Figma"}
            title={"Crash protect website"}
            desc="Figma template for website about anti-raid, anti-crash discord bot"
            to='Figma <~>'
          />
          <SmallProject
            list={"HTML CSS"}
            title={"CSS expirements"}
            desc="Collection of my different little projects in css"
            to='Live <~>'
          />
          <SmallProject
            list={"Lua NeoVim"}
            title={"Web Dev nvim config"}
            desc="Config for neovim perfect for web developer"
            to='Github <~>'
          />
          <SmallProject
            list={"Python Quart HTML"}
            title={"Ooku"}
            desc="Simple link shortener with auth"
            to='Live <~>'
          />
          <SmallProject
            list={"Figma"}
            title={"School website"}
            desc="Figma template website for my school"
            to='Figma <~>'
          />
        </FlexWrapper>
      </Container>
    </StyledProjects>
  );
};

const StyledProjects = styled.section`
  background-color: lime;
`;
