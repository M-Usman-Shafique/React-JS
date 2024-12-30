import React, { useState } from "react";

export default function withLoader(WrappedComponent) {
  return (props) => {
    const [isLoading, setIsLoading] = useState(true);

    setTimeout(() => { // mock async call: fetch data
      setIsLoading(false);
    }, 1000);

    return (
      <div>
        {isLoading ? <div>Loading...</div> : <WrappedComponent {...props} />}
      </div>
    );
  };
}
