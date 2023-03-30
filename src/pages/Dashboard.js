import React, {useState, useReducer, useMemo } from 'react'
import { Popover } from 'react-tiny-popover'
import { DateTime } from 'luxon'
import "../css/Dashboard.css";
import Header from "../components/Header";
import Sidebar from '../components/Sidebar';
import Figure from '../components/Figure'
import AgentCell from '../components/Cells/AgentCell'
import MasterCell from '../components/Cells/MasterCell'
import MasterDetailsCell from '../components/Cells/MasterDetailsCell'
import DatesCell from '../components/Cells/DatesCell'
import { ReactComponent as ChevronDown } from '../images/ep_arrow-down.svg'
import { ComposedChart, Line, CartesianGrid, ResponsiveContainer, YAxis, XAxis, Bar } from 'recharts'
import Table from '../components/Table'


//getting random init
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

const FIGURES = {
  inStock: 'Tag in Stock',
  agentsUsed: 'Agents Used Tags',
  agentsUnused: 'Agents Unused Tags',
  totalAgents: 'Total Agents',
  totalMaster: 'Total Master',
  totalSale: 'Total Sale',
}

const YEARS = new Array(6).fill(0).map((_, i) => DateTime.now().minus({ year: i }).toFormat('yyyy')).reverse()
const MONTHS = new Array(12).fill(0).map((_, i) => DateTime.now().minus({ month: i }).toFormat('MMM')).reverse()
const WEEKS = new Array(24).fill(0).map((_, i) => DateTime.now().minus({ week: i }).toFormat('dd/MM/yyyy')).reverse()
const DAYS = new Array(31).fill(0).map((_, i) => DateTime.now().minus({ day: i }).toFormat('dd/MM/yyyy')).reverse()




