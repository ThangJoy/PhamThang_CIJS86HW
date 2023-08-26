import React from "react";
import { TaskList } from "./components/TaskList";
import FilterButtons from "./components/FilterButtons";
import { TaskInput } from "./components/TaskInput";
import { TaskProvider } from "./context/TaskContext";
import { BrowserRouter } from "react-router-dom";
import DeleteButton from "./components/DeleteButton";
import "./App.css";

function App() {
  return (
    <TaskProvider>
      <BrowserRouter>
        <div className="app container mt-5">
          <h1 className="mb-4">#todo</h1>
          <FilterButtons />
          <TaskInput />
          <TaskList />
          <DeleteButton />
        </div>
      </BrowserRouter>
    </TaskProvider>
  );
}

export default App;
