import { Task, TasksProvider } from "../TasksContext";
import { Tasks } from "../Tasks";

const defaultTasks: Task[] = [];

export const TasksList = () => (
  <TasksProvider value={defaultTasks}>
    <Tasks />
  </TasksProvider>
);
