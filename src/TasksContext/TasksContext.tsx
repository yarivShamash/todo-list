import { createContext } from "react";
import { Task } from "./types";

export const TasksContext = createContext<Task[]>([]);
