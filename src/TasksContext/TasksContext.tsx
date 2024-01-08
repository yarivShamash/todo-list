import { PropsWithChildren, createContext, useState } from "react";
import { Task } from "./types";

export interface TasksContext {
  tasks: Task[];
  handleAddTask: (newTask: Task) => void;
  handleEditTask: (editedTask: Task) => void;
  handleDeleteTask: (taskId: string) => void;
}

interface TasksProviderProps {
  value: Task[];
}

export const TasksContext = createContext<TasksContext | null>(null);

export const TasksProvider = ({
  value,
  children,
}: PropsWithChildren<TasksProviderProps>) => {
  const [tasks, setTasks] = useState<Task[]>(value);

  const handleAddTask = (newTask: Task) => {
    setTasks([...tasks, newTask]);
  };

  const handleEditTask = (editedTask: Task) => {
    const updatedTasks = tasks.map((task) =>
      task.id === editedTask.id ? editedTask : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (taskId: string) => {
    const updatedTasks = tasks.filter(({ id }) => id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <TasksContext.Provider
      value={{ tasks, handleAddTask, handleEditTask, handleDeleteTask }}
    >
      {children}
    </TasksContext.Provider>
  );
};
