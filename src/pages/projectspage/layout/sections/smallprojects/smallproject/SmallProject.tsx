import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../../styles/Theme";

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
      <SmallProjectContent>
        <ProjectTitle>{props.title}</ProjectTitle>
        <ProjectDescription>{props.desc}</ProjectDescription>
        <Link href="#">{props.to}</Link>
      </SmallProjectContent>
    </StyledProject>
  );
};

const StyledProject = styled.div`
  margin-right: 10px;
  margin-bottom: 10px;
  border: 2px solid ${theme.colors.borderColor};
  display: flex; 
  flex-direction: column; 
  max-width: 300px; 
  
`;

const TechnologyList = styled.div`
  border-bottom: 2px solid ${theme.colors.borderColor};
  color: ${theme.colors.borderColor};
  padding: 5px;
`;

const ProjectTitle = styled.h3`
  margin-bottom: 10px;
  font-weight: 800;
`;

const ProjectDescription = styled.p`
  color: ${theme.colors.borderColor};
  margin-bottom: 10px; 
`;

const Link = styled.a`
  border: 2px solid ${theme.colors.accent};
  color: ${theme.colors.font};
  padding: 5px 8px;
  margin-top: auto; /* Сохраняем Link на месте, но ближе к низу */
  align-self: flex-start; /* Убедимся, что кнопка не растягивается */
`;

const SmallProjectContent = styled.div`
  padding: 15px 20px 21px 20px; 
  display: flex;
  flex-direction: column;
  height: 100%; /* Позволяет растянуть контент и использовать auto margin для Link */
`;