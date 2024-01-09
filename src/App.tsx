import { ThemeProvider } from "styled-components";
import original from "react95/dist/themes/original";

import { GlobalStyles } from "./reset.style";

import { TasksProvider } from "./TasksContext";
import { Tasks } from "./Tasks";

const App = (): React.ReactElement => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={original}></ThemeProvider>
      <TasksProvider value={[]}>
        <h1>Tasks List</h1>

        <Tasks />
      </TasksProvider>
    </>
  );
};

export default App;
