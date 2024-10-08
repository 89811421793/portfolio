import React from 'react';
import styled from 'styled-components';
import { Icon } from './../icon/Icon';
import { theme } from '../../styles/Theme';

interface SidebarProps {   /*можно и через type*/
  items: {
    iconId: string;
  }[];
}

const SidebarContainer = styled.aside`
display: flex;
  position: absolute;
  top: 23%; 
  flex-direction: column;
  align-items: center;
  margin-left: 15px;

   &::before {
    content: '';
    position: absolute;
    top: -145%; 
    left: 50%;
    width: 1px;
    height: 191px;
    background-color: ${theme.colors.borderColor};
  }
`;

const SidebarItem = styled.a`
  margin-bottom: 10px;
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

