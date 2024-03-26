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
    <S.TaskLine>
      <input type="checkbox" checked={task.done} onChange={handleTaskChange} />
      <S.TaskDescription onClick={handleLineClick}>
        {task.description}
      </S.TaskDescription>
      <button onClick={onDeleteTask}>x</button>
    </S.TaskLine>
  );
};
