import React, {HTMLAttributes} from 'react';
import cl from './style.module.scss'
import {cn} from "../../lib";

export interface TextProps extends HTMLAttributes<HTMLParagraphElement>{
    children?: React.ReactNode
}

const Text = ({children, ...rest}: TextProps) => {
    return (
        <p {...rest} className={cn(cl.text, rest.className)}>
            {children}
        </p>
    );
};

export { Text }