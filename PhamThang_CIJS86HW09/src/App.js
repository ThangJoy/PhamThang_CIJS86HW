import React from "react";
import "./App.css";
import { TaskProvider } from "./components/TaskContext";
import { TaskInput } from "./components/TaskInput";
import { TaskList } from "./components/TaskList";
import { FilterButtons } from "./components/FilterButtons";

function App() {
  return (
    <TaskProvider>
      <div className="app container mt-5">
        <h1 className="mb-4">To Do List</h1>
        <TaskInput />
        <FilterButtons />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
