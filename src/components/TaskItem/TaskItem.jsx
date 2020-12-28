import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import "./TaskItem.css";

function TaskItem({ task, deleteTask, handleChangeStatus }) {
  return (
    <li className="TaskItem">
      <input type="checkbox" checked={task.status} onChange= {() => handleChangeStatus(task.id)} />
      <h2>{task.title}</h2>
      <button onClick={() => deleteTask(task.id)}>
        <FaTrashAlt />
      </button>
    </li>
  );
}

export default TaskItem;
