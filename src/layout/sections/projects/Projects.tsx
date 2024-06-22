import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Project } from "./project/Project";
import chertNodes from "./../../../assets/images/chert.jpeg";
import protectX from "./../../../assets/images/protectX.jpeg";
import kahoot from "./../../../assets/images/kahoot.png";
import cat from "./../../../assets/images/kotik.png";
import elias from "./../../../assets/images/Elias.png";
import { Container } from "../../../components/Container";

export const Projects: React.FC = () => {
  return (
    <StyledProjects>
      <Container>
        <SectionTitle>#projects</SectionTitle>
        <a href="#">View all ~~</a>
        <FlexWrapper justify={"space-evenly"} wrap="wrap">
          <Project
            src={chertNodes}
            list={"HTML SCSS Python Flask"}
            title={"ChertNodes"}
            desc="Minecraft servers hosting "
          />
          <Project
            src={protectX}
            list={"React Express Discord.js Node.js HTML SCSS Python Flask"}
            title={"ProtectX"}
            desc="Discord anti-crash bot"
          />
          <Project
            src={kahoot}
            list={"CSS Express Node.js"}
            title={"Kahoot Answers Viewer"}
            desc="Get answers to your kahoot quiz"
          />
          <Project
            src={cat}
            list={"HTML CSS JS"}
            title={"Kotik Bot"}
            desc="Multi-functional discord bot"
          />
          <Project
            src={elias}
            list={"Vue TS Less"}
            title={"Portfolio"}
            desc="You’re using it rn"
          />
        </FlexWrapper>
      </Container>
    </StyledProjects>
  );
};

const StyledProjects = styled.section`
  min-height: 40vh;
  background-color: lime;
`;
