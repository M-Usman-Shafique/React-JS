import React from "react";
import Parent from "./Parent";

function Grand() {
  const catchData = (data) => {   // receiver function to bring data from "Parent".
    const updateData = { ...data, post: "Developer" };  // updating the received data.
    console.log(updateData);
  };
  return (
    <div>
      <Parent catchData={catchData}/>   {/* sending reciever function to bring data from "Parent". */}
    </div>
  );
}

export default Grand;
