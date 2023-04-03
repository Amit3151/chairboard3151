import React, { useState, useRef, useEffect } from "react";
import '../css/Channel.css';
import "../css/add.css"
import '../css/Order.css'
import sort from "../images/uil_sort-amount-down.svg";
import eye from "../images/eye.png";
import Header from "../components/Header";
import Sidebar from '../components/Sidebar';
import Filter from '../components/Filter';
import { Link } from "react-router-dom";
import Search from "../components/Search";


export default function Profile() {
  const [new_ch_stt, new_ch_btn] = useState(true);
  const for_outclick_ref = useRef();
  const outclick = e => {
    if (!for_outclick_ref.current.contains(e.target)) {
      new_ch_btn(true);
    }
  }
  useEffect(() => {
    document.addEventListener("mousedown", outclick);
    return () => document.removeEventListener("mousedown", outclick);
  });

  function create_channel_partner() {
    new_ch_btn((new_ch_stt) => !new_ch_stt);
  }

  let new_ch_box_class = new_ch_stt ? "approve_box" : "approve_box active";

  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });
  function handleClickShowEncryption() {
    setValues(!values)
  }

  const [value, setValue] = React.useState({
    password: "",
    showPassword: false,
  });
  function handleClickShowPassword() {
    setValue(!value)
  }

  const [show, setShow] = useState(true)
  function showdata(index) {
    setShow(!show)
  }
  console.log('activated')
  // Eye Butten Table Pass Show

  const [showPassword, setShowPassword] = useState(false)
  const [selectedindex, setselectedIndex] = useState(-1)

  const handleshowPassword = (index) => {
    setShowPassword(!showPassword)
    setselectedIndex(index)
  }

  // Creating Dummy Static Data For Channnel Partner Table
  const myData = [
    { Id: 'z61dqqhyy98u6', Customer_details: '<div class="box_span"> <span class="span_a">A</span><span> ChairBoard pvt limited, <br /> 9929292929 </span></div>', MasterCode: 'ICSH0446', OrderedAt: '21/01/2023 </br> 21:53:49', Amount: '25', VehicleClass: 'Vc4', PaymentRefrence: 'Sole345VQ37b8Nx', DispatchOn: '21/01/2023 <br/> 21:50:49', Status: 'Placed', },
    { Id: 'z61dqqhyy98u7', Customer_details: '<div class="box_span"> <span class="span_a">A</span><span> ChairBoard pvt limited, <br /> 9929292928 </span></div>', MasterCode: 'ICSH0446', OrderedAt: '21/01/2023 </br> 21:54:49', Amount: '20', VehicleClass: 'Vc4', PaymentRefrence: 'Sole345VQ37b8Nx', DispatchOn: '22/02/2023 <br/> 21:50:48', Status: 'Dispatched', },
    { Id: 'z61dqqhyy98u8', Customer_details: '<div class="box_span"> <span class="span_a">A</span><span> ChairBoard pvt limited, <br /> 9929292927 </span></div>', MasterCode: 'ICSH0446', OrderedAt: '21/01/2023 </br> 21:55:49', Amount: '15', VehicleClass: 'Vc4', PaymentRefrence: 'Sole345VQ37b8Nx', DispatchOn: '23/03/2023 <br/> 21:50:47', Status: 'Cancel', },
    { Id: 'z61dqqhyy98u9', Customer_details: '<div class="box_span"> <span class="span_a">A</span><span> ChairBoard pvt limited, <br /> 9929292926 </span></div>', MasterCode: 'ICSH0446', OrderedAt: '21/01/2023 </br> 21:56:49', Amount: '10', VehicleClass: 'Vc4', PaymentRefrence: 'Sole345VQ37b8Nx', DispatchOn: '24/04/2023 <br/> 21:50:46', Status: 'Dispatched', },
  ]
  const [tableData, setTableData] = useState(myData)
  // Search Function start
const [searchBy, setSearchBy] = useState('Id'); // default to searching by name
const [searchQuery, setSearchQuery] = useState('');

const searchOptions = [
  { label: 'Order ID', value: 'Id' },
  { label: 'Master Code', value: 'MasterCode' },
  
];

function handleSearchChange(event) {
  setSearchBy(event.target.value);
}

function handleSearchQueryChange(event) {
  setSearchQuery(event.target.value);
}

