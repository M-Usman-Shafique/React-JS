import react, { useReducer } from "react";

const initialState = {
  task: "",
  tasks: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      return { ...state, task: action.payload };
    case "ADD_TASK":
      return { ...state, tasks: [...state.tasks, action.payload] };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((_, index) => index !== action.payload),
      };
    case "DELETE_ALL":
      return initialState;
    default:
      return state;
  }
};

function Todo() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({ type: "INPUT_CHANGE", payload: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TASK", payload: state.task });
    dispatch({ type: "INPUT_CHANGE", payload: "" });
  };

  const handleDelete = (index) => {
    dispatch({ type: "DELETE_TASK", payload: index })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={state.task} onChange={handleChange} />
        <button type="submit">Add Task</button>
        <button type="button" onClick={() => dispatch({ type: "DELETE_ALL" })}>
          Delete All
        </button>
      </form>
      <div>
        <ul>
          {state.tasks.map((task, i) => (
            <li key={i}>
              {task}
              <button
                onClick={() => handleDelete(i)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
