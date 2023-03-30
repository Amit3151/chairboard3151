import Table from '../components/Table'


export default function Test() {
  const columns = [
    {
      Header: 'Name',
      accessor: 'name',
      id: 'name',
      sortFn: myNameFunction, // custom  function for the 'Name' column
    },
    {
      Header: 'Age',
      accessor: 'age',
      id: 'age',
    },
    // ...
  ];
function myNameFunction(){
  console.log("testing")
}

  function handleSort(columnId, sortFnName) {
    const column = columns.find(c => c.id === columnId);
    column.sortFn(); // call the custom sort function for the clicked column
    
  }

  const myData = [
    { name: 'John', age: 25 },
    { name: 'Sarah', age: 30 },
    { name: 'David', age: 20 },
    { name: 'Jane', age: 28 },
    // add more rows as needed
  ];

  return (
    <Table columns={columns} data={myData} onSort={handleSort} />
  );
}