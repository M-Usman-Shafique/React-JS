import React from "react";
import withLoader from "./withLoader";
import User from "./User";

const UserWithLoader = withLoader(User);

export default function App() {
  return (
    <div>
      <UserWithLoader />
    </div>
  );
}
