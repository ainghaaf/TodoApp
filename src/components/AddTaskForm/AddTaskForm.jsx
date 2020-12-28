import React, { useState } from "react";
import "./AddTaskForm.css";

function AddTaskForm({ addTask }) {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    if (event) {
      event.preventDefault();
    }
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    addTask(value);
    setValue("")
  };

  return (
    <div className="AddTaskForm">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's need to be done?"
          value={value}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddTaskForm;
