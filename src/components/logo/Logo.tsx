import React from "react";
import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { theme } from "../../styles/Theme";

export const Logo: React.FC = () => {
  return (
    <LogoContainer href="/">
      <Icon iconId={"union"} viewBox="0 0 25 14" />
      <LogoName>Elias</LogoName>
    </LogoContainer>
  );
};

const LogoContainer = styled.a`
  display: flex;
  align-items: center;

    @media ${theme.media.tablet} {
    margin-left: 16px;
    mergin-top: 20px;
  }
`;

const LogoName = styled.span`
  font-family: Fira Code;
  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
  margin-left: -1px;
  font-size: 16px;
  font-weight: 700;
`;
