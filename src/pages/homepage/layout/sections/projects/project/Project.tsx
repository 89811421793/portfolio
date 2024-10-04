import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../../styles/Theme";

type ProjectPropsType = {
  src: string;
  list: string;
  title: string;
  desc: string;
  showCached: boolean;
  showGithub?: boolean;
  hideLive?: boolean
};

export const Project = (props: ProjectPropsType) => {
  return (
    <StyledProject>
      <ProjectImage src={props.src} alt="" />
      <TechnologyList>{props.list}</TechnologyList>
      <ProjectTitle>{props.title}</ProjectTitle>
      <ProjectDescription>{props.desc}</ProjectDescription>
      {props.showGithub ? ( // Условный рендеринг для кнопки GitHub
        <Link href="#">GitHub &lt;~&gt;</Link>
      ) : (
        props.hideLive ? null :<Link href="#">Live &lt;~&gt;</Link>
      )}
      {props.showCached && <CachedLink href="#">Cached &gt;=</CachedLink>}{" "}
      {/* Условный рендеринг */}
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
  font-family: Fira Code;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  border: 2px solid ${theme.colors.borderColor};
  color: ${theme.colors.borderColor};
  padding: 10px;
`;

const ProjectTitle = styled.h3`
  font-family: Fira Code;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  padding: 10px;
`;

const ProjectDescription = styled.p`
  font-family: Fira Code;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  color: ${theme.colors.borderColor};
  margin-bottom: 10px;
  padding: 10px;
`;

const Link = styled.a`
  font-family: Fira Code;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  border: 2px solid ${theme.colors.accent};
  margin-right: 10px;
  margin-left: 11px;
  color: ${theme.colors.font};
  margin-top: 15px;
  padding: 5px 10px;
`;

const CachedLink = styled.a`
  font-family: Fira Code;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  color: ${theme.colors.borderColor};
  border: 2px solid ${theme.colors.borderColor};
  margin-right: 10px;
  margin-left: 10px;
  padding: 5px 10px;
`;
