import React, {HTMLAttributes} from 'react';
import cl from './style.module.scss'
import {cn} from "../../lib";

export interface TextProps extends HTMLAttributes<HTMLParagraphElement>{
    children?: React.ReactNode
    variant?: 'error' | 'standard' | 'light'
}

const Text = ({children, variant = 'standard', ...rest}: TextProps) => {
    return (
        <p {...rest} className={cn(cl.text, cl[variant], rest.className)}>
            {children}
        </p>
    );
};

export { Text }