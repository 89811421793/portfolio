import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../../styles/Theme";

type SkillPropsType = {
  title: string
  list:string
};

export const Skill = (props: SkillPropsType) => {
  return (
    <SkillBox>
      <SkillTitle>{props.title}</SkillTitle>
      <StyledSkill>{props.list}</StyledSkill>
    </SkillBox>
  );
};

const SkillBox = styled.div`
border: 2px solid ${theme.colors.borderColor};
display:inline-block;
margin:10px;
`;
const SkillTitle = styled.h3`
  color: #fff;
`;
const StyledSkill = styled.div``;
