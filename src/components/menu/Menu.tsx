import React from "react";
import styled from "styled-components";
import { Langswitcher } from "../Langswitcher";

export const Menu:React.FC = () => {
  return (
    <StyledMenu>
      <ul>
        <li>
          <a href="">#home</a>
        </li>
        <li>
          <a href="">#works</a>
        </li>
        <li>
          <a href="">#about-me</a>
        </li>
        <li>
          <a href="">#contacts</a>
        </li>
        <li>
         <Langswitcher/>
        </li>
      </ul>
     
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
ul {
 display:flex;
 gap: 25px;
 list-style: none;
}
`
