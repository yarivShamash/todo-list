import {
  ChangeEventHandler,
  PropsWithChildren,
  createContext,
  useState,
} from "react";
import { Task } from "./types";

export interface TasksContext {
  tasks: Task[];
  handleAddTask: (newTask: Task) => void;
  handleEditTask: (id: string) => ChangeEventHandler<HTMLInputElement>;
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

  const handleEditTask: (id: string) => ChangeEventHandler<HTMLInputElement> =
    (taskId: string) => (e) => {
      const editedTask = tasks.find(({ id }) => id === taskId);
      if (!editedTask) return;

      if (e.target.type === "checkbox") {
        editedTask.done = e.target.checked;
      } else {
        editedTask.description = e.target.value;
      }

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
