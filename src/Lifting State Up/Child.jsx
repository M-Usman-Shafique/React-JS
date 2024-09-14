import React from "react";

function Child(props) {   // props to receive "receiver function" from "Parent".
  const user = { name: "Usman", age: 30, gender: "male", city: "Lahore" };
  console.log(user);
  props.getData(user);     // sending data to "Parent" throgh its "receiver function".
  return (
    <div>

    </div>
  )
}

export default Child;
