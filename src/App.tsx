import { TasksContext, Task } from "./TasksContext";

import "./App.css";
import { Tasks } from "./Tasks";

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
    done: false,
  },
  {
    id: "4",
    description: "fourth",
    done: false,
  },
];

const App = (): React.ReactElement => {
  return (
    <>
      <h1>Tasks List</h1>
      <TasksContext.Provider value={mockTasks}>
        <Tasks />
      </TasksContext.Provider>
    </>
  );
};

export default App;
