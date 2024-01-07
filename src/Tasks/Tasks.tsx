import { useContext } from "react";
import { TasksContext } from "../TasksContext";

export const Tasks = () => {
  const tasks = useContext(TasksContext);
  console.log("🚀 > Tasks > tasks:", tasks);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div>
        <h2>TODO</h2>
      </div>
      <div>
        <h2>DONE</h2>
      </div>
    </div>
  );
};
