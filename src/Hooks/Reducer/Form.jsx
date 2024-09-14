import React, { useReducer } from "react";

const initialState = { isLoggedIn: false, email: "", password: "" };
const reducer = (state, action) => {
  switch (action.type) {
    case "EMAIL_CHANGE":
      return { ...state, email: action.payload };
    case "PASSWORD_CHANGE":
      return { ...state, password: action.payload };
    case "LOGIN":
      return {
        ...state,
        isLoggedIn: true,
        email: action.payload.email,
        password: action.payload.password,
      };
    case "LOGOUT":
      return initialState;
    default:
      return state;
  }
};
function Form() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleEmail = (e) => {
    dispatch({ type: "EMAIL_CHANGE", payload: e.target.value });
  };

  const handlePassword = (e) => {
    dispatch({ type: "PASSWORD_CHANGE", payload: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    {
      state.email && state.password
        ? dispatch({
            type: "LOGIN",
            payload: { email: state.email, password: state.password },
          })
        : alert("Fill the both fields.");
    }
  };
  return (
    <div>
      {state.isLoggedIn ? (
        <>
          <h1>Welcome, {state.email}</h1>
          <button onClick={() => dispatch({ type: "LOGOUT" })}>Logout</button>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <input type="email" value={state.email} onChange={handleEmail} />
          <input
            type="password"
            value={state.password}
            onChange={handlePassword}
          />
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
}

export default Form;
