import { useContext, useMemo, useState } from "react";
import { TasksContext } from "../TasksContext";

import * as S from "./styles";
import { TaskLine } from "../TaskLine";

export const Tasks = () => {
  const [editableLineId, setEditableLineId] = useState("");

  const tasksContext = useContext(TasksContext);
  const todoTasks = useMemo(
    () => tasksContext?.tasks.filter(({ done }) => !done) ?? [],
    [tasksContext?.tasks]
  );
  const doneTasks = useMemo(
    () => tasksContext?.tasks.filter(({ done }) => !!done) ?? [],
    [tasksContext?.tasks]
  );

  const enterEditMode = (taskId: string) => setEditableLineId(taskId);
  const exitEditMode = () => {
    setEditableLineId(() => "");
  };

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
              editableLineId={editableLineId}
              enterEditMode={enterEditMode}
              exitEditMode={exitEditMode}
              handleDeleteTask={tasksContext.handleDeleteTask}
              handleEditTask={tasksContext.handleEditTask}
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
              editableLineId={editableLineId}
              enterEditMode={enterEditMode}
              exitEditMode={exitEditMode}
              handleDeleteTask={tasksContext.handleDeleteTask}
              handleEditTask={tasksContext.handleEditTask}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
