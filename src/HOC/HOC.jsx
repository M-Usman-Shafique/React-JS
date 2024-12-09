import React from "react";

export function RedHOC(props) {
  return (
    <div className="bg-red-600 px-8 py-4">
      <p className="text-center">Red</p>
      <props.hoc />
    </div>
  );
}

export function GreenHOC(props) {
  return (
    <div className="bg-green-600 px-8 py-4">
      <p className="text-center">Green</p>
      <props.hoc />
    </div>
  );
}

export function BlueHOC(props) {
  return (
    <div className="bg-blue-600 px-8 py-4">
      <p className="text-center">Blue</p>
      <props.hoc />
    </div>
  );
}
