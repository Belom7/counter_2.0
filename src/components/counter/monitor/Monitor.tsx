import React from 'react';
import cl from './Monitor.module.css'

type MonitorPropsType = {
    value:number
}

export const Monitor = (props: MonitorPropsType) => {
    return (
        <div className={props.value>4? cl.maxValue : ''}>
            {props.value}
        </div>
    );
};
