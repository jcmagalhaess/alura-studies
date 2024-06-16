import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { ITarefa } from "../../types/tarefa";
import Button from "./../Button";
import style from "./Form.module.scss";

interface Props {
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}

export default function Form({ setTarefas }: Props) {
  const [tarefa, setTask] = useState('');
  const [tempo, setTime] = useState('00:00');

  function adicionarTarefa(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTarefas((oldTasks) => [
      ...oldTasks,
      { tarefa, tempo, selected: false, completed: false, id: uuidv4() },
    ]);
    setTask('');
    setTime('00:00');
  }
  return (
    <form
      className={ style.novaTarefa }
      onSubmit={ adicionarTarefa }
    >
      <div className={ style.inputContainer }>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          type="text"
          name="tarefa"
          value={ tarefa }
          onChange={(event) => setTask(event.target.value)}
          id="tarefa"
          placeholder="O que você quer estudar"
          required
        />
      </div>
      <div className={ style.inputContainer }>
        <label htmlFor="tempo">Tempo</label>
        <input
          type="time"
          step="1"
          name="tempo"
          value={ tempo }
          onChange={(event) => setTime(event.target.value) }
          id="tempo"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Button type="submit">Adicionar</Button>
    </form>
  );
}
