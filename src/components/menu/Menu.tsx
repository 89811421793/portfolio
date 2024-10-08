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
              <StyledLink
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  const sectionId = tabItem.slice(1);
                  const section = document.getElementById(sectionId);
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}>
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
    align-items: center;
    gap: 25px;
  }

  @media ${theme.media.tablet} {
  display: none;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  font-family: Fira Code;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;

   &:hover {   // или просто  :hover
    color: ${theme.colors.font}; 
    transition: .2s;
  }
`;

const StyledHash = styled.span`
  color: ${theme.colors.accent};
  margin-right: 1px;
`;
