import { TasksList } from "./TasksList";

const PageTitleStyle = {
  width: "inherit",
  // position: "sticky",
  top: 0,

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "0.2rem",

  backgroundColor: "FFF",
  boxShadow: "0 0 10px 3px #949292",
};

const PageContainerStyle = {
  width: "inherit",
  paddingTop: "2rem",
  paddingInline: "5rem",
};

const App = (): React.ReactElement => {
  return (
    <>
      <div style={PageTitleStyle}>
        <h1>Tasks List</h1>
      </div>
      <div style={PageContainerStyle}>
        <TasksList />
      </div>
    </>
  );
};

export default App;
