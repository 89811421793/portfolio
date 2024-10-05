import React from "react";
import styled from "styled-components";
import chertNodes from "./../../../../../assets/images/chert.jpeg";
import protectX from "./../../../../../assets/images/protectX.jpeg";
import kahoot from "./../../../../../assets/images/kahoot.png";
import cat from "./../../../../../assets/images/kotik.png";
import elias from "./../../../../../assets/images/Elias.png";
import { SectionTitle } from "../../../../../components/SectionTitle";
import { Container } from "../../../../../components/Container";
import { Project } from "../../../../homepage/layout/sections/projects/project/Project";
import { StyledHash } from "../../../../../components/StyledHash";
import { StyledSlash } from "../../../../../components/StyledSlash";
import { theme } from "../../../../../styles/Theme";
import { SmallProjects } from "../smallprojects/SmallProjects";
import { useLocation } from 'react-router-dom';



export const CompleteApps: React.FC = () => {
  const location = useLocation();

  React.useLayoutEffect(() => {
    const sectionTitle = document.getElementById('projects');
    if (sectionTitle) {
      sectionTitle.scrollIntoView();
    }
  }, [location.pathname]);


  return (
    <StyledProjects>
      <Container>
        <SectionTitle>
          <SectionTitleLink id="projects" href="#">
            <StyledSlash>/</StyledSlash>projects
          </SectionTitleLink>
        </SectionTitle>
        <ProjectsListText>List of my projects</ProjectsListText>
        <SectionTitle>
          <SectionTitleLink href="#">
            <StyledHash>#</StyledHash>complete-apps
          </SectionTitleLink>
        </SectionTitle>
        <ProjectsContainer>
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
            showCached={false}
          />
          <Project
            src={protectX}
            list={"React Express Discord.js Node.js"}
            title={"ProtectX"}
            desc="Discord anti-crash bot"
            showCached={true}
            hideLive={true}
          />
          <Project
            src={cat}
            list={"HTML CSS JS"}
            title={"Kotik Bot"}
            desc="Multi-functional discord bot"
            showCached={false}
          />
          <Project
            src={elias}
            list={"Vue TS Less"}
            title={"Portfolio"}
            desc="You’re using it rn"
            showCached={false}
            showGithub={true}
          />
        </ProjectsContainer>
      </Container>
      <SmallProjects/>
    </StyledProjects>
    
  );
};



const StyledProjects = styled.section`
  min-height: 40vh;
`;

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 33%);
  row-gap: 12px;
  column-gap: 2px;
  margin-top: 40px;
`;

const ProjectsListText = styled.span`
  font-family: Fira Code;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  display: block;
  margin-top: 10px;
  margin-bottom: 70px;
`;

const SectionTitleLink = styled.a`
  color: ${theme.colors.font};
`;
