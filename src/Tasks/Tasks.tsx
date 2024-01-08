import { useContext } from "react";
import { TasksContext } from "../TasksContext";

export const Tasks = () => {
  const tasksContext = useContext(TasksContext);

  const todoTasks = tasksContext?.tasks.filter(({ done }) => !done) ?? [];
  const doneTasks = tasksContext?.tasks.filter(({ done }) => !!done) ?? [];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ width: "100%", border: "solid 1px gray" }}>
        <h2>TODO</h2>
        <div>
          {todoTasks.map((task) => (
            <div key={task.id} style={{ display: "flex", width: "100%" }}>
              <p>{task.description}</p>
              <button onClick={() => tasksContext?.handleDeleteTask(task.id)}>
                x
              </button>
            </div>
          ))}
        </div>
      </div>
      <div style={{ width: "100%", border: "solid 1px gray" }}>
        <h2>DONE</h2>
        <div>
          {doneTasks.map((task) => (
            <div key={task.id} style={{ display: "flex", width: "100%" }}>
              <p>{task.description}</p>
              <button onClick={() => tasksContext?.handleDeleteTask(task.id)}>
                x
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
