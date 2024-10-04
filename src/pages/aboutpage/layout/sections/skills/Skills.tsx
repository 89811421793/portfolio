import React from "react";
import styled from "styled-components";
import { Skill } from "./skill/Skill";
import { SectionTitle } from "../../../../../components/SectionTitle";
import { Container } from "../../../../../components/Container";
import { StyledHash } from "../../../../../components/StyledHash";
import { theme } from "../../../../../styles/Theme";

export const Skills: React.FC = () => {
  return (
    <StyledSkills>
      <Container>
        <SectionTitle>
          <SectionTitleLink href='#'>
          <StyledHash>#</StyledHash>skills
          </SectionTitleLink>
        </SectionTitle>
        <SkillsGroup>
          <Skill
            title={"Languages"}
            list={"TypeScript Lua Python JavaScript"}
          />
          <Skill title={"Other"} list={"HTML CSS EJS SCSS REST Jinja"} />
          <Skill
            title={"Tools"}
            list={"VSCode Neovim Linux Figma XFCE Arch Git Font Awesome"}
          />
          <Skill title={"Databases"} list={"SQLite PostgreSQL Mongo"} />
          <Skill
            title={"Frameworks"}
            list={"React Vue Disnake Discord.js Flask Express.js"}
          />
        </SkillsGroup>
      </Container>
    </StyledSkills>
  );
};

const StyledSkills = styled.section``;

const SkillsGroup = styled.div`
  display: flex;
  flex-wrap: nowrap; 
  justify-content: space-between; 
  align-items: flex-start; 
  overflow-x: auto; 
  margin-top: 30px;
`;

const SectionTitleLink = styled.a`
  color: ${theme.colors.font};
`;