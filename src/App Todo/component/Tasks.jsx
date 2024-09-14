import React from "react";
import "./Tasks.css";
import Cards from "./Cards";

function Tasks({ title, icon, tasks, status }) {
  return (
    <section className="sector">
      <h1 className="tasks_header">
        <img src={icon} className="tasks_icon" alt={title} />
        {title}
      </h1>
      {tasks.map(
        (task, index) =>
          task.status === status && (
            <Cards
              key={index}
              title={task.task}
              tags={task.tags}
              index={index}
            />
          )
      )}
    </section>
  );
}

export default Tasks;
