import React, { ReactNode } from 'react';
import { Header } from '../pages/homepage/layout/header/Header';
import { Footer } from '../pages/homepage/layout/footer/Footer';
import { FC } from 'react';

interface LayoutProps {
    children: ReactNode; 
}

export const Layout:FC<LayoutProps> = ({ children }) => {
    return (
        <>
           <Header/> 
           {children}
           <Footer/>
        </>
    );
};

