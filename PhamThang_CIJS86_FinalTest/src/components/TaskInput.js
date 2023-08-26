import React, { useState } from "react";
import { useTaskContext } from "../context/TaskContext";

export function TaskInput() {
  const [newTask, setNewTask] = useState("");
  const { tasks, setTasks, currentIndex, setCurrentIndex, filter } =
    useTaskContext();

  const handleNewTaskChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      if (
        tasks.some(
          (task) => task.text.toLowerCase() === newTask.trim().toLowerCase()
        )
      ) {
        alert("Task already exists!");
        return;
      }

      setTasks([
        ...tasks,
        { text: newTask.trim(), checked: false, id: currentIndex },
      ]);
      setCurrentIndex(currentIndex + 1);
      setNewTask("");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAddTask();
    }
  };

  // Chỉ hiển thị khi filter khác "Completed"
  if (filter !== "Completed") {
    return (
      <div className="row gx-3 mb-3">
        <div className="col-10">
          <input
            type="text"
            className="form-control w-100"
            placeholder="add details"
            value={newTask}
            onChange={handleNewTaskChange}
            onKeyPress={handleKeyPress}
          />
        </div>
        <div className="col-2">
          <button
            className="btn btn-primary w-100 h-100"
            type="button"
            onClick={handleAddTask}
          >
            Add
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
