import React, { useState } from 'react'

function Form() {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    I;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(details)
  };

  return (
    <form onChange={handleSubmit}>
      <h3>Name:</h3> <input type="text" name="name" onChange={handleChange} />{" "}
      <h3>Email:</h3>{" "}
      <input type="email" name="email" onChange={handleChange} />{" "}
      <h3>Password:</h3>{" "}
      <input type="password" name="password" onChange={handleChange} />
      <h3>Address:</h3>{" "}
      <textarea name="address" onChange={handleChange}></textarea>{" "}
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form