import React from "react";
import styled from "styled-components";
import { Project } from "./project/Project";
import chertNodes from "./../../../../../assets/images/chert.jpeg";
import protectX from "./../../../../../assets/images/protectX.jpeg";
import kahoot from "./../../../../../assets/images/kahoot.png";
import { SectionTitle } from "../../../../../components/SectionTitle";
import { FlexWrapper } from "../../../../../components/FlexWrapper";
import { Container } from "../../../../../components/Container";
import { StyledHash } from "../../../../../components/StyledHash";

export const Projects: React.FC = () => {
  return (
    <StyledProjects>
      <Container>
        <FlexWrapper justify={"space-between"}>
          <SectionTitle>
            <StyledHash>#</StyledHash>projects
          </SectionTitle>
          <a href="#">View all ~~</a>
        </FlexWrapper>
        <FlexWrapper justify={"space-evenly"}>
        <Project
  src={chertNodes}
  list={"HTML SCSS Python Flask"}
  title={"ChertNodes"}
  desc="Minecraft servers hosting "
  showCached={true} // Кнопка Cached не отображается
/>
<Project
  src={protectX}
  list={"React Express Discord.js Node.js HTML SCSS Python Flask"}
  title={"ProtectX"}
  desc="Discord anti-crash bot"
  showCached={false} // Кнопка Cached отображается
/>
<Project
  src={kahoot}
  list={"CSS Express Node.js"}
  title={"Kahoot Answers Viewer"}
  desc="Get answers to your kahoot quiz"
  showCached={false} // Кнопка Cached не отображается
/>
        </FlexWrapper>
      </Container>
    </StyledProjects>
  );
};

const StyledProjects = styled.section``;
