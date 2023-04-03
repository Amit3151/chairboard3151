import React, { useMemo,useState,useEffect} from 'react';
import { DateTime } from 'luxon'
import Header from "../components/Header";
import Sidebar from '../components/Sidebar';
import Filter from '../components/Filter';
import { ReactComponent as TableShowIcon } from '../images/table-show.svg'
import AgentCell from '../components/Cells/AgentCell';
import DateCell from '../components/Cells/DateCell';
import StatusCell from '../components/Cells/StatusCell';
import Table from '../components/Table'
import "../css/Master.css";
import { Link } from 'react-router-dom';
import Search from '../components/Search';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

const mockData = new Array(100).fill(0).map((_, i) => ({
  srNum: i,
  id: `SIGNxdwUNcEWVBA${getRandomInt(111,999)}`,
  master: {
    name: `Vishal Jadhav ${i}`,
    phone: getRandomInt(9111111111,9999999999),
  },
  masterCode: `ICHP${getRandomInt(8888,9898)}`,
  createdAt: DateTime.now().minus({ week: getRandomInt(1, 3) }),
  tagSrNo: getRandomInt(1111111111111111, 9999999999999999),
  type: ['Issue', 'Replace'][getRandomInt(0, 1)],
  status: ['Pending', 'Approved', 'Declined'][getRandomInt(0, 2)],
}))


export default function ManualRequest() {


// Search Function start
 const [searchBy, setSearchBy] = useState('master.name'); // default to searching by name
    const [searchQuery, setSearchQuery] = useState('');
  
    const searchOptions = [
      { label: 'Request ID', value: 'id' },
      { label: 'Name', value: 'master.name' },
      { label: 'Phone', value: 'master.phone' },
      { label: 'Master Code', value: 'masterCode' },     
      { label: 'Tag sr. no', value: 'tagSrNo' },
      
    ];
  
    function handleSearchChange(event) {
      setSearchBy(event.target.value);
    }
  
    function handleSearchQueryChange(event) {
      setSearchQuery(event.target.value);
    }

    const [data, setData] = useState(mockData);


    function handleSearchSubmit() {
     
      const filteredData = mockData.filter((item) => {
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
  // Search Function END

  const manualColumns = useMemo(() => [
    {
      Header: 'Sr. no',
      accessor: 'srNum',
      sortFn:srnmSort
    },
    {
      Header: 'Request ID',
      accessor: 'id'
    },
    {
      Header: 'Agent Details',
      accessor: 'master',
      Cell: AgentCell,
      sortFn:masterSort
    },
    {
      Header: 'Master Code',
      accessor: 'masterCode'
    },
    {
      Header: 'Request Time',
      accessor: 'createdAt',
      Cell: DateCell,
      sortFn:creatSort
    },
    {
      Header: 'Tag sr. no',
      accessor: 'tagSrNo'
    },
    {
      Header: 'Status',
      accessor: 'status',
      Cell: StatusCell,
      sortFn: statusSort
    },
    {
      Header: 'Registration type',
      accessor: 'type',
      sortFn: typeSort
    },
    {
      Header: 'Action',
      Cell: () => <div className='eye_icon_img_wrap_mr' style={{ cursor: 'pointer' }}>
        <Link to='/ManualReqDetails'>
          <TableShowIcon />
        </Link>
      </div>
    }
  ], [data])

  // Filter Patch

  const handleFilterSubmit = () => {
  }
  const Filters = [{
    filtername: 'Demo1', 
    filtonChange: handeldemo, 
    options: ['Demo 1', 'A', 'B'],
    selectedValue: ""
  },
  {
    filtername: 'Demo2',
    filtonChange: handeldemo,
    options: ['Demo 2', 'A', 'B'],
    selectedValue: ""
  }
  ];

  function handeldemo() {

  }

  // Sorting Functions Start
 
  const [sortOrder, setSortOrder] = useState("asc"); // default to ascending order

  function srnmSort() {
    const order = sortOrder === 'asc' ? 'desc' : 'asc';
    const sortedData = [...data].sort((a, b) => {
      if (order === 'asc') {
        return a.srNum - b.srNum;
      } else {
        return b.srNum - a.srNum;
      }
    });
    setData(sortedData);
    setSortOrder(order);
    // console.log([...data]);
  }

  function masterSort() {
    const order = sortOrder === 'asc' ? 'desc' : 'asc';
    const sortedData = [...data].sort((a, b) => {
      if (order === 'asc') {
        return a.master.name.localeCompare(b.master.name);
      } else {
        return b.master.name.localeCompare(a.master.name);
      }
    });
    setData(sortedData);
    setSortOrder(order);
  }
  
  function  creatSort(){
    const order = sortOrder === 'asc' ? 'desc' : 'asc';
    const sortedData = [...data].sort((a, b) => {
      if (order === 'asc') {
        return  new Date(a.createdAt) -  new Date(b.createdAt);
      } else {
        return  new Date(b.createdAt) -  new Date(a.createdAt);
      }
    });
    setData(sortedData);
    setSortOrder(order);   
  }
  

  function statusSort() {
    const order = sortOrder === 'asc' ? 'desc' : 'asc';
    const sortedData = [...data].sort((a, b) => {
      if (order === 'asc') {
        return a.status.localeCompare(b.status);
      } else {
        return b.status.localeCompare(a.status);
      }
    });
    setData(sortedData);
    setSortOrder(order);
  }
  function typeSort() {
    const order = sortOrder === 'asc' ? 'desc' : 'asc';
    const sortedData = [...data].sort((a, b) => {
      if (order === 'asc') {
        return a.type.localeCompare(b.type);
      } else {
        return b.type.localeCompare(a.type);
      }
    });
    setData(sortedData);
    setSortOrder(order);
  }

  function handleSort(column) {
    if (column.sortFn) {
      column.sortFn();
    }
    
  }
  // Sorting Functions End


  return (
    <>

      <Sidebar />

      <div className="main_body">
        <div className="aget_header">
          <Header />
        </div>
        <div className="master_body_container">
          <div className="body_master">
            <div className="search_bar">
              <div className="search_main">
                <div className="search_main_left">
                  <h3>Manual Request</h3>
                </div>
                <div className="header_search">
                <Search searchOptions={searchOptions} handleSearchChange={handleSearchChange}  handleSearchQueryChange ={handleSearchQueryChange} handleSearchSubmit={handleSearchSubmit}/>
                  <button className="primary">Submit</button>
                </div>
              </div>
            </div>
            <div className="filter_section">
              <Filter Filters={Filters} statuses={['Approved', 'Declined']} onSubmit={handleFilterSubmit} />
            </div>
          </div>
        </div>
        <div className="dashboard_table_container master" style={{ margin: '0 40px' }}>
          <Table columns={manualColumns} data={data} onSort={handleSort} />
        </div>
      </div>
    </>
  )
}

