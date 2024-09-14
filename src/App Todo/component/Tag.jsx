import React from "react";
import "./Tag.css";

function Tag({ tagName, selectTag, selected }) {
  const tagStyle = {
    HTML: { backgroundColor: "#e5532c", color: "white" },
    CSS: { backgroundColor: "#6457f9", color: "white" },
    JavaScript: { backgroundColor: "#ffd12c" },
    React: { backgroundColor: "#4cdafc" },
    Default: { backgroundColor: "#f9f9f9" }
  };

  return (
    <button
      type="button"
      className="tag"
      style={selected ? tagStyle[tagName] : tagStyle.Default}
      onClick={() => selectTag(tagName)}
    >
      {tagName}
    </button>
  );
}

export default Tag;