const mockData = {
  figures: {
    inStock: 12,
    agentsUsed: 24,
    agentsUnused: 0,
    totalAgents: 26,
    totalMaster: 111,
    totalSale: 2392,
  },
  agents: new Array(100).fill(0).map((_, i) => ({
    id: i,
    agent: {
      name: `Vishal Jadhav `,
      phone: getRandomInt(8888888888, 9999999999),
    },
    // Data for Dates Start
    dayData: {
      [DateTime.now().minus({ day: 1 }).toFormat('dd/MM/yyyy')]: {
        data: getRandomInt(0, 20),
        salediff:
          function () {
            return mockData.agents[i].dayData[DateTime.now().minus({ day: 1 }).toFormat('dd/MM/yyyy')].data - mockData.agents[i].dayData[[DateTime.now().minus({ day: 2 }).toFormat('dd/MM/yyyy')]].data;
          },
      },
      [DateTime.now().minus({ day: 2 }).toFormat('dd/MM/yyyy')]: {
        data: getRandomInt(0, 30),
        salediff:
          function () {
            return null;
          },
      },
      [DateTime.now().minus({ day: 3 }).toFormat('dd/MM/yyyy')]: {
        data: getRandomInt(0, 40),
        salediff:
          function () {
            return null;
          },
      },
      [DateTime.now().toFormat('dd/MM/yyyy')]: {
        data: getRandomInt(0, 10),
        salediff:
          function () {
            return mockData.agents[i].dayData[DateTime.now().toFormat('dd/MM/yyyy')].data - mockData.agents[i].dayData[[DateTime.now().minus({ day: 1 }).toFormat('dd/MM/yyyy')]].data;
          },
      },
      total: function () {
        return mockData.agents[i].dayData[DateTime.now().toFormat('dd/MM/yyyy')].data + mockData.agents[i].dayData[[DateTime.now().minus({ day: 1 }).toFormat('dd/MM/yyyy')]].data + mockData.agents[i].dayData[[DateTime.now().minus({ day: 2 }).toFormat('dd/MM/yyyy')]].data + mockData.agents[i].dayData[[DateTime.now().minus({ day: 3 }).toFormat('dd/MM/yyyy')]].data;
       }
    },
    weekData: {
      [DateTime.now().minus({  week: 1 }).toFormat('dd/MM/yyyy')]: {
        data: getRandomInt(0, 200),
        salediff:
          function () {
            return mockData.agents[i].weekData[DateTime.now().minus({ week: 1 }).toFormat('dd/MM/yyyy')].data - mockData.agents[i].weekData[[DateTime.now().minus({ week: 2 }).toFormat('dd/MM/yyyy')]].data;
          },
      },
      [DateTime.now().minus({  week: 2 }).toFormat('dd/MM/yyyy')]: {
        data: getRandomInt(0, 300),
        salediff:
          function () {
            return null;
          },
      },
      [DateTime.now().minus({ week: 3}).toFormat('dd/MM/yyyy')]: {
        data: getRandomInt(0, 400),
        salediff:
          function () {
            return null;
          },
      },
      [DateTime.now().toFormat('dd/MM/yyyy')]: {
        data: getRandomInt(0, 100),
        salediff:
          function () {
            return mockData.agents[i].weekData[DateTime.now().toFormat('dd/MM/yyyy')].data - mockData.agents[i].weekData[[DateTime.now().minus({ week: 1 }).toFormat('dd/MM/yyyy')]].data;
          },
      },
      total: function () {
        return mockData.agents[i].weekData[DateTime.now().toFormat('dd/MM/yyyy')].data + mockData.agents[i].weekData[[DateTime.now().minus({ week: 1 }).toFormat('dd/MM/yyyy')]].data + mockData.agents[i].weekData[[DateTime.now().minus({ week: 2 }).toFormat('dd/MM/yyyy')]].data + mockData.agents[i].weekData[[DateTime.now().minus({ week: 3 }).toFormat('dd/MM/yyyy')]].data;
       }
    },
    monthData: {
      [DateTime.now().minus({  month: 1 }).toFormat('dd/MM/yyyy')]: {
        data: getRandomInt(0, 1600),
        salediff:
          function () {
            return mockData.agents[i].monthData[DateTime.now().minus({ month: 1 }).toFormat('dd/MM/yyyy')].data - mockData.agents[i].monthData[[DateTime.now().minus({ month: 2 }).toFormat('dd/MM/yyyy')]].data;
          },
      },
      [DateTime.now().minus({  month: 2 }).toFormat('dd/MM/yyyy')]: {
        data: getRandomInt(0, 1200),
        salediff:
          function () {
            return null;
          },
      },
      [DateTime.now().minus({ month: 3}).toFormat('dd/MM/yyyy')]: {
        data: getRandomInt(0, 800),
        salediff:
          function () {
            return null;
          },
      },
      [DateTime.now().toFormat('dd/MM/yyyy')]: {
        data: getRandomInt(0, 400),
        salediff:
          function () {
            return mockData.agents[i].monthData[DateTime.now().toFormat('dd/MM/yyyy')].data - mockData.agents[i].monthData[[DateTime.now().minus({ month: 1 }).toFormat('dd/MM/yyyy')]].data;
          },
      },
      total: function () {
        return mockData.agents[i].monthData[DateTime.now().toFormat('dd/MM/yyyy')].data + mockData.agents[i].monthData[[DateTime.now().minus({ month: 1 }).toFormat('dd/MM/yyyy')]].data + mockData.agents[i].monthData[[DateTime.now().minus({ month: 2 }).toFormat('dd/MM/yyyy')]].data + mockData.agents[i].monthData[[DateTime.now().minus({ month: 3 }).toFormat('dd/MM/yyyy')]].data;
       }
    },
    yearData: {
      [DateTime.now().minus({  year: 1 }).toFormat('dd/MM/yyyy')]: {
        data: getRandomInt(0, 2000),
        salediff:
          function () {
            return mockData.agents[i].yearData[DateTime.now().minus({ year: 1 }).toFormat('dd/MM/yyyy')].data - mockData.agents[i].yearData[[DateTime.now().minus({ year: 2 }).toFormat('dd/MM/yyyy')]].data;
          },
      },
      [DateTime.now().minus({  year: 2 }).toFormat('dd/MM/yyyy')]: {
        data: getRandomInt(0, 3200),
        salediff:
          function () {
            return null;
          },
      },
      [DateTime.now().minus({ year: 3}).toFormat('dd/MM/yyyy')]: {
        data: getRandomInt(0, 4000),
        salediff:
          function () {
            return null;
          },
      },
      [DateTime.now().toFormat('dd/MM/yyyy')]: {
        data: getRandomInt(0, 1000),
        salediff:
          function () {
            return mockData.agents[i].yearData[DateTime.now().toFormat('dd/MM/yyyy')].data - mockData.agents[i].yearData[[DateTime.now().minus({ year: 1 }).toFormat('dd/MM/yyyy')]].data;
          },
      },
      total: function () {
        return mockData.agents[i].yearData[DateTime.now().toFormat('dd/MM/yyyy')].data + mockData.agents[i].yearData[[DateTime.now().minus({ year: 1 }).toFormat('dd/MM/yyyy')]].data + mockData.agents[i].yearData[[DateTime.now().minus({ year: 2 }).toFormat('dd/MM/yyyy')]].data + mockData.agents[i].yearData[[DateTime.now().minus({ year: 3 }).toFormat('dd/MM/yyyy')]].data;
       }
    },

      //Data For Dates Closed 

    masterCode:
    {
      masterCodevalue1: 'ICHP8797',
      masterCodevalue2: '9876543210'
    }
    ,
    total: getRandomInt(0, 1000),
  })),
  inventory: new Array(100).fill(0).map((_, i) => ({
    id: i,
    agent: {
      name: `Vishal Jadhav ${i}`,
      phone: getRandomInt(8888888888, 9999999999),
    },
    masterDetails: {
      code: `P8797`,
      phone: `9876543210`
    },
    availableInventory: getRandomInt(0, 200),
    usedColumn: getRandomInt(100, 200),
    avgDayActivation: getRandomInt(10, 30),
    avgWeekActivation: getRandomInt(100, 200),
    pendingQty: getRandomInt(20, 54),
  })),
  sales: {
    yearly: YEARS.map(year => ({ year, value: getRandomInt(10000, 100000) })),
    monthly: MONTHS.map(month => ({ month, value: getRandomInt(1000, 10000) })),
    weekly: WEEKS.map(week => ({ week, value: getRandomInt(100, 1000) })),
    daily: DAYS.map(day => ({ day, value: getRandomInt(0, 100) })),
  },

}
const timingFilters = ['Day wise', 'Week wise', 'Monthly wise', 'Year wise'];

