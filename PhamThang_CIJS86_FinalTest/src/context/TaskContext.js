import React, { createContext, useContext, useState, useEffect } from "react";

const TaskContext = createContext();

export function useTaskContext() {
  return useContext(TaskContext);
}

export function TaskProvider({ children }) {
  const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const [tasks, setTasks] = useState(storedTasks);
  const storedFilter = JSON.parse(localStorage.getItem("filter")) || "All";
  const [filter, setFilter] = useState(storedFilter);
  const [currentIndex, setCurrentIndex] = useState(storedTasks.length);

  const handleTaskChange = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, checked: !task.checked } : task
    );
    setTasks(updatedTasks);
  };

  const toggleTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, checked: !task.checked } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const deleteAllTasks = (filter) => {
    if (filter === "All") {
      setTasks([]);
    } else if (filter === "Active") {
      const activeTasks = tasks.filter((task) => task.checked);
      setTasks(activeTasks);
    } else if (filter === "Completed") {
      const completedTasks = tasks.filter((task) => !task.checked);
      setTasks(completedTasks);
    }
  };

  const numberOfTasks = (filter) => {
    if (filter === "All") {
      return tasks.length;
    } else if (filter === "Active") {
      const activeTasks = tasks.filter((task) => !task.checked);
      return activeTasks.length;
    } else if (filter === "Completed") {
      const completedTasks = tasks.filter((task) => task.checked);
      return completedTasks.length;
    }
  };
  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  useEffect(() => {
    localStorage.setItem("filter", JSON.stringify(filter));
  }, [filter]);

  // Load tasks from local storage
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  // Save tasks to local storage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        filter,
        setFilter,
        handleTaskChange,
        handleDeleteTask,
        handleFilterChange,
        deleteAllTasks,
        numberOfTasks,
        currentIndex,
        setCurrentIndex,
        toggleTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
