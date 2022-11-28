import React from 'react';
import cl from './style.module.scss'

export interface LayoutProps {
    children?: React.ReactNode
    header: React.ReactNode
    footer: React.ReactNode
}

const Layout = ({header, footer, children}: LayoutProps) => {
    return (
        <>
            <header>
                {header}
            </header>
            <main className={cl.main}>
                {children}
            </main>
            <footer>
                {footer}
            </footer>
        </>
    );
};

export {Layout}