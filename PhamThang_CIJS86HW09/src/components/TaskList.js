import React from "react";
import { Task } from "./Task";
import { useTaskContext } from "./TaskContext";

export function TaskList() {
  const { tasks, handleTaskChange, handleDeleteTask, filter } = useTaskContext();

  const filteredTasks = tasks.filter((task) => {
    if (filter === "All") return true;
    if (filter === "Active") return !task.checked;
    if (filter === "Completed") return task.checked;
    return false;
  });

  return (
    <ul className="list-group">
      {filteredTasks.map((task, index) => (
        <Task
          key={index}
          text={task.text}
          checked={task.checked}
          onChange={() => handleTaskChange(index)}
          onDelete={() => handleDeleteTask(index)}
        />
      ))}
    </ul>
  );
}
