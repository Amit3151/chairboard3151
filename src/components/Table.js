import { ReactComponent as SortIcon } from '../images/uil_sort-amount-down.svg';
import { useTable } from 'react-table'
import { useState } from 'react';

export default function Table({ columns, data, onSort}) {
  const tableInstance = useTable({ columns, data })

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance
  const [activeColumn, setActiveColumn] = useState(false);
  const [sortDirection, setSortDirection] = useState(false);

  
  const handleSort = (column) => {
    onSort(column);
    setActiveColumn(column.id);
    setSortDirection(sortDirection => {
      if (sortDirection[column.id] === 'ascending') {
        return { ...sortDirection, [column.id]: 'descending' };
      } else {
        return { ...sortDirection, [column.id]: 'ascending' };
      }
    });
  };


  return (
    <div className="elea_table_wrap" style={{ maxHeight: '500px',minHeight:'300px', overflow: 'auto' }}>
      <table {...getTableProps()} style={{ width: '100%' }}>
        <thead>
          {headerGroups.map(hG => (
            <tr {...hG.getHeaderGroupProps()}>
              {hG.headers.map(c => (
                <th style={{ fontWeight: 'normal' }} {...c.getHeaderProps()}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {c.render('Header')}
                    {c.sortFn && (
  <SortIcon onClick={() => handleSort(c)} className={`${activeColumn === c.id ? (sortDirection[c.id] === 'ascending' ? 'descending' : 'ascending') : 'ascending'}`} />
)}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(r => {
            prepareRow(r)
            return (
              <tr {...r.getRowProps()}>
                {r.cells.map(c => (
                  <td {...c.getCellProps()}>
                    {c.render('Cell')}
                  </td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
