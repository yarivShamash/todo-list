import { TaskDescriptionEdit } from "../TaskDescriptionEdit";

import { TaskLineProps } from "./types";
import * as S from "./styles";

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
    <TaskDescriptionEdit
      task={task}
      handleTaskChange={handleTaskChange}
      exitEditMode={exitEditMode}
    />
  ) : (
    <div style={S.taskLine}>
      <input type="checkbox" checked={task.done} onChange={handleTaskChange} />
      <p onClick={handleLineClick}>{task.description}</p>
      <button onClick={onDeleteTask}>x</button>
    </div>
  );
};
