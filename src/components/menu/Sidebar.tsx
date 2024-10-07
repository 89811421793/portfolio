import React from 'react';
import styled from 'styled-components';
import { Icon } from './../icon/Icon';

interface SidebarProps {
  items: {
    iconId: string;
  }[];
}

const SidebarContainer = styled.aside`
display: flex;
  position: absolute;
  top: 8%; 
  flex-direction: column;
  align-items: center;
  width: fit-content;
  margin-left: 15px;
`;

const SidebarItem = styled.a`
  margin-bottom: 20px;
  text-decoration: none;
  color: #333;
  transition: color 0.2s ease;

  &:hover {
    color: #666;
  }
`;

export const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  return (
    <SidebarContainer>
      {items.map((item) => (
        <SidebarItem key={item.iconId} href='#'>
          <Icon iconId={item.iconId} width="32" height="32" />
        </SidebarItem>
      ))}
    </SidebarContainer>
  );
};

