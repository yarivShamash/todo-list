import { useContext, useMemo } from "react";
import { TasksContext } from "../TasksContext";

import * as S from "./styles";
import { TaskLine } from "../TaskLine";

// Improve UI
// handleClickTask toggle task's editable mode
//  onChange Edit task
// checkbox to mark as done
// addTask button

export const Tasks = () => {
  const tasksContext = useContext(TasksContext);
  const todoTasks = useMemo(
    () => tasksContext?.tasks.filter(({ done }) => !done) ?? [],
    [tasksContext?.tasks]
  );
  const doneTasks = useMemo(
    () => tasksContext?.tasks.filter(({ done }) => !!done) ?? [],
    [tasksContext?.tasks]
  );

  if (!tasksContext) return null;

  return (
    <div style={S.sectionContainer}>
      <div style={S.tasksContainer}>
        <h2>TODO</h2>
        <div>
          {todoTasks.map((task) => (
            <TaskLine
              key={task.id}
              task={task}
              handleDeleteTask={tasksContext.handleDeleteTask}
            />
          ))}
        </div>
      </div>
      <div style={S.tasksContainer}>
        <h2>DONE</h2>
        <div>
          {doneTasks.map((task) => (
            <TaskLine
              key={task.id}
              task={task}
              handleDeleteTask={tasksContext.handleDeleteTask}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
