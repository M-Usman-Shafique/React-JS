import React, { useReducer, useEffect } from "react";
import Tag from "./Tag.jsx";
import "./Header.css";

const initialTags = ["HTML", "CSS", "JavaScript", "React"];

const initialState = {
  task: "",
  status: "todo",
  tags: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_TASK":
      return { ...state, task: action.payload };
    case "SET_STATUS":
      return { ...state, status: action.payload };
    case "TOGGLE_TAG":
      const { tag } = action.payload;
      const updatedTags = state.tags.includes(tag)
        ? state.tags.filter(item => item !== tag)
        : [...state.tags, tag];
      return { ...state, tags: updatedTags };
    case "RESET_FORM":
      return { ...initialState, tags: [] };
    case "DELETE_ALL_TASKS":
      return initialState; // Resetting state to initial state to clear all tasks
    default:
      return state;
  }
};

function Header({ setTasks }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify([])); // Clearing localStorage on component mount
  }, []);

  const addTask = (e) => {
    const { name, value } = e.target;
    dispatch({ type: `SET_${name.toUpperCase()}`, payload: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks(prev => [...prev, state]);
    dispatch({ type: "RESET_FORM" });
  };

  const handleDeleteAll = () => {
    dispatch({ type: "DELETE_ALL_TASKS" });
    setTasks([]); // Clearing tasks list in the parent component
    localStorage.removeItem("tasks"); // Clearing localStorage
  };

  const checkTag = (tag) => {
    return state.tags.includes(tag);
  };

  const selectTag = (tag) => {
    dispatch({ type: "TOGGLE_TAG", payload: { tag } });
  };

  return (
    <header className="app_header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={state.task}
          onChange={addTask}
          placeholder="Enter your tasks"
          className="task_input"
        />
        <div className="task_bottom">
          <div className="tags_container">
            {initialTags.map(tag => (
              <Tag
                key={tag}
                tagName={tag}
                selectTag={selectTag}
                selected={checkTag(tag)}
              />
            ))}
          </div>
          <div className="task_controls">
            <select
              name="status"
              value={state.status}
              className="task_status"
              onChange={addTask}
            >
              <option value="todo">Todo</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
            <button type="submit" className="task_submit">
              + Add Task
            </button>
            <button type="button" onClick={handleDeleteAll} className="clear_all">Delete All</button>
          </div>
        </div>
      </form>
    </header>
  );
}

export default Header;