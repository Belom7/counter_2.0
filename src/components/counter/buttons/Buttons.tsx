import React from 'react';
import {Button} from "./button/Button";


type ButtonsPropsType = {
    value: number
    callBack: (value:number)=>void
}

export const Buttons = (props: ButtonsPropsType) => {

    const upCount = () => props.callBack(props.value<5? props.value+1 : props.value)
    const reset = () => props.callBack(0)

    return (
        <div>
            <Button nameButton={'Inc'} callBack={upCount} valueCounter={props.value>4}/>
            <Button nameButton={'Reset'} callBack={reset} valueCounter={props.value<1}/>
        </div>
    );
};
