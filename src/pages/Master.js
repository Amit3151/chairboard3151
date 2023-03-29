import React, { useMemo, useReducer, useRef, useState } from 'react'
import { DateTime } from 'luxon'
import Header from "../components/Header";
import Sidebar from '../components/Sidebar';
import Filter from "../components/Filter";
import Search from '../components/Search';
import Table from '../components/Table'
import BalanceCell from '../components/Cells/BalanceCell';
import AddressCell from '../components/Cells/AddressCell';
import DateCell from '../components/Cells/DateCell';
import CreateMasterModal from '../modals/CreateMaster'
import cross from "../images/cross-23.svg";
import warning from "../images/mdi_alert-circle-outline.svg";
import '../css/Master.css'
import '../css/Request.css'
import {GrEdit} from 'react-icons/gr'
import { Link } from 'react-router-dom';
import MasterDetailsCell from '../components/Cells/MasterDetailsCell';
import {BiRupee} from 'react-icons/bi'

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

const mockData = new Array(100).fill(0).map((_, i) => ({
  id: i,
  actionstatus: getRandomInt(0, 1),
  master: {
    code: `Vishal Jadhav ${i}`,
    phone: '9876543210',
  },
  masterCode: 'ICHP8797',
  availableInventory: getRandomInt(0, 200),
  usedColumn: getRandomInt(10, 20),
  agents: getRandomInt(1000000000000000, 3000000000000000),
  balance: {
    logo: <BiRupee />,
    num: getRandomInt(100, 200),
  },
  createdAt: DateTime.now().minus({ week: getRandomInt(1, 3) }),
  address: {
    state: 'Rajasthan',
    city: 'Jaipur'
  }
}))

export default function Master() {
 
  

// Filter Status Amit
const [filteredData, setFilteredData] = useState(mockData);
  
  const handleFilterSubmit = (selectedStatus) => {
    if (selectedStatus) {
      let filtval = selectedStatus=="Blocked"? 0 : 1;
      const filtered = mockData.filter(item => item.actionstatus === Number(filtval));
      setData(filtered);
    } else {
      setData(mockData);
    }
  };

  const [data, setData] = useState(mockData);

  const handleBlockClick = (value) => {
      const updatedData = [...data];
      updatedData[value].actionstatus =  mockData[value].actionstatus === 0 ? 1:0;
      setData(updatedData);
  };
  

  function shortdet(){
console.log("detail clicked")
  }

// Filter Status 

  const masterColumns = useMemo(() => [
    {
      Header: 'Master Details',
      accessor: 'master',
      Cell: MasterDetailsCell
    },
    {
      Header: 'Master Code',
      accessor: 'masterCode'      
    },
    {
      Header: 'Available Inventory',
      accessor: 'availableInventory'
    },
    {
      Header: 'Used Column',
      accessor: 'usedColumn'
    },
    {
      Header: 'Agents',
      accessor: 'agents'
    },
    {
      Header: 'Wallet Balance',
      accessor: 'balance',
      Cell: BalanceCell
    },
    {
      Header: 'Joining Date',
      accessor: 'createdAt',
      Cell: DateCell,
    },
    {
      Header: 'District & State',
      accessor: 'address',
      Cell: AddressCell,
    },
    {
      Header: 'Action',
      accessor: 'id',
      Cell: ({ value }) => (
        <div className="flex row center">
            <button className={data[value].actionstatus===0 ? "styling_aprove2 block_btn new":"styling_aprove2 Unblock_btn"} onClick={() => handleBlockClick(value)}>{data[value].actionstatus===0 ? "Block":"Unblock"}</button>
            <Link to='/MasterDetails'>
                <GrEdit />
            </Link>
        </div>
    ),
    },   
  ], [])

  const [createModalOpen, toggleModal] = useReducer(st => !st, false)

  const [value2, newvalue2] = useState(true);
  const [error2, setError2] = useState(false);
  const inputRef2 = useRef();

  function approve2() {
    newvalue2((value2) => !value2);
  }
  function notApprove2() {
    newvalue2((value2) => !value2);
  }

  const styling_aprove2 = value2 ? "styling_aprove2" : "styling_aprove2 ";
  let approve_box2 = value2 ? "approve_box" : "approve_box active";

  const aprove_ref2 = useRef()
  const outclick2 = e => {
    if (!aprove_ref2.current.contains(e.target)) {
      newvalue2(true);
    }
  }
  
  return (
    <>
      <CreateMasterModal isOpen={createModalOpen} onClickOutside={toggleModal} />
      
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
                  <h3 style={{ fontSize: '22px', fontWeight: 600 }}>Master</h3>
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
                  <button className="primary">Submit</button>
                  <button onClick={toggleModal} className="primary">Create Master</button>
                </div>
              </div>
            </div>
            <div className="filter_section">
              <Filter statuses={['Blocked', 'Unblocked']} onSubmit={handleFilterSubmit} />
            </div>
          </div>
        </div>
        <div className="dashboard_table_container master" style={{ margin: '0 40px' }}>
          <Table columns={masterColumns} data={data} shorting={shortdet}/>
        </div>
      </div>
    </>
  )
}