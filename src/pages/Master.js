import React, { useMemo, useReducer } from 'react'
import { DateTime } from 'luxon'
import Header from "../components/Header";
import Sidebar from '../components/Sidebar';
import Filter from "../components/Filter";
import Search from '../components/Search';
import Table from '../components/Table'
import AgentCell from '../components/Cells/AgentCell';
import AddressCell from '../components/Cells/AddressCell';
import DateCell from '../components/Cells/DateCell';
import CreateMasterModal from '../modals/CreateMaster'
import '../css/Master.css'
import '../css/Request.css'

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

const mockData = new Array(100).fill(0).map((_, i) => ({
  id: i,
  master: {
    name: `Vishal Jadhav ${i}`,
    phone: '9876543210',
  },
  masterCode: 'ICHP8797\n9876543210',
  availableInventory: getRandomInt(0, 200),
  usedColumn: getRandomInt(100, 200),
  agents: getRandomInt(10, 30),
  balance: getRandomInt(100, 200),
  createdAt: DateTime.now().minus({ week: getRandomInt(1, 3) }),
  address: {
    state: 'Rajasthan',
    city: 'Jaipur'
  }
}))

export default function Master() {
  const masterColumns = useMemo(() => [
    {
      Header: 'Master Details',
      accessor: 'master',
      Cell: AgentCell
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
      accessor: 'balance'
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
      Cell: () => (
        <div className="flex row center">
          <button className="table-danger">Block</button>
        </div>
      ),
    }
  ], [])
  const [createModalOpen, toggleModal] = useReducer(st => !st, false)

  return (
    <>
      <CreateMasterModal isOpen={createModalOpen} onClickOutside={toggleModal} />
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main_body">
        <div className="aget_header">
          <Header />
        </div>
        <div className="master_body_container">
          <div className="body_master">
            <div className="search_bar">
              <div className="search_main">
                <div className="search_main_left">
                  <h3>Master</h3> 
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
              <Filter />
            </div>
          </div>
        </div>
        <div className="dashboard_table_container" style={{ margin: '0 80px' }}>
          <Table columns={masterColumns} data={mockData} />
        </div>
      </div>
    </>
  )
}
