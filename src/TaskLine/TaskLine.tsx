import { Task, TasksContext } from "../TasksContext";

import * as S from "./styles";

type TaskLineProps = {
  task: Task;
  editableLineId: string;
  enterEditMode: (taskId: string) => void;
  exitEditMode: () => void;
} & Omit<TasksContext, "tasks" | "handleAddTask">;

export const TaskLine = ({
  task,
  editableLineId,
  handleDeleteTask,
  handleEditTask,
  enterEditMode,
  exitEditMode,
}: TaskLineProps) => {
  const handleLineClick = () => enterEditMode(task.id);
  const handleTaskChange = handleEditTask(task.id);
  const onDeleteTask = () => handleDeleteTask(task.id);

  return editableLineId === task.id ? (
    <div style={S.taskLine}>
      <input key={task.id} autoFocus onChange={handleTaskChange} />
      <button onClick={exitEditMode}>v</button>
    </div>
  ) : (
    <div style={S.taskLine}>
      <input type="checkbox" checked={task.done} onChange={handleTaskChange} />
      <p onClick={handleLineClick}>{task.description}</p>
      <button onClick={onDeleteTask}>x</button>
    </div>
  );
};
