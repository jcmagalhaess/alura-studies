import { useState } from "react";
import Form from "../components/Form";
import List from "../components/List";
import Stopwatch from "../components/Stopwatch";
import { ITarefa } from "../types/tarefa";
import style from "./App.module.scss";

function App() {
  let [tarefas, setTarefas] = useState<ITarefa[]>([]);
  const [selected, setSelected] = useState<ITarefa>();

  function selectTask(selectedTask: ITarefa) {
    setSelected(selectedTask);
    setTarefas((oldTasks) =>
      oldTasks.map((task) => ({
        ...task,
        selected: task.id === selectedTask.id ? true : false,
      }))
    );
  }

  function finishTask() {
    if (selected)
      setTarefas((oldTasks) =>
        oldTasks.map((task) => {
          if (task.id === selected.id) {
            return {
              ...task,
              selected: false,
              completed: true,
            };
          }
          return task;
        })
      );
      setSelected(undefined);
  }

  return (
    <div className={ style.AppStyle }>
      <Form setTarefas={ setTarefas } />
      <List tarefas={ tarefas } selectTask={ selectTask}  />
      <Stopwatch selected={ selected } finishTask={ finishTask } />
    </div>
  );
}

export default App;