function handleSearchSubmit() {
 
  const searchedData = myData.filter((item) => {
    const searchProp = searchBy.split('.');
    let searchValue = item;
    for (let i = 0; i < searchProp.length; i++) {
      searchValue = searchValue[searchProp[i]];
    }
    return searchValue.toString().toLowerCase().includes(searchQuery.toLowerCase());
  });

  // update the data state with the filtered data
  setTableData(searchedData);
}
// Search Function END

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

  //sorting
  const [isSortedDesc, setIsSortedDesc] = useState(true);

  const sortDesc = () => {
    const sortedList = [...tableData].sort((a, b) => b.Amount - a.Amount);
    setTableData(sortedList);
    setIsSortedDesc(!isSortedDesc)
  };

  const sortAsc = () => {
    const sortedList = [...tableData].sort((a, b) => a.Amount - b.Amount);
    setTableData(sortedList);
    setIsSortedDesc(!isSortedDesc)
  };

  function sortit() {
    return isSortedDesc ? sortDesc : sortAsc;
  }

  //sorting icon change
  const [rotation, setRotation] = useState(0);

  const handleClick = () => {
    setRotation(rotation + 180);
  }

  //all filter carasoul 
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  }

  return (
    <>
      <Sidebar />

      <div className="main_body">
        <div className="aget_header">
          <Header />
        </div>
        <div className='channel_body_container'>
          <div className="channel_body">
            <div className="channel_search">
              <div className="wallet_search">
                <div className="wallet_search_left">
                  <h3>Orders</h3>
                </div>
                <div className="header_search">
            <Search searchOptions={searchOptions} handleSearchChange={handleSearchChange}  handleSearchQueryChange ={handleSearchQueryChange} handleSearchSubmit={handleSearchSubmit}/>
                  
                </div>
              </div>

            </div>
            <div className="filter_section">
              <Filter Filters={Filters} statuses={['Placed', 'Dispached']} onSubmit={handleFilterSubmit} />
              <div className="OrderFilters">
                <ul className="un-list">
                  <li className={`un-li ${selectedItem === null ? 'selected' : ''}`} onClick={() => handleItemClick(null)}>All</li>
                  <li className={`un-li ${selectedItem === 1 ? 'selected' : ''}`} onClick={() => handleItemClick(1)}>Agent</li>
                  <li className={`un-li ${selectedItem === 2 ? 'selected' : ''}`} onClick={() => handleItemClick(2)}>Master</li>
                  <style>{`
                        .selected {
                        background-color: #4244a0;
                        color: white;
                        
                        }
                        `}</style>
                </ul>
              </div>
            </div>

            <div className="repo_main_cont">
              <div className="repo_main_box">
                <div className="repo_main_box_heading">
                  <table>
                    <thead>
                      <tr>
                        <td>
                          <span className="align" onClick={handleClick}>
                            Order ID
                            <img src={sort} alt="" onClick={sortit()} style={{ transform: `rotate(${rotation}deg)` }} />
                          </span>
                        </td>
                        <td>
                          <span className="align" onClick={handleClick}>
                            Customer Details<img src={sort} alt="" onClick={sortit()} style={{ transform: `rotate(${rotation}deg)` }} />
                          </span>
                        </td>
                        <td>
                          <span className="align">
                            Master code
                            {/* <img src={sort} alt="" /> */}
                          </span>
                        </td>
                        <td>
                          <span className="align" onClick={handleClick}>
                            Ordered at<img src={sort} alt="" onClick={sortit()} style={{ transform: `rotate(${rotation}deg)` }} />
                          </span>
                        </td>
                        <td>
                          <span className="align" onClick={handleClick}>
                            Amount<img src={sort} alt="" onClick={sortit()} style={{ transform: `rotate(${rotation}deg)` }} />
                          </span>
                        </td>
                        <td>
                          <span className="align" onClick={handleClick}>
                            Vehicle Class
                            <img src={sort} alt="" onClick={sortit()} style={{ transform: `rotate(${rotation}deg)` }} />
                          </span>
                        </td>
                        <td>
                          <span className="align">
                            Payment Refrence
                            {/* <img src={sort} alt="" /> */}
                          </span>
                        </td>
                        <td>
                          <span className="align" onClick={handleClick}>
                            Dispatched on<img src={sort} alt="" onClick={sortit()} style={{ transform: `rotate(${rotation}deg)` }} />
                          </span>
                        </td>
                        <td>
                          <span className="align">
                            Status
                            {/* <img src={sort} alt="" /> */}
                          </span>
                        </td>
                        <td>
                          <span className="align">
                            Action
                          </span>
                        </td>
                      </tr>
                    </thead>

                    <tbody>
                      {tableData.map((item, index) => (
                        <tr key={index}>
                          <td>{item.Id}</td>
                          <td dangerouslySetInnerHTML={{ __html: (item.Customer_details) }}></td>
                          <td>{item.MasterCode}</td>
                          <td dangerouslySetInnerHTML={{ __html: (item.OrderedAt) }}></td>
                          <td>{item.Amount}</td>
                          <td>{item.VehicleClass}</td>
                          <td>{item.PaymentRefrence}</td>
                          <td dangerouslySetInnerHTML={{ __html: (item.DispatchOn) }}></td>
                          <td className={item.Status === 'Placed' ? "item_status1 span" : item.Status === 'Dispatched'?'item_status2 span': 'item_status3 span'}><span>{item.Status}</span></td>
                          <td >
                            <span className="btn_sty_tick" >
                              <Link to='/Orderdetails'>
                                <button className="eye_btn_channel">
                                  <img src={eye} alt="" />
                                </button>
                              </Link>
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};