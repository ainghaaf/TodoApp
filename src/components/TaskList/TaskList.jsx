import React from "react";
import "./TaskList.css";
import { TaskItem } from "../";

function TaskList({ tasks, deleteTask, handleChangeStatus }) {
  return (
    <div className="TaskList">
      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={`task-${task.id}`}
            task={task}
            deleteTask={deleteTask}
            handleChangeStatus={handleChangeStatus}
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
