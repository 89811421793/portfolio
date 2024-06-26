import React from "react";
import styled from "styled-components";

type ProjectPropsType = {
  src: string;
  list: string;
  title: string;
  desc: string;
};

export const Project = (props: ProjectPropsType) => {
  return (
    <StyledProject>
      <ProjectImage src={props.src} alt="" />
      <TechnologyList>{props.list}</TechnologyList>
      <ProjectTitle>{props.title}</ProjectTitle>
      <ProjectDescription>{props.desc}</ProjectDescription>
      <Link href="#">Live ~</Link>
      <Link href="#">Cached =</Link>
    </StyledProject>
  );
};

const StyledProject = styled.div`
  margin-right: 10px;
`;
const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
 
`;

const TechnologyList = styled.div`
border: 2px solid navy;
`;

const ProjectTitle = styled.h3``;

const ProjectDescription = styled.p``;

const Link = styled.a``;
