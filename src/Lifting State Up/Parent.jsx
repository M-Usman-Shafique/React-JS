import React from "react";
import Child from "./Child";

function Parent(props) {   // props to receive "receiver function" from "Grand".
  const getData = (data) => {   // receiver function to bring data from "Child".
    const addData = {...data, id: 123 }; // updating the received data.
    console.log(addData);
    props.catchData(addData); // sending received data to "Grand" through its receiver function.
  };
  return (
    <div>
      <Child getData={getData} /> {/* sending reciever function to bring data from "Child". */}
    </div>
  );
}

export default Parent;
