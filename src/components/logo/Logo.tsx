import React from "react";
import styled from "styled-components";
import { Icon } from "../icon/Icon";

export const Logo = () => {
  return (
    <LogoContainer>
      <a href="">
        <Icon iconId={"union"} viewBox="0 0 25 14" />
      </a>
      <LogoName>Elias</LogoName>
    </LogoContainer>
  );
};

const LogoContainer = styled.div`
  display: flex;
  align-items: center; 
`;

const LogoName = styled.span`
  margin-left: -1px; 
  font-size:16px;
  font-weight: 700;
`;
