import React, { useState } from "react";
import { useFetch } from "../Hooks/useFetch";
import { useNavigate } from "react-router-dom";
const SearchBox = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [data] = useFetch(`search/movie`, { query });

  return (
    <div className="searchBox">
      <input
        className="searchField"
        value={query}
        type="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="resultBox">
        <ul>
          {data?.results?.map((item) => {
            return (
              <li key={item.id} onClick={() => navigate(`movie/${item.id}`)}>
                {item.title}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SearchBox;
