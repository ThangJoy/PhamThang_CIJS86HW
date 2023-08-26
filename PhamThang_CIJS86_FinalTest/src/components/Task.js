import React from "react";
import { useTaskContext } from "../context/TaskContext";
export function Task({ text, checked, onChange, id, onDelete }) {
  const { toggleTask } = useTaskContext();

  const handleTaskChange = () => {
    toggleTask(id);
  };
  return (
    <li
      className={`list-group-item d-flex align-items-center ${
        checked ? "checked" : ""
      }`}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={handleTaskChange}
        className="form-check-input"
      />
      <span className={checked ? "checked" : ""}>{text}</span>
      <button onClick={onDelete} className="btn-del">
        Delete
      </button>
    </li>
  );
}
