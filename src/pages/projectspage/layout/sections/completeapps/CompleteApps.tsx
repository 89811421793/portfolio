import React from "react";
import styled from "styled-components";
import chertNodes from "./../../../../../assets/images/chert.jpeg";
import protectX from "./../../../../../assets/images/protectX.jpeg";
import kahoot from "./../../../../../assets/images/kahoot.png";
import cat from "./../../../../../assets/images/kotik.png";
import elias from "./../../../../../assets/images/Elias.png";
import { SectionTitle } from "../../../../../components/SectionTitle";
import { FlexWrapper } from "../../../../../components/FlexWrapper";
import { Container } from "../../../../../components/Container";
import { Project } from "../../../../homepage/layout/sections/projects/project/Project";
import { StyledHash } from "../../../../../components/StyledHash";

export const CompleteApps: React.FC = () => {
  return (
    <StyledProjects>
      <Container>
        <SectionTitle>
          <StyledHash>#</StyledHash>complete-apps
        </SectionTitle>
        <FlexWrapper wrap="wrap">
          <Project
            src={chertNodes}
            list={"HTML SCSS Python Flask"}
            title={"ChertNodes"}
            desc="Minecraft servers hosting "
            showCached={true}
          />
          <Project
            src={kahoot}
            list={"CSS Express Node.js"}
            title={"Kahoot Answers Viewer"}
            desc="Get answers to your kahoot quiz"
            showCached={true}
          />
          <Project
            src={protectX}
            list={"React Express Discord.js Node.js HTML SCSS Python Flask"}
            title={"ProtectX"}
            desc="Discord anti-crash bot"
            showCached={true}
          />

          <Project
            src={cat}
            list={"HTML CSS JS"}
            title={"Kotik Bot"}
            desc="Multi-functional discord bot"
            showCached={true}
          />
          <Project
            src={elias}
            list={"Vue TS Less"}
            title={"Portfolio"}
            desc="You’re using it rn"
            showCached={true}
          />
        </FlexWrapper>
      </Container>
    </StyledProjects>
  );
};

const StyledProjects = styled.section`
  min-height: 40vh;
`;
