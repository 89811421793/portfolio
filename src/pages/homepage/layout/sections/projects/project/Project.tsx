import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../../styles/Theme";

type ProjectPropsType = {
  src: string;
  list: string;
  title: string;
  desc: string;
  showCached: boolean;
};

export const Project = (props: ProjectPropsType) => {
  return (
    <StyledProject>
      <ProjectImage src={props.src} alt="" />
      <TechnologyList>{props.list}</TechnologyList>
      <ProjectTitle>{props.title}</ProjectTitle>
      <ProjectDescription>{props.desc}</ProjectDescription>
      <Link href="#">Live &lt;~&gt;</Link>
      {props.showCached && <CachedLink href="#">Cached &gt;=</CachedLink>} {/* Условный рендеринг */}
    </StyledProject>
  );
};

const StyledProject = styled.div`
  margin-right: 10px;
  border: 2px solid ${theme.colors.borderColor};
  padding-bottom: 15px; 
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
`;

const TechnologyList = styled.div`
  border: 2px solid ${theme.colors.borderColor};
  color: ${theme.colors.borderColor};
  padding: 10px;
`;

const ProjectTitle = styled.h3`
  padding: 10px;
`;

const ProjectDescription = styled.p`
  color: ${theme.colors.borderColor};
  margin-bottom: 10px;
  padding: 10px;
`;

const Link = styled.a`
  border: 2px solid ${theme.colors.accent};
  margin-right: 10px;
  margin-left: 11px;
  color: ${theme.colors.font};
  margin-top: 15px; 
  padding: 5px 10px;
`;

const CachedLink = styled.a`
  color: ${theme.colors.borderColor}; 
  border: 2px solid ${theme.colors.borderColor}; 
  margin-right: 10px;
  padding: 5px 10px;
`;