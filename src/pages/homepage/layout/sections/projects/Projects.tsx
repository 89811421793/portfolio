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
import { theme } from "../../../../../styles/Theme";
import { Link } from "react-router-dom";
import rect from "../../../../../assets/images/rectangle.png";

export const Projects: React.FC = () => {
  return (
    <StyledProjects>
      <Container>
        <FlexContainer>
          <SectionTitle id="works">
            <Link to="/projects">
              <SectionTitleLink href="#">
                <StyledHash>#</StyledHash>projects
              </SectionTitleLink>
            </Link>
          </SectionTitle>
          <ViewAllLink as={Link} to="/projects">
            View all ~~&gt;
          </ViewAllLink>
        </FlexContainer>
        <FlexWrapper justify={"space-evenly"}>
          <Project
            src={chertNodes}
            list={"HTML SCSS Python Flask"}
            title={"ChertNodes"}
            desc="Minecraft servers hosting "
            showCached={true}
          />
          <Project
            src={protectX}
            list={"React Express Discord.js Node.js HTML SCSS Python Flask"}
            title={"ProtectX"}
            desc="Discord anti-crash bot"
            showCached={false}
          />
          <Project
            src={kahoot}
            list={"CSS Express Node.js"}
            title={"Kahoot Answers Viewer"}
            desc="Get answers to your kahoot quiz"
            showCached={false}
          />
        </FlexWrapper>
      </Container>
      <DecorSquare src={rect} alt="" />
    </StyledProjects>
  );
};

const StyledProjects = styled.section`
  min-height: 50vh;
  position: relative;
`;

const FlexContainer = styled.div`
  display: flex;
  padding-right: 20px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
`;

const ViewAllLink = styled.a`
  font-family: Fira Code;
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  color: ${theme.colors.font};
`;

const SectionTitleLink = styled.a`
  color: ${theme.colors.font};

  position: relative;

  &::before {
    content: "";
    display: block;
    width: 511px;
    height: 1px;
    background-color: ${theme.colors.accent};
    position: absolute;
    top: 55%;
    left: 185px;
    transform: translateY(-50%);
  }
`;

const DecorSquare = styled.img`
  width: 155px;
  height: 155px;
  position: absolute;
  bottom: 25%;
  right: -1%;
`;
