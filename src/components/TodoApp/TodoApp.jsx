import React, { useEffect, useState } from "react";
import { AddTaskForm, TaskList, FilterFooter } from "../";
import "./TodoApp.css";
import { v4 as uuidv4 } from "uuid";

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    let storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    } else {
      localStorage.setItem("tasks", tasks);
    }
  }, []);

  useEffect(() => {
    sortTasksByFilter();
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [filter, tasks, refresh]);

  const sortTasksByFilter = () => {
    if (filter === "all") {
      setFilteredTasks(tasks);
    }
    if (filter === "completed") {
      const newCompletedTasks = tasks;
      setFilteredTasks(newCompletedTasks.filter((task) => task.status));
    }
    if (filter === "active") {
      const newCompletedTasks = tasks;
      setFilteredTasks(newCompletedTasks.filter((task) => !task.status));
    }
  };

  const addTask = (taskTitle) => {
    setTasks([
      ...tasks,
      {
        id: uuidv4(),
        title: taskTitle,
        status: false,
      },
    ]);
  };

  const deleteTask = (taskId) => {
    let newTaskList = tasks;
    setTasks(newTaskList.filter((task) => taskId !== task.id));
  };

  const handleChangeStatus = (taskId) => {
    tasks.map((task) => {
      if (task.id === taskId) {
        task.status = !task.status;
      }
    });
    setRefresh(refresh + 1);
  };

  return (
    <div className="TodoApp">
      <AddTaskForm addTask={addTask} />
      <TaskList
        tasks={filteredTasks}
        deleteTask={deleteTask}
        handleChangeStatus={handleChangeStatus}
      />
      <FilterFooter tasks={filteredTasks} updateFilter={setFilter} />
    </div>
  );
}

export default TodoApp;
