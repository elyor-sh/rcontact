import React from 'react';
import cl from './style.module.scss'

const spinnerElements = new Array(12).fill(0)

export const LoadingSpinner = () => {

    return (
        <div className={cl.spinner}>
            <div className={cl.ldsSpinner}>
                {
                    spinnerElements.map((_, i) => (
                        <div key={i.toString()}/>
                    ))
                }
            </div>
        </div>
    );
}