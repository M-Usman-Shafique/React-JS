import React from "react";
import { useTask } from "./TaskContext";

function Task() {
  const { task, setTask, addTask, delTask, tasks } = useTask();
  return (
    <>
      <div>
        <form onSubmit={addTask}>
          <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
          <button type="submit">Add Task</button>
        </form>
      </div>
      <div>
        <ul>
            {tasks.map((item, index) => (
                <li key={index}>
                    {item}
                    <button type="button" onClick={() => delTask(index)}>Delete</button>
                </li>
            ))}
        </ul>
      </div>
    </>
  );
}

export default Task;
