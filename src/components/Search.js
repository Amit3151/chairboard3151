import React from 'react';
import "../css/Search.css";

export default function Search(props) {
  const { searchOptions } = props;
  const { handleSearchChange } = props;
  const { handleSearchQueryChange } = props;

  return (
    <>
      <span>
        <label htmlFor="searchDropdown">Search By:</label>
        <select id="searchDropdown" name="searchDropdown" onChange={handleSearchChange}>
          {searchOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        </span>
        <span>
        <label htmlFor="searchInput">Search:</label>
        <input
          className="input_search"
          type="text"
          placeholder="Enter"
          name="searchInput"
         onChange={handleSearchQueryChange}
        
        />
      </span>
    </>
  )
}


