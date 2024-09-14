import React from "react";
import { useParams } from "react-router-dom";

function UserDetails() {
  let { userid } = useParams();

  return (
    <div>
      <h2>User Details of ID: {userid}</h2>
    </div>
  );
}
export default UserDetails;
