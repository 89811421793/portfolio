import React from "react";
import styled from "styled-components";

type ProjectPropsType = {
  list: string;
  title: string;
  desc: string;
  to: string;
};

export const SmallProject = (props: ProjectPropsType) => {
  return (
    <StyledProject>
      <TechnologyList>{props.list}</TechnologyList>
      <ProjectTitle>{props.title}</ProjectTitle>
      <ProjectDescription>{props.desc}</ProjectDescription>
      <Link href="#">{props.to}</Link>
    </StyledProject>
  );
};

const StyledProject = styled.div`
  margin-right: 10px;
`;

const TechnologyList = styled.div`
border: 2px solid navy;
`;

const ProjectTitle = styled.h3``;

const ProjectDescription = styled.p``;

const Link = styled.a``;
