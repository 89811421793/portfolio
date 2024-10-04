import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../../styles/Theme";

type SkillPropsType = {
  title: string;
  list: string;
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
`;

const SkillTitle = styled.h3`
  font-family: Fira Code;
  font-weight: 600;
  font-size: 16px;
  line-height: 30px;
  color: ${theme.colors.font};
  border: 1px solid ${theme.colors.borderColor};
  padding: 5px;
`;
const StyledSkill = styled.div`
  font-family: Fira Code;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  color: ${theme.colors.borderColor};
  padding: 5px;
`;
