import React, { createContext, useContext, useState } from "react";

const TaskContext = createContext();

export function useTaskContext() {
  return useContext(TaskContext);
}

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");

  const handleTaskChange = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, checked: !task.checked } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  return (
    <TaskContext.Provider value={{ tasks, setTasks, filter, setFilter, handleTaskChange, handleDeleteTask, handleFilterChange }}>
      {children}
    </TaskContext.Provider>
  );
}
