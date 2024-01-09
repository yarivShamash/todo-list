import { Task, TasksContext } from "../TasksContext";

export type TaskLineProps = {
  task: Task;
  editableLineId: string;
  enterEditMode: (taskId: string) => void;
  exitEditMode: () => void;
} & Omit<TasksContext, "tasks" | "handleAddTask">;
