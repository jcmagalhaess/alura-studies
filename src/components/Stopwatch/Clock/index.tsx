import React from 'react';
import style from './Clock.module.scss';

interface Props {
    time: number | undefined
}

export default function Clock({ time = 0 }: Props) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minutesTens, minutesUnit] = String(minutes).padStart(2, '0');
    const [secondsTens, secondsUnit] = String(seconds).padStart(2, '0');
    
    return (
        <React.Fragment>
            <span className={ style.relogioNumero }>{ minutesTens }</span>
            <span className={ style.relogioNumero }>{ minutesUnit }</span>
            <span className={ style.relogioDivisao }>:</span>
            <span className={ style.relogioNumero }>{ secondsTens }</span>
            <span className={ style.relogioNumero }>{ secondsUnit }</span>
        </React.Fragment>
    )
}