import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";

import { AppBar } from "./AppBar";
import { TasksList } from "./TasksList";

const App = (): React.ReactElement => {
  return (
    <>
      <CssBaseline />
      <AppBar />
      <Container sx={{ paddingTop: 2 }}>
        <TasksList />
      </Container>
    </>
  );
};

export default App;
