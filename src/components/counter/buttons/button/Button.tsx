import React from 'react';
import cl from './Button.module.css'

type ButtonPropsType = {
    nameButton: string
    callBack: () => void
    valueCounter: boolean
}


export const Button = (props: ButtonPropsType) => {
    return (
        <button className={cl.button} disabled={props.valueCounter} onClick={props.callBack}>{props.nameButton}</button>
    );
};
