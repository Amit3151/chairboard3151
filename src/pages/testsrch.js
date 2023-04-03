import Table from '../components/Table'
import React, {useState, useReducer, useMemo } from 'react'
import Search from '../components/Search';


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
        total: getRandomInt(10, 20),
        trasectionid:getRandomInt(888888, 9999999)
      },
      
    }
    )
    )


export default function TestSearch() {
    const [searchBy, setSearchBy] = useState('agent.name'); // default to searching by name
  const [searchQuery, setSearchQuery] = useState('');

  const searchOptions = [
    { label: 'Name', value: 'agent.name' },
    { label: 'Age', value: 'age' },
    { label: 'Phone', value: 'agent.phone' },
    { label: 'Total', value: 'agent.total' },
  ];

  function handleSearchChange(event) {
    setSearchBy(event.target.value);
  }

  function handleSearchQueryChange(event) {
    setSearchQuery(event.target.value);
  }
  const [data, setData] = useState(myData);
  function handleSearchSubmit() {
    // perform search logic here
    // e.g. filter the data based on searchBy and searchQuery state values
    
    const filteredData = myData.filter((item) => {
      const searchProp = searchBy.split('.');
      let searchValue = item;
      for (let i = 0; i < searchProp.length; i++) {
        searchValue = searchValue[searchProp[i]];
      }
      return searchValue.toString().toLowerCase().includes(searchQuery.toLowerCase());
    });
  
    // update the data state with the filtered data
    setData(filteredData);
  }


  const columns = useMemo(() =>  [
    {
      Header: 'Name',
      accessor: 'agent.name',
    },
    {
      Header: 'Transection ID',
      accessor: 'agent.trasectionid',
    },
    {
      Header: 'Phone',
      accessor: 'agent.phone',
      
    },
    {
      Header: 'Total',
      accessor: 'agent.total',
      
      
    },
    // ...
  ],[]); 

  

  return (
    <>
   
    <div>
        <Search searchOptions={searchOptions} handleSearchChange={handleSearchChange}  handleSearchQueryChange ={handleSearchQueryChange} handleSearchSubmit={handleSearchSubmit}/>
    <Table columns={columns} data={data} />
    </div>
    
    </>
  );
}