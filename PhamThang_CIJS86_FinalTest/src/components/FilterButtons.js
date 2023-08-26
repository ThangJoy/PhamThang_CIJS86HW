import React from "react";
import { useTaskContext } from "../context/TaskContext";

function FilterButtons() {
  const { filter, handleFilterChange } = useTaskContext();

  const handleFilterButtonClick = (newFilter) => {
    handleFilterChange(newFilter);
  };

  return (
    <nav className="filter-nav">
      <ul className="nav">
        <li className="nav-item">
          <button
            className={`nav-link filter-button btn-all ${
              filter === "All" ? "active" : ""
            }`}
            onClick={() => handleFilterButtonClick("All")}
          >
            All
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link filter-button btn-act ${
              filter === "Active" ? "active" : ""
            }`}
            onClick={() => handleFilterButtonClick("Active")}
          >
            Active
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link filter-button btn-comp ${
              filter === "Completed" ? "active" : ""
            }`}
            onClick={() => handleFilterButtonClick("Completed")}
          >
            Completed
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default FilterButtons;
