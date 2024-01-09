import { ChangeEventHandler, useContext, useMemo, useState } from "react";
import { nanoid } from "nanoid";

import { Task, TasksContext } from "../TasksContext";

import * as S from "./styles";
import { TaskLine } from "../TaskLine";
import { TaskDescriptionEdit } from "../TaskDescriptionEdit";

// Improve UI
// mocks should be provider through a context depending on a ?mock query param

// const mockTasks: Task[] = [
//   {
//     id: "1",
//     description: "first",
//     done: false,
//   },
//   {
//     id: "2",
//     description: "second",
//     done: false,
//   },
//   {
//     id: "3",
//     description: "third",
//     done: true,
//   },
//   {
//     id: "4",
//     description: "fourth",
//     done: false,
//   },
// ];
export const Tasks = () => {
  const [editableLineId, setEditableLineId] = useState("");
  const [newTask, setNewTask] = useState<Task | null>(null);

  const tasksContext = useContext(TasksContext);
  const todoTasks = useMemo(
    () => tasksContext?.tasks.filter(({ done }) => !done) ?? [],
    [tasksContext?.tasks]
  );
  const doneTasks = useMemo(
    () => tasksContext?.tasks.filter(({ done }) => !!done) ?? [],
    [tasksContext?.tasks]
  );

  const enterEditMode = (taskId: string) => setEditableLineId(taskId);

  const exitEditMode = () => {
    setEditableLineId(() => "");
  };

  const addNewTask = () => {
    setNewTask({
      id: nanoid(),
      description: "",
      done: false,
    });
  };

  const exitNewTask = () => {
    if (newTask?.description) {
      tasksContext?.handleAddTask(newTask);
    }
    setNewTask(null);
  };

  const handleNewTask: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!newTask) return;

    const taskWithNewDescription: Task = {
      ...newTask,
      description: e.target.value,
    };
    setNewTask(taskWithNewDescription);
  };
  if (!tasksContext) return null;

  return (
    <div style={S.sectionContainer}>
      <div style={S.tasksContainer}>
        <h2>TODO</h2>
        <div>
          {todoTasks.map((task) => (
            <TaskLine
              key={task.id}
              task={task}
              editableLineId={editableLineId}
              enterEditMode={enterEditMode}
              exitEditMode={exitEditMode}
              handleDeleteTask={tasksContext.handleDeleteTask}
              handleEditTask={tasksContext.handleEditTask}
            />
          ))}

          {newTask ? (
            <TaskDescriptionEdit
              task={newTask}
              handleTaskChange={handleNewTask}
              exitEditMode={exitNewTask}
            />
          ) : (
            <button onClick={addNewTask}>New + Task</button>
          )}
        </div>
      </div>
      <div style={S.tasksContainer}>
        <h2>DONE</h2>
        <div>
          {doneTasks.map((task) => (
            <TaskLine
              key={task.id}
              task={task}
              editableLineId={editableLineId}
              enterEditMode={enterEditMode}
              exitEditMode={exitEditMode}
              handleDeleteTask={tasksContext.handleDeleteTask}
              handleEditTask={tasksContext.handleEditTask}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
