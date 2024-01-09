import { ChangeEventHandler } from "react";

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
    <div style={S.taskLine}>
      <input key={task.id} autoFocus onChange={handleTaskChange} />
      <button onClick={exitEditMode}>v</button>
    </div>
  );
};
