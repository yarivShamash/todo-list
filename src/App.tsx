import { TasksProvider } from "./TasksContext";
import { Tasks } from "./Tasks";

import "./App.css";

const App = (): React.ReactElement => {
  return (
    <TasksProvider value={[]}>
      <h1>Tasks List</h1>

      <Tasks />
    </TasksProvider>
  );
};

export default App;
