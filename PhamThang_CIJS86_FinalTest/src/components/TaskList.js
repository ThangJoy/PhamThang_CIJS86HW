import React from "react";
import { Task } from "./Task";
import { useTaskContext } from "../context/TaskContext";

export function TaskList() {
  const { tasks, handleTaskChange, handleDeleteTask, filter } =
    useTaskContext();

  const filteredTasks = tasks.filter((task) => {
    if (filter === "All") return true;
    if (filter === "Active") return !task.checked;
    if (filter === "Completed") return task.checked;
    return false;
  });

  return (
    <ul className="list-group">
      {filteredTasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          text={task.text}
          checked={task.checked}
          onChange={() => handleTaskChange(task.id)}
          onDelete={() => handleDeleteTask(task.id)}
        />
      ))}
    </ul>
  );
}
