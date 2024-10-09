import React from "react";
import styled, { css } from "styled-components";
import { Langswitcher } from "../Langswitcher";
import { theme } from "../../styles/Theme";
import { Logo } from "../logo/Logo";

export const BurgerMenu = (props: { menuItems: Array<string> }) => {
  const [menuIsOpen, setmenuIsOpen] = React.useState(false);
  const onBurgerBtnClick = () => {
    setmenuIsOpen(!menuIsOpen);
  };

  return (

    <StyledBurgerMenu>
  
      <BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
        <span></span>
      </BurgerButton>
      <BurgerMenuPopup isOpen={menuIsOpen} onClick={() => setmenuIsOpen(false)}>
        
      <Logo/>
      
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
            <Langswitcher/>
          </li>
        </ul>
       
      </BurgerMenuPopup>
    </StyledBurgerMenu>
   
  );
};

const StyledBurgerMenu = styled.nav`
  display: none;

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
  padding-left: 16px;
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
    justify-content: flex-start;
    align-items: flex-start;
    gap: 32px;
    margin-top: 47px;
  }
`;

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  width: 40px;
  height: 40px;
  top: 16px;
  right: 8px;
  z-index: 999;
  background-color: transparent;
  border: none;
  padding: 0;

  span {
    display: block;
    width: 24px;
    height: 2px;
    background-color: ${theme.colors.burger};
    position: absolute;
    left: 8px;
    top: 18px;

    &::before {
      content: "";
      display: block;
      width: 24px;
      height: 2px;
      background-color: transparent;
      position: absolute;
      transform: translateY(-5px);
    }

    &::after {
      content: "";
      display: block;
      width: 15px;
      height: 2px;
      background-color: ${theme.colors.burger};
      position: absolute;
      right: 1%;
      transform: translateY(5px);
    }
  }

  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      span {
        background-color: transparent; // сделать span невидимым
        &::before {
          background-color: ${theme.colors.burger};
          transform: translateY(0) rotate(45deg);
        }

        &::after {
          transform: translateY(0) rotate(-45deg);
          width: 24px;
        }
      }

    `}
`;

const StyledLink = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  font-family: Fira Code;
  font-weight: 400;
  font-size: 32px;
  line-height: 42px;

  &:hover {
    // или просто  :hover
    color: ${theme.colors.font};
    transition: 0.2s;
    font-weight: 500;
  }
`;

const StyledHash = styled.span`
  color: ${theme.colors.accent};
  margin-right: 1px;
`;


