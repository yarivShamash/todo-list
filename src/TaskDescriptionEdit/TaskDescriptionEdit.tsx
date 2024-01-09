import { ChangeEventHandler } from "react";
import { Button, TextInput } from "react95";

import * as S from "./styles";
import { TaskLineProps } from "../TaskLine";

type TaskDescriptionEditProps = Pick<TaskLineProps, "task" | "exitEditMode"> & {
  handleTaskChange: ChangeEventHandler<HTMLInputElement>;
};

export const TaskDescriptionEdit = ({
  task,
  handleTaskChange,
  exitEditMode,
}: TaskDescriptionEditProps) => {
  return (
    <S.TaskLine>
      <TextInput key={task.id} autoFocus onChange={handleTaskChange} />
      <Button onClick={exitEditMode}>v</Button>
    </S.TaskLine>
  );
};
