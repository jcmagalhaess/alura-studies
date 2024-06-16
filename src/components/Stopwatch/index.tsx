import { useEffect, useState } from 'react';
import { timeToSeconds } from '../../common/utils/time';
import { ITarefa } from '../../types/tarefa';
import Button from '../Button';
import Clock from './Clock';
import style from './Stopwatch.module.scss';

interface Props {
    selected: ITarefa | undefined
}

export default function Stopwatch({ selected }: Props) {
    const [time, setTime] = useState<number>();

    useEffect(() => {
        if (selected?.tempo) setTime(timeToSeconds(selected.tempo))
    }, [ selected ])

    return (
        <div className={ style.cronometro }>
            <p className={ style.titulo }>Escolha um card e inicie o cronômetro</p>
            <div className={ style.relogioWrapper }>
                <Clock time={ time }/>
            </div>
            <Button>Começar!</Button>
        </div>
    )
}