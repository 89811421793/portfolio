import React from "react";
import styled, { css } from "styled-components";
import { Langswitcher } from "../Langswitcher";
import { theme } from "../../styles/Theme";

export const BurgerMenu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledBurgerMenu>
      <BurgerButton isOpen={true}>
        <span></span>
      </BurgerButton>
      <BurgerMenuPopup isOpen={true}>
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
                  }}
                >
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
      </BurgerMenuPopup>
    </StyledBurgerMenu>
  );
};

const StyledBurgerMenu = styled.nav`
   display:none;

  @media ${theme.media.tablet} {
    display: block;
  }
`;

const BurgerMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: ${theme.colors.primaryBg};
  display: none;

  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      display: flex;
      justify-content: flex-start;
      align-items: center;
    `}

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
  }
`;

const BurgerButton = styled.button<{ isOpen: boolean }>`
position: fixed;
width: 24px;
height: 24px;
top: 16px;
right: 16px;

span {
   display: block;
   width: 24px;
   height: 2px;
   color: ${theme.colors.burger};
   position: absolute;
   top: 20px;
   right: 16px;
       ${(props) =>
         props.isOpen &&
         css<{ isOpen: boolean }>`
           transform: translateY(0) rotate(45deg);
         `}
  
&::before {
       content: '';
       display: block;
       width: 24px;
       height: 2px;
       color: transparent;
       position: absolute;
       transform: translateY(-5px);
          ${(props) =>
            props.isOpen &&
            css<{ isOpen: boolean }>`
              transform: translateY(0) rotate(-45deg);
              color: ${theme.colors.burger};
            `}

    &::after {
       content: '';
       display: block;
       width: 15px;
       height: 2px;
       color: ${theme.colors.burger};
       position: absolute;
       transform: translateY(5px);

          ${(props) =>
            props.isOpen &&
            css<{ isOpen: boolean }>`
              color: transparent;
            `}
   }
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

  &:hover {
    // или просто  :hover
    color: ${theme.colors.font};
    transition: 0.2s;
  }
`;

const StyledHash = styled.span`
  color: ${theme.colors.accent};
  margin-right: 1px;
`;