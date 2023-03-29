import React, { useState } from 'react';

const FilterForm = ({ statuses, onSubmit }) => {
  const [selectedStatus, setSelectedStatus] = useState('');
  
  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(selectedStatus);
    
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="status">Status:</label>
      <select id="status" value={selectedStatus} onChange={handleStatusChange}>
        <option value="">All</option>
        {statuses.map(status => (
          <option key={status} value={status}>{status}</option>
        ))}
      </select>
      <button type="submit">Filter</button>
    </form>
  );
};

export default FilterForm;