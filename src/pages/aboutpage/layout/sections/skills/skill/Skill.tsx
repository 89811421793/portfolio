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
  display: inline-block;
  margin: 10px;
  max-width: 192px;
`;
const SkillTitle = styled.h3`
  font-family: Fira Code;
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  color: #fff;
  border: 2px solid ${theme.colors.borderColor};
  padding: 14px;
`;
const StyledSkill = styled.div`
  font-family: Fira Code;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: ${theme.colors.borderColor};
  font-weight: 400;
  padding: 14px;
`;
