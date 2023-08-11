import React, { useState } from "react";
import { useTaskContext } from "./TaskContext";

export function TaskInput() {
  const [newTask, setNewTask] = useState("");
  const { tasks, setTasks } = useTaskContext();

  const handleNewTaskChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      if (tasks.some((task) => task.text.toLowerCase() === newTask.trim().toLowerCase())) {
        alert("Task already exists!");
        return;
      }

      setTasks([...tasks, { text: newTask.trim(), checked: false }]);
      setNewTask("");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAddTask();
    }
  };

  const inputAndButton = (
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        placeholder="Enter new task"
        value={newTask}
        onChange={handleNewTaskChange}
        onKeyPress={handleKeyPress}
      />
    </div>
  );

  return inputAndButton;
}
