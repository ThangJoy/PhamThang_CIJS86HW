import React from "react";

export function Task({ text, checked, onChange, onDelete }) {
  return (
    <li className={`list-group-item d-flex align-items-center ${checked ? 'checked' : ''}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="form-check-input"
      />
      <span className={checked ? "checked" : ""}>{text}</span>
      <button onClick={onDelete} className="btn-del">
        Delete
      </button>
    </li>
  );
}
