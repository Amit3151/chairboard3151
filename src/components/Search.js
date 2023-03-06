import React from 'react';
import "../css/Search.css";

export default function Search(props) {
  return (
    <>
      <div className="search_main">
        <div className="search_main_left">
          <h3>{props.title}</h3> 
        </div>
        <div className="header_search">
          <span>
            <label htmlFor="">Search</label>
            <input
              className="input_search"
              type="text"
              placeholder="Enter"
              name="search"
            />
          </span>
          <button>Submit</button>
        </div>
      </div>
    </>
  )
}
