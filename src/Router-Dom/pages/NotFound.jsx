import React, { useEffect } from "react";

function NotFound() {
  useEffect(() => {
    document.title = "Not Found"
  }, [])
  return (
    <div>
      <h1>404 Page Not Found</h1>
    </div>
  );
}

export default NotFound;
