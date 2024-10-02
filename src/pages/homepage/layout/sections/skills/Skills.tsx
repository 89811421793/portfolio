import React from "react";
import styled from "styled-components";
import { Skill } from "./skill/Skill";
import { SectionTitle } from "../../../../../components/SectionTitle";
import { FlexWrapper } from "../../../../../components/FlexWrapper";
import { Container } from "../../../../../components/Container";
import { StyledHash } from "../../../../../components/StyledHash";

export const Skills: React.FC = () => {
  return (
    <StyledSkills>
      <Container>
        <SectionTitle>
          <StyledHash>#</StyledHash>skills
        </SectionTitle>
        <FlexWrapper align={"center"} justify={"space-around"}>
          <SkillsDecor></SkillsDecor>
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

const StyledSkills = styled.section``;

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
    margin-top: -20px; /* Уменьшение расстояния между other и databases */
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
  min-width: 350px;
  height: 282px;
  border: 1px dashed;
  margin-right: 50px;
`;
