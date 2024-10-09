import React from "react";
import styled, { css } from "styled-components";
import { Icon } from "./../icon/Icon";
import { theme } from "../../styles/Theme";


interface SidebarProps {
  /*можно и через type*/
  items: {
    iconId: string;
  }[];
}

export const SidebarContainer = styled.aside`
  @media ${theme.media.tablet} {
     display:none;
  }


  ul {
    display: flex;
    position: absolute;
    top: 23%;
    flex-direction: column;
    align-items: center;
    margin-left: 15px;

    ::before {
      content: "";
      position: absolute;
      top: -135%;
      left: 50%;
      width: 1px;
      height: 191px;
      background-color: ${theme.colors.borderColor};
    }

    li {
      margin-bottom: 15px;
    }
  }
`;

const SidebarItem = styled.a`
  text-decoration: none;
  color: #333;
  transition: color 0.2s ease;

  &:hover {
    color: #666;
  }
`;

export const Sidebar: React.FC<SidebarProps> = ({ items}) => {
  return (
    <SidebarContainer>
      <ul>
        {items.map((item) => (
          <li key={item.iconId}>
            <SidebarItem href="#">
              <Icon iconId={item.iconId} width="32" height="32" />
            </SidebarItem>
          </li>
        ))}
      </ul>
    </SidebarContainer>
  );
};
