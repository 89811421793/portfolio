import React from "react";
import styled from "styled-components";
import { Langswitcher } from "../Langswitcher";

export const Menu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledMenu>
      <ul>
        {props.menuItems.map((tabItem, index) => {
          return (
            <li key={index}>
              <a href="">{tabItem}</a>
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
