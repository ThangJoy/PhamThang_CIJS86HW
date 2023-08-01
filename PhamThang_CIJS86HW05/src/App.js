import React, { useState } from "react";
import "./App.css";

const Task = ({ text, checked, onChange, onDelete }) => {
  return (
    <li className={`list-group-item d-flex align-items-center ${checked ? "checked" : ""}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="form-check-input"
      />
      <span className={checked ? "checked" : ""}>{text}</span>
      <button onClick={onDelete} className="btn btn-del btn-danger ml-auto">
        Delete
      </button>
    </li>
  );
};

const App = () => {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([
    { text: "Clean up bedroom", checked: false },
    { text: "Buy some milk", checked: false },
    { text: "Jogging", checked: false },
    { text: "Learn React", checked: false },
    { text: "Doing Exercises", checked: false },
  ]);
  const [filter, setFilter] = useState("All");

  const handleTaskChange = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, checked: !task.checked } : task
    );
    setTasks(updatedTasks);
  };

  const handleNewTaskChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      // Kiểm tra xem task đã tồn tại hay chưa
      if (tasks.some((task) => task.text.toLowerCase() === newTask.trim().toLowerCase())) {
        alert("Task đã tồn tại!");
        return;
      }

      setTasks([...tasks, { text: newTask.trim(), checked: false }]);
      setNewTask("");
    }
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAddTask();
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "All") return true;
    if (filter === "Active") return !task.checked;
    if (filter === "Completed") return task.checked;
    return false;
  });

  return (
    <div className="app container mt-5">
      <h1 className="mb-4">To Do List</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter your task here ..."
          value={newTask}
          onChange={handleNewTaskChange}
          onKeyPress={handleKeyPress}
        />
      </div>
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
          <button className="btn btn-primary" onClick={handleAddTask}>
            Add
          </button>
        </span>
      </div>
      <ul className="list-group">
        {filteredTasks.map((task, index) => (
          <Task
            key={index}
            text={task.text}
            checked={task.checked}
            onChange={() => handleTaskChange(index)}
            onDelete={() => handleDeleteTask(index)}
          />
        ))}
      </ul>
      <p>
        {(() => {
          let numberOfTasks = tasks.filter((task) => !task.checked).length;

          if (numberOfTasks === tasks.length) {
            if (numberOfTasks === 1)
              return `You have just 1 task for today only.`;
            if (numberOfTasks === 0) return "Nothing to be done for today.";
            return `You have total of ${numberOfTasks} tasks that need to be done.`;
          }
          if (numberOfTasks === 0) {
            return "Well done! That's all work for today.";
          }
          if (numberOfTasks === 1) {
            return "Just 1 more task remaining.";
          }
          return `${numberOfTasks} tasks left!`;
        })()}
      </p>
    </div>
  );
};

export default App;
