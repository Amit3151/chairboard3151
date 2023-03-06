import React, { useMemo } from 'react';
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

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

const mockData = new Array(100).fill(0).map((_, i) => ({
  srNum: 1,
  id: i,
  master: {
    name: `Vishal Jadhav ${i}`,
    phone: '9876543210',
  },
  masterCode: 'ICHP8797\n9876543210',
  createdAt: DateTime.now().minus({ week: getRandomInt(1, 3) }),
  tagSrNo: getRandomInt(0, 200),
  type: ['Issue', 'Replace'][getRandomInt(0, 1)],
  status: ['Pending', 'Approved', 'Declined'][getRandomInt(0, 2)],
}))

export default function ManualRequest() {
  const manualColumns = useMemo(() => [
    {
      Header: 'Sr. no',
      accessor: 'srNum'
    },
    {
      Header: 'Request ID',
      accessor: 'id'
    },
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
      Header: 'Request Time',
      accessor: 'createdAt',
      Cell: DateCell,
    },
    {
      Header: 'Tag sr. no',
      accessor: 'tagSrNo'
    },
    {
      Header: 'Status',
      accessor: 'status',
      Cell: StatusCell,
    },
    {
      Header: 'Registration type',
      accessor: 'type'
    },
    {
      Header: 'Action',
      Cell: () => <div style={{ cursor: 'pointer' }}><TableShowIcon/></div>
    }
  ], [])

  return (
    <>
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
                  <h3>Manual Request</h3> 
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
                </div>
              </div>
            </div>
            <div className="filter_section">
              <Filter/>
            </div>
          </div>
        </div>
        <div className="dashboard_table_container" style={{ margin: '0 80px' }}>
          <Table columns={manualColumns} data={mockData} />
        </div>
      </div>
    </>
  )
}