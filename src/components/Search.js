import React from 'react';
import "../css/Search.css";

export default function Search({ searchOptions, handleSearchChange, handleSearchQueryChange, handleSearchSubmit,title }) {

  function handleSubmit(event) {
    event.preventDefault(); // prevent form submission
    handleSearchSubmit();
  }

  return (
    <>
 <div className="search_main">
        <div className="search_main_left">
          <h3>{title}</h3> 
        </div>       
      <form className='seracform' onSubmit={handleSubmit}>
        <span>
          <label className='srchbylbl' htmlFor="searchDropdown">Search By:</label>
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
        <button className="primary" type="submit">Submit</button>
      </form>
      </div>
    </>
  )
}
