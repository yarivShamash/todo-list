import { Task, TasksContext } from "../TasksContext";

import * as S from "./styles";

type TaskLineProps = { task: Task } & Omit<
  TasksContext,
  "tasks" | "handleEditTask" | "handleAddTask"
>;

export const TaskLine = ({ task, handleDeleteTask }: TaskLineProps) => (
  <div style={S.taskLine}>
    <p>{task.description}</p>
    <button onClick={() => handleDeleteTask(task.id)}>x</button>
  </div>
);
