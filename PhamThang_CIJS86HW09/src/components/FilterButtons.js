import React from "react";
import { useTaskContext } from "./TaskContext";

export function FilterButtons() {
  const { filter, handleFilterChange, handleAddTask } = useTaskContext();


  return (
    <div className="btn-area">
          <div className="btn-group ">
            <button
              className={`btn btn-outline-secondary ${
                filter === "All" ? "active" : ""
              }`}
              onClick={() => handleFilterChange("All")}
            >
              All
            </button>
            <button
              className={`btn btn-outline-secondary ${
                filter === "Active" ? "active" : ""
              }`}
              onClick={() => handleFilterChange("Active")}
            >
              Active
            </button>
            <button
              className={`btn btn-outline-secondary ${
                filter === "Completed" ? "active" : ""
              }`}
              onClick={() => handleFilterChange("Completed")}
            >
              Completed
            </button>
            
        </div>
        <span className="input-group-append">
          <button className="btn btn-add" onClick={handleAddTask}>
            Add
          </button>
        </span>
      </div>
  );
}
