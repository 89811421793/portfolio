import React from "react";
import styled from "styled-components";
import { Skill } from "./skill/Skill";
import { SectionTitle } from "../../../../../components/SectionTitle";
import { FlexWrapper } from "../../../../../components/FlexWrapper";
import { Container } from "../../../../../components/Container";

export const Skills: React.FC = () => {
  return (
    <StyledSkills>
      <Container>
        <SectionTitle>#skills</SectionTitle>
        <FlexWrapper align={"center"} justify={"space-around"}>
          <SkillsGroup>
            <Skill
              title={"Languages"}
              list={"TypeScript Lua Python JavaScript"}
            />
            <Skill title={"Other"} list={"HTML CSS EJS SCSS REST Jinja"} />
            <Skill
              title={"Tools"}
              list={"VSCode Neovim Linux Figma XFCE Arch Git  Font Awesome"}
            />
            <Skill title={"Databases"} list={"SQLite PostgreSQL Mongo"} />
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
  background-color: lavender;
`;

const SkillsGroup = styled.div``;
