import React from "react";
import styled from "styled-components";
import { Langswitcher } from "../Langswitcher";
import { theme } from "../../styles/Theme";

export const Menu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledMenu>
      <ul>
        {props.menuItems.map((tabItem, index) => {
          return (
            <li key={index}>
              <StyledLink href="#">
                <StyledHash>#</StyledHash>
                {tabItem.slice(1)} 
              </StyledLink>
            </li>
          );
        })}
        <li>
          <Langswitcher />
        </li>
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 25px;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
`;

const StyledHash = styled.span`
  color: ${theme.colors.accent};
  margin-right: 5px; 
`;
