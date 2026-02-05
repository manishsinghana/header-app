"use client";

import { useState } from "react";

const searchData = [
  { id: 1, title: "Dashboard" },
  { id: 2, title: "Profile" },
  { id: 3, title: "Settings" },
  { id: 4, title: "Notifications" },
  { id: 5, title: "Help Center" },
  { id: 6, title: "Logout" },
];

export default function HeaderSearch() {

  const [query, setQuery] = useState("");

  const filteredResults = searchData.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="header-search-wrap">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />

      {query && (
        <ul className="search-results">
          {filteredResults.length > 0 ? (
            filteredResults.map((item) => (
              <li key={item.id} className="search-item">
                {item.title}
              </li>
            ))
          ) : (
            <li className="search-empty">No results found</li>
          )}
        </ul>
      )}
    </div>
  );
}
