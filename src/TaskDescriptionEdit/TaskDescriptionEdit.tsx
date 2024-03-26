import { ChangeEventHandler, KeyboardEventHandler } from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";

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
      <Input
        key={task.id}
        autoFocus
        onChange={handleTaskChange}
        onKeyDown={onInputEnter}
        fullWidth
      />
      <Button onClick={exitEditMode}>v</Button>
    </Container>
  );
};
