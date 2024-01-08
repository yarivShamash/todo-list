import { Task, TasksProvider } from "./TasksContext";
import { Tasks } from "./Tasks";

import "./App.css";

const mockTasks: Task[] = [
  {
    id: "1",
    description: "first",
    done: false,
  },
  {
    id: "2",
    description: "second",
    done: false,
  },
  {
    id: "3",
    description: "third",
    done: true,
  },
  {
    id: "4",
    description: "fourth",
    done: false,
  },
];

const App = (): React.ReactElement => {
  return (
    <TasksProvider value={mockTasks}>
      <h1>Tasks List</h1>

      <Tasks />
    </TasksProvider>
  );
};

export default App;
