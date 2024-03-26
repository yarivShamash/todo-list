import { ChangeEventHandler, KeyboardEventHandler } from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import Checkbox from "@mui/material/Checkbox";

import { TaskLineProps } from "../TaskLine";

import * as S from "./styles";

type TaskDescriptionEditProps = Pick<TaskLineProps, "task" | "exitEditMode"> & {
  handleTaskChange: ChangeEventHandler<HTMLInputElement>;
};

export const TaskDescriptionEdit = ({
  task,
  handleTaskChange,
  exitEditMode,
}: TaskDescriptionEditProps) => {
  const onInputEnter: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      exitEditMode();
    }
  };

  return (
    <Container sx={S.EditLineContainer}>
      <Checkbox checked={task.done} disabled />
      <Input
        key={task.id}
        placeholder={task.description || "Add new task"}
        autoFocus
        onChange={handleTaskChange}
        onKeyDown={onInputEnter}
        fullWidth
      />
      <Button onClick={exitEditMode}>v</Button>
    </Container>
  );
};
