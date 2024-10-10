import React from "react";
import styled from "styled-components";
import { Icon } from "./../icon/Icon";

type SidebarProps = {
  items: {
    iconId: string;
  }[];
};

export const MobileSidebarContainer = styled.ul`
  display: flex;

  li {
    margin-right: 20px;
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

export const MobileSidebar: React.FC<SidebarProps> = ({ items }) => {
  return (
    <MobileSidebarContainer>
      {items.map((item) => (
        <li key={item.iconId}>
          <SidebarItem href="#">
            <Icon iconId={item.iconId} width="90" height="100"/>
          </SidebarItem>
        </li>
      ))}
    </MobileSidebarContainer>
  );
};
