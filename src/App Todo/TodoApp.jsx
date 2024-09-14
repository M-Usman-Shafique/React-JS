import React, { useState, useEffect } from "react";
import Header from "./component/Header";
import "./TodoApp.css";
import Tasks from "./component/Tasks";
import Todo from "./component/img/direct-hit.png";
import Doing from "./component/img/glowing-star.png";
import Done from "./component/img/check-mark-button.png";
import { HandleDeleteContext, HandleEditContext } from "./component/Context";

const oldTasks = localStorage.getItem("tasks");   //  retrieving tasks from localStorage if exists.

function TodoApp() {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);   // new state initialization with "oldTasks" retrieved from localStorage. An if no task exists then empty array [].

  useEffect(() => {   // Storing the new state in localStorage.
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (taskIndex) => {
    const delTasks = tasks.filter((task, index) => index !== taskIndex);  // Grab all tasks from "tasks" array & store them in new array "delTasks", except the one at "taskIndex".
    setTasks(delTasks);   // update previous state of "tasks" with new state.
  };

  const handleEdit = (taskIndex, newUpdate) => {  // Two parameters: where to update & what to update.
    const updatedTasks = tasks.map((task, index) => {
      if (index === taskIndex) {
        return { ...task, ...newUpdate };   // previous task data + new data
      }
      return task;
    });
    setTasks(updatedTasks);    // Replacing old "tasks" with new "updatedTasks".
  };

  return (
    <HandleDeleteContext.Provider value={handleDelete}>
      <HandleEditContext.Provider value={handleEdit}>
        <div className="app">
          <Header setTasks={setTasks} />
          <main className="app_main">
            <Tasks title="Todo" icon={Todo} tasks={tasks} status="todo" />
            <Tasks title="Doing" icon={Doing} tasks={tasks} status="doing" />
            <Tasks title="Done" icon={Done} tasks={tasks} status="done" />
          </main>
        </div>
      </HandleEditContext.Provider>
    </HandleDeleteContext.Provider>
  );
}

export default TodoApp;
