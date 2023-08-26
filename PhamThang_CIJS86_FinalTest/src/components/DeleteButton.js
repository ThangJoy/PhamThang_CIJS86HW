import React from "react";
import { useTaskContext } from "../context/TaskContext";

function DeleteButton() {
  const { filter, deleteAllTasks, numberOfTasks } = useTaskContext();
  const showDeleteButton = numberOfTasks(filter) > 0;

  return (
    <div className="text-right">
      {showDeleteButton && (
        <button
          className="btn btn-danger"
          onClick={() => deleteAllTasks(filter)}
        >
          Delete All
        </button>
      )}
    </div>
  );
}

export default DeleteButton;
