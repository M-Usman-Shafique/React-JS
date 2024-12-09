import React from "react";
import Counter from "./Counter";
import { BlueHOC, GreenHOC, RedHOC } from "./HOC";
import { PurpleCount, YellowCount, IndigoCount } from "./Normal";

function Wrapper() {
  return (
    <div className="flex flex-col justify-center gap-3 min-h-screen">
      {/* HOC approach */}
      <div className="flex items-center gap">
        <RedHOC hoc={Counter} />
        <GreenHOC hoc={Counter} />
        <BlueHOC hoc={Counter} />
      </div>

      {/* Normal approach */}
      <div className="flex items-center gap">
        <IndigoCount />
        <PurpleCount />
        <YellowCount />
      </div>
    </div>
  );
}

export default Wrapper;
