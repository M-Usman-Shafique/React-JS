import React from "react";
// import { Table } from "react-bootstrap";

function Mapping() {
  const data = [
    { username: "Usman", age: 30, dept: "Web Developer" },
    { username: "Noman", age: 25, dept: "App Developer" },
    { username: "Salman", age: 15, dept: "Data Scientist" },
    { username: "Fezan", age: 20, dept: "Software Engineer" },
    { username: "Zeshan", age: 18, dept: "Marketing Manager" },
  ];

  return (
    <div>
      {/* <Table striped bordered hover> */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Dept.</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={i}>
              <td>{item.username}</td>
              <td>{item.age}</td>
              <td>{item.dept}</td>
            </tr>
          ))}
        </tbody>
      {/* </Table> */}
    </div>
  );
}

export default Mapping;
