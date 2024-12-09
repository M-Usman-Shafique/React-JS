import React from "react";
import Counter from "./Counter";

export function PurpleCount() {
  return (
    <div className="bg-purple-600 px-8 py-4">
      <p className="text-center">Purple</p>
      <Counter />
    </div>
  );
}

export function YellowCount() {
  return (
    <div className="bg-yellow-500 px-8 py-4">
      <p className="text-center">Yellow</p>
      <Counter />
    </div>
  );
}

export function IndigoCount() {
  return (
    <div className="bg-indigo-700 px-8 py-4">
      <p className="text-center">Indigo</p>
      <Counter />
    </div>
  );
}