const TimingSelect = ({ onClick }) => (
  <div className="flex column" style={{ background: '#F1F5F9', padding: '10px 15px', boxShadow: '-6px -6px 12px #FFFFFF, 6px 6px 12px rgba(212, 224, 235, 0.8)' }}>
    {timingFilters.map((label, index) => (
      <div onClick={() => onClick(index)} style={{ marginBottom: 10, cursor: 'pointer' }}>
        {label}
      </div>
    ))}
  </div>
)

export default function Dashboard() {
  const [agentPopoverOpen, toggleAgentPopover] = useReducer(st => !st, false)
  const [agentTimingPopoverOpen, toggleAgentTimingPopover] = useReducer(st => !st, false)
  const [chartPopoverOpen, toggleChartPopoverOpen] = useReducer(st => !st, false)
  const [inventoryPopoverOpen, toggleInventoryPopover] = useReducer(st => !st, false)
  const [agentTiming, setAgentTiming] = useReducer((_, a) => a, 0)
  const [chartTiming, setChartTiming] = useReducer((_, a) => a, 2)
  const [inventoryTiming, setInventoryTiming] = useReducer((_, a) => a, 0)
  const [selectedAgent, setAgent] = useReducer((_, a) => a, 'All')
  //try to add " : 'none' " after 'All'

 

  const dates = useMemo(() => ({
    lastFourDays: [
      DateTime.now().minus({ day: 3 }).toFormat('dd/MM/yyyy'),
      DateTime.now().minus({ day: 2 }).toFormat('dd/MM/yyyy'),
      DateTime.now().minus({ day: 1 }).toFormat('dd/MM/yyyy'),
      DateTime.now().toFormat('dd/MM/yyyy'),
    ],

    lastFourWeeks: [      
      DateTime.now().minus({ week: 3 }).toFormat('dd/MM/yyyy'),
      DateTime.now().minus({ week: 2 }).toFormat('dd/MM/yyyy'),
      DateTime.now().minus({ week: 1 }).toFormat('dd/MM/yyyy'),
      DateTime.now().toFormat('dd/MM/yyyy'),
    ],

    lastFourMonths: [
      DateTime.now().minus({ month: 3 }).toFormat('dd/MM/yyyy'),
      DateTime.now().minus({ month: 2 }).toFormat('dd/MM/yyyy'),
      DateTime.now().minus({ month: 1 }).toFormat('dd/MM/yyyy'),
      DateTime.now().toFormat('dd/MM/yyyy'),
    ],

    lastFourYears: [
      DateTime.now().minus({ year: 3 }).toFormat('dd/MM/yyyy'),
      DateTime.now().minus({ year: 2 }).toFormat('dd/MM/yyyy'),
      DateTime.now().minus({ year: 1 }).toFormat('dd/MM/yyyy'),
      DateTime.now().toFormat('dd/MM/yyyy'),
    ]
  }), [])

 
  


  const agentReportColumns = useMemo(() => [
    {
      Header: 'Agent Details',
      accessor: 'agent',
      Cell: AgentCell,
      sortFn: myNameSortFunction,
    },

    {
      Header: 'Master Code',
      accessor: 'masterCode',
      Cell: MasterCell,
      
    },
    ...(dates['lastFour' + ['Days', 'Weeks', 'Months', 'Years'][agentTiming]].map(day => ({
      Header: day,
      accessor: (r) => r[`${['day', 'week', 'month', 'year'][agentTiming] + 'Data'}`][day],
      Cell: DatesCell,

    }))),
    {
      Header: 'Total',
      accessor: (r) => r[`${['day', 'week', 'month', 'year'][agentTiming] + 'Data'}`]['total']()
    }
  ], [dates, agentTiming])

  const inventoryColumns = useMemo(() => [
    {
      Header: 'Agent Details',
      accessor: 'agent',
      Cell: AgentCell
    },
    {
      Header: 'Master Details',
      accessor: 'masterDetails',
      Cell: MasterDetailsCell
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
      Header: 'Avg. Activation per day',
      accessor: 'avgDayActivation'
    },
    {
      Header: 'Avg. Activation per week',
      accessor: 'avgWeekActivation'
    },
    {
      Header: 'Pending ord. Qty',
      accessor: 'pendingQty'
    }
  ], [])

// Filter By Checkbox Agent
  const [searchText, setSearchText] = useState('');
  const [filteredAgents, setFilteredAgents] = useState(mockData.agents);
  const [selectedAgents, setSelectedAgents] = useState([]);  
  const [newReports, setNewreports] = useState(mockData.agents);
  const [selectAll, setSelectAll] = useState(false);
  

  function handleSearchChange(event) {
    const searchText = event.target.value;
    setSearchText(searchText);
    const filteredAgents = mockData.agents.filter(agent => {
      const nameMatch = agent.agent.name.toLowerCase().includes(searchText.toLowerCase());
      const phoneMatch = agent.agent.phone.toString().includes(searchText);
      return nameMatch || phoneMatch;})
    setFilteredAgents(filteredAgents);
  }
  function handleAgentSelect(agentId) {
    if (selectAll) {
      setSelectedAgents([]);
      setSelectAll(false);
    } else {
      const index = selectedAgents.indexOf(agentId);
      if (index === -1) {
        setSelectedAgents([...selectedAgents, agentId]);
        if (selectedAgents.length + 1 === filteredAgents.length) {
          setSelectAll(true);
        }
      } else {
        setSelectedAgents([...selectedAgents.slice(0, index), ...selectedAgents.slice(index + 1)]);
        if (selectedAgents.length - 1 === filteredAgents.length - 1) {
          setSelectAll(false);
        }
      }
    }
  }

  function handleSelectAll() {
    if (selectAll) {
      setSelectedAgents([]);
      setSelectAll(false);
    } else {
      setSelectedAgents(filteredAgents.map(agent => agent.id));
      setSelectAll(true);
    }
  }
 const newnewReports = selectedAgents.length === 0 ?  newReports : newReports.filter(agent => selectedAgents.includes(agent.id))

//  Agent Report colomn Filter By Check Box End

 // Shorting Function 
 // Shorting Function 
 function myNameSortFunction() {
  console.log("jai Shree Ram")
 }
 function handleSort(columnId,myNameSortFunction) {
  const column = agentReportColumns.find(c => c.id === columnId);
  if (column && column.sortFn) {
    // call the custom sort function for the clicked column
     myNameSortFunction()
    agentReportColumns.sortFn();
  }
}
 

 return (
    <>
      <Sidebar />

      <div className="main_body dashboard_fix">
        <div className="req_header">
          <Header />
        </div>
        <div className="dashboard_body_container">
          <h3>Dashboard</h3>
          <div className="flex row space-between">
            {Object.keys(FIGURES).map(key => (
              <Figure
                key={key}
                label={FIGURES[key]}
                value={mockData.figures[key]}
              />
            ))}
          </div>
          <div className="dashboard_table_container">
            <div className="dashboard_table_header flex row space-between">
              <span>
                Agent wise sale report
              </span>
              <div className="flex row">
                <Popover
                  isOpen={agentPopoverOpen}
                  onClickOutside={toggleAgentPopover}
                  positions={['bottom']}
                  content={
                    <div className="flex column" style={{ background: '#F1F5F9', padding: '20px', boxShadow: '-6px -6px 12px #FFFFFF, 6px 6px 12px rgba(212, 224, 235, 0.8)' }}>
                    <span style={{ fontSize: 12, lineHeight: '18px', marginLeft: 17 }}>
                      Search
                    </span>
                  <div>
                    <input type="text" 
                     style={{
                      border: 'none',
                      height: '40px',
                      background: '#F1F5F9',
                      boxShadow: 'inset 4px 4px 6px rgba(215, 228, 240, 0.8), inset -4px -4px 6px #FFFFFF',
                      padding: '5px 17px',
                      borderRadius: '25px',
                      marginBottom: 22,
                      width: 223,
                    }}
                    placeholder="Search Details"                    
                    value={searchText} 
                    onChange={handleSearchChange} />
                    <div className="flex column scroll-thumb-black" style={{ maxHeight: 200, overflow: 'auto' }}>    
                    <div><input type="checkbox" checked={selectAll} onChange={handleSelectAll}/>All  </div>         
                      {filteredAgents.map(agent => (
                        <div key={agent.id}>
                          <input type="checkbox"  checked={selectedAgents.includes(agent.id)} onChange={() => handleAgentSelect(agent.id)}/>
                          {agent.agent.name} ({agent.agent.phone})
                        </div>
                      ))}
                    
                  </div>
                  </div>
                  </div>}
                >
                  <div onClick={toggleAgentPopover} className="flex row" style={{ alignItems: 'center', marginRight: 20 }}>
                    <span>
                      {selectedAgent === 'All' ? 'All' : mockData.agents.find(a => a.id === selectedAgent).agent.name}
                    </span>&nbsp;
                    <ChevronDown />
                  </div>
                </Popover>
                <Popover
                  isOpen={agentTimingPopoverOpen}
                  positions={['bottom']}
                  content={<TimingSelect onClick={setAgentTiming} />}
                  onClickOutside={toggleAgentTimingPopover}
                >
                  <div onClick={toggleAgentTimingPopover} className="flex row" style={{ alignItems: 'center' }}>
                    <span>
                      {timingFilters[agentTiming]}
                    </span>&nbsp;
                    <ChevronDown />
                  </div>
                </Popover>
              </div>
            </div>
            <Table columns={agentReportColumns} data={newnewReports}  onSort={handleSort} />
          </div>
          <div className="dashboard_table_container">
            <div className="dashboard_table_header flex row space-between">
              <span>
                Agent wise sale report
              </span>
              <div>
                <Popover
                  isOpen={chartPopoverOpen}
                  positions={['bottom']}
                  content={<TimingSelect onClick={setChartTiming} />}
                  onClickOutside={toggleChartPopoverOpen}
                >
                  <div onClick={toggleChartPopoverOpen} className="flex row" style={{ alignItems: 'center' }}>
                    <span>
                      {timingFilters[chartTiming]}
                    </span>&nbsp;
                    <ChevronDown />
                  </div>
                </Popover>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={574}>
              <ComposedChart data={mockData.sales[['daily', 'weekly', 'monthly', 'yearly'][chartTiming]]}>
                <defs>
                  <linearGradient id='bar' x1='.5' x2='.5' y2='1'>
                    <stop offset='.639' stop-color='#14AE5C' />
                    <stop offset='.639' stop-color='#2247C8' />
                  </linearGradient>
                </defs>
                <YAxis dataKey="value" />
                <XAxis dataKey={['day', 'week', 'month', 'year'][chartTiming]} />
                <CartesianGrid vertical={false} />
                <Bar dataKey="value" fill="url(#bar)" />
                <Line dot={false} stroke="#FE893A" strokeWidth={4} dataKey="value" type="linear" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
          <div className="dashboard_table_container" style={{ marginBottom: 51 }}>
            <div className="dashboard_table_header flex row space-between">
              <span>
                Inventory
              </span>
              <div>
                <Popover
                  isOpen={inventoryPopoverOpen}
                  positions={['bottom']}
                  content={<TimingSelect onClick={setInventoryTiming} />}
                  onClickOutside={toggleInventoryPopover}
                >
                  <div onClick={toggleInventoryPopover} className="flex row" style={{ alignItems: 'center' }}>
                    <span>
                      {timingFilters[inventoryTiming]}
                    </span>&nbsp;
                    <ChevronDown />
                  </div>
                </Popover>
              </div>
            </div>
            <Table columns={inventoryColumns} data={mockData.inventory} />
          </div>
        </div>
      </div>
    </>
  )
}
