import React, { ReactNode } from 'react';
import { Header } from '../pages/homepage/layout/header/Header';
import { Footer } from '../pages/homepage/layout/footer/Footer';
import { FC } from 'react';
import { Sidebar } from './menu/Sidebar';

interface LayoutProps {
    children: ReactNode; 
}

const sidebarItems = [
    { iconId: 'github' },
    { iconId: 'dribble' },
    { iconId: 'figma' },
  ];

export const Layout:FC<LayoutProps> = ({ children }) => {
    
    return (
        <>
           <Header/> 
           <Sidebar items={sidebarItems} />
           {children}
           <Footer/>
        </>
    );
};