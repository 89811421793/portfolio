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
  background-color: olive;
`;
const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const TechnologyList = styled.div``;

const ProjectTitle = styled.h3``;

const ProjectDescription = styled.p``;

const Link = styled.a``;
