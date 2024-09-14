import React, { useState } from "react";

function SearchBar() {
  const items = ["item1", "item2", "item3", "task1", "task2", "post"];
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = items.filter((item) =>
    item.toLowerCase().startsWith(searchTerm.toLowerCase())
  );
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />
      {filteredItems.length > 0 ? (
        <ul>
          {filteredItems.map((item) => (
            <li key={item.id}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>Not found..</p>
      )}
    </div>
  );
}

export default SearchBar;
