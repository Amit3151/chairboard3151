import Table from '../components/Table'
import React, {useState, useReducer, useMemo } from 'react'



export default function Test() {
  const columns = useMemo(() =>  [
    {
      Header: 'Name',
      accessor: 'agent.name',
      sortFn: myNameFunction, // custom  function for the 'Name' column
    },
    {
      Header: 'Age',
      accessor: 'age',
      sortFn: myAgeFunction,
    },
    {
      Header: 'Phone',
      accessor: 'agent.phone',
      
    },
    {
      Header: 'Total',
      accessor: 'agent.total',
      sortFn: sortTotal,
      
      
    },
    // ...
  ]);

  //getting random init
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

  const myData = new Array(10).fill(0).map((_, i) => ({
    id: i,
    age: getRandomInt(10, 40),
    agent: {
      name: `Vishal Jadhav ${i}`,
      phone: getRandomInt(8888888888, 9999999999),
      total: getRandomInt(10, 20)
    },
    dayData:{

    }

  }
  )
  )

  const [data, setData] = useState(myData);
  const [sortOrder, setSortOrder] = useState("asc"); // default to ascending order
  
function myNameFunction() {
  const order = sortOrder === 'asc' ? 'desc' : 'asc';
  const sortedData = [...data].sort((a, b) => {
    if (order === 'asc') {
      return a.agent.name.localeCompare(b.agent.name);
    } else {
      return b.agent.name.localeCompare(a.agent.name);
    }
  });
  setData(sortedData);
  setSortOrder(order);
}
function myAgeFunction(){
  console.log("Age")
}






function sortTotal() {
  const order = sortOrder === 'asc' ? 'desc' : 'asc';
  const sortedData = [...data].sort((a, b) => {
    if (order === 'asc') {
      return a.agent.total - b.agent.total;
    } else {
      return b.agent.total - a.agent.total;
    }
  });
  setData(sortedData);
  setSortOrder(order);
  // console.log([...data]);
}


  function handleSort(column) {
    if (column.sortFn) {
      column.sortFn();
    }
    
  }

  

  return (
    <Table columns={columns} data={data} onSort={handleSort} />
  );
}