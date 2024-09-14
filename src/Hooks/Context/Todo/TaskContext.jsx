import { createContext, useContext, useState, useEffect } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const addTask = (e) => {
    e.preventDefault();
    setTasks((prevTasks) => [...prevTasks, task]);
    setTask("");
  };

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  const delTask = (index) => {
    const remainingTasks = tasks.filter((task, i) => i !== index);
    setTasks(remainingTasks);
  }
  return (
    <TaskContext.Provider value={{ task, tasks, setTask, addTask, delTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = () => {
  return useContext(TaskContext);
};
