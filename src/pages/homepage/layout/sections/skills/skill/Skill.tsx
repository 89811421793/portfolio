import React from "react";
import styled from "styled-components";

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

const SkillBox = styled.div``;
const SkillTitle = styled.h3`
  color: #fff;
`;
const StyledSkill = styled.div``;
