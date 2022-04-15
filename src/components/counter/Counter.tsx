import React, {useState} from 'react';
import {Monitor} from "./monitor/Monitor";
import {Buttons} from "./buttons/Buttons";
import cl from './Counter.module.css'

export type ValueCounter = 0 | 1 | 2 | 3 | 4 | 5

export const Counter = () => {

    const[valueCounter, setValueCounter] =  useState<number>(0)

    const updateValueCounter = (value:number) => setValueCounter(value)

    return (
        <div className={cl.counter}>
            <Monitor value={valueCounter}/>
            <Buttons value={valueCounter} callBack={updateValueCounter}/>
        </div>
    );
};
