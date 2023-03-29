import React, { useReducer, useMemo } from 'react'
import { Popover } from 'react-tiny-popover'
import { DateTime } from 'luxon'
import "../css/Dashboard.css";
import Header from "../components/Header";
import Sidebar from '../components/Sidebar';
import Figure from '../components/Figure'
import AgentCell from '../components/Cells/AgentCell'
import MasterCell from '../components/Cells/MasterCell'
import MasterDetailsCell from '../components/Cells/MasterDetailsCell'
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
      name: `Vishal Jadhav`,
      phone: '9876543210',
    },
    dayData: {
      [DateTime.now().toFormat('dd/MM/yyyy')]: getRandomInt(0, 10),
      [DateTime.now().minus({ day: 1 }).toFormat('dd/MM/yyyy')]: getRandomInt(0, 20 ),
      [DateTime.now().minus({ day: 2 }).toFormat('dd/MM/yyyy')]: getRandomInt(0, 30),
      [DateTime.now().minus({ day: 3 }).toFormat('dd/MM/yyyy')]: getRandomInt(0, 40),
    },
    weekData: {
      [DateTime.now().toFormat('dd/MM/yyyy')]: getRandomInt(0, 10),
      [DateTime.now().minus({ week: 1 }).toFormat('dd/MM/yyyy')]: getRandomInt(0, 200),
      [DateTime.now().minus({ week: 2 }).toFormat('dd/MM/yyyy')]: getRandomInt(0, 300),
      [DateTime.now().minus({ week: 3 }).toFormat('dd/MM/yyyy')]: getRandomInt(0, 400),
    },
    monthData: {
      [DateTime.now().toFormat('dd/MM/yyyy')]: getRandomInt(0, 10),
      [DateTime.now().minus({ month: 1 }).toFormat('dd/MM/yyyy')]: getRandomInt(0, 800),
      [DateTime.now().minus({ month: 2 }).toFormat('dd/MM/yyyy')]: getRandomInt(0, 1200),
      [DateTime.now().minus({ month: 3 }).toFormat('dd/MM/yyyy')]: getRandomInt(0, 1600),
    },
    yearData: {
      [DateTime.now().toFormat('dd/MM/yyyy')]: getRandomInt(0, 10),
      [DateTime.now().minus({ year: 1 }).toFormat('dd/MM/yyyy')]: getRandomInt(0, 2000),
      [DateTime.now().minus({ year: 2 }).toFormat('dd/MM/yyyy')]: getRandomInt(0, 3000),
      [DateTime.now().minus({ year: 3 }).toFormat('dd/MM/yyyy')]: getRandomInt(0, 4000),
    },
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
      phone: '9876543210',
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
  }
}

const timingFilters = ['Day wise', 'Week wise', 'Monthly wise', 'Year wise'];

const AgentSelect = ({ onSelect, selected }) => (
  <div className="flex column" style={{ background: 'white', padding: '20px', boxShadow: '-6px -6px 12px #FFFFFF, 6px 6px 12px rgba(212, 224, 235, 0.8)'  }}>
    <span style={{ fontSize: 12, lineHeight: '18px', marginLeft: 17 }}>
      Search
    </span>
    <input
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
    />
    <div className="flex column scroll-thumb-black" style={{ maxHeight: 200, overflow: 'auto' }}>
      <div style={{ cursor: 'pointer' }} onClick={() => onSelect('All')} className="flex row">
        <input type="checkbox" checked={selected === 'All'} />
        <label>All</label>
      </div>
        {mockData.agents.slice(0, 60).map(a => (
          <div style={{ cursor: 'pointer' }} onClick={() => onSelect(a.id)} className="flex row">
            <input checked={selected === a.id || selected === 'All'} type="checkbox" />
            <label>{a.agent.name}</label>
          </div>
        ))}
    </div>
  </div>
)

const TimingSelect = ({ onClick }) => (
  <div className="flex column" style={{ background: 'white', padding: '10px 15px', boxShadow: '-6px -6px 12px #FFFFFF, 6px 6px 12px rgba(212, 224, 235, 0.8)'  }}>
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
      DateTime.now().toFormat('dd/MM/yyyy'),
      DateTime.now().minus({ day: 1 }).toFormat('dd/MM/yyyy'),
      DateTime.now().minus({ day: 2 }).toFormat('dd/MM/yyyy'),
      DateTime.now().minus({ day: 3 }).toFormat('dd/MM/yyyy'),
    ],

    lastFourWeeks: [
      DateTime.now().toFormat('dd/MM/yyyy'),
      DateTime.now().minus({ week: 1 }).toFormat('dd/MM/yyyy'),
      DateTime.now().minus({ week: 2 }).toFormat('dd/MM/yyyy'),
      DateTime.now().minus({ week: 3 }).toFormat('dd/MM/yyyy'),
    ],

    lastFourMonths: [
      DateTime.now().toFormat('dd/MM/yyyy'),
      DateTime.now().minus({ month: 1 }).toFormat('dd/MM/yyyy'),
      DateTime.now().minus({ month: 2 }).toFormat('dd/MM/yyyy'),
      DateTime.now().minus({ month: 3 }).toFormat('dd/MM/yyyy'),
    ],

    lastFourYears: [
      DateTime.now().toFormat('dd/MM/yyyy'),
      DateTime.now().minus({ year: 1 }).toFormat('dd/MM/yyyy'),
      DateTime.now().minus({ year: 2 }).toFormat('dd/MM/yyyy'),
      DateTime.now().minus({ year: 3 }).toFormat('dd/MM/yyyy'),
    ]
  }), [])


  const agentReportColumns = useMemo(() => [
    {
      Header: 'Agent Details',
      accessor: 'agent',
      Cell: AgentCell
    },
    {
      Header: 'Master Code',
      accessor: 'masterCode',
      Cell: MasterCell
    },
    ...(dates['lastFour' + ['Days', 'Weeks', 'Months', 'Years'][agentTiming]].map(day => ({
      Header: day,
      accessor: (r) => r[`${['day', 'week', 'month', 'year'][agentTiming]+ 'Data'}`][day]
    }))),
    {
      Header: 'Total',
      accessor: 'total'
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

  return (
    <>  
      
        <Sidebar/>
      
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
                  content={<AgentSelect selected={selectedAgent} onSelect={setAgent} />}
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
            <Table columns={agentReportColumns} data={mockData.agents} />
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
                  content={<TimingSelect onClick={setChartTiming}/>}
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
                    <stop offset='.639' stop-color='#14AE5C'/>
                    <stop offset='.639' stop-color='#2247C8'/>
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
                  <div onClick={toggleInventoryPopover }className="flex row" style={{ alignItems: 'center' }}>
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
