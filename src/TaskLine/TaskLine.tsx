import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";

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

  return (
    <Container sx={S.TaskLineContainer}>
      {editableLineId === task.id ? (
        <TaskDescriptionEdit
          task={task}
          handleTaskChange={handleTaskChange}
          exitEditMode={exitEditMode}
        />
      ) : (
        <Container sx={S.TaskLine}>
          <Checkbox checked={task.done} onChange={handleTaskChange} />
          <Container sx={S.TaskDescription} onClick={handleLineClick}>
            {task.description}
          </Container>
          <Button onClick={onDeleteTask}>x</Button>
        </Container>
      )}
    </Container>
  );
};
