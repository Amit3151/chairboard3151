import React, { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange  } from 'react-date-range';

function DateRangeSelector() {
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection',
    },
  ]);

  const handleDateChange = (ranges) => {
    setDateRange([ranges.selection]);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const applyDateRange = () => {
    console.log('selected date range:', dateRange[0]);
    setIsOpen(false);
  };

  return (
    <div className="date-range-dropdown">
      <div className="date-range-toggle" onClick={toggleMenu}>
      {dateRange[0].startDate.toLocaleDateString()} - {dateRange[0].endDate ? dateRange[0].endDate.toLocaleDateString() : 'Present'}
      </div>
      {isOpen && (
        <div className="date-range-menu">
          <DateRange
          editableDateInputs={true}
          moveRangeOnFirstSelection={false}
            ranges={dateRange}
            onChange={handleDateChange}
            className="date-range-selector"
          />
          <div className="apply-button" onClick={applyDateRange}>
            Apply
          </div>
        </div>
      )}
      
    </div>
  );
}

export default DateRangeSelector;
