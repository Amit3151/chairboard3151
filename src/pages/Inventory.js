import React, { useState, useRef, useEffect } from "react";
import "../css/Inventory.css";
import "../css/Agent.css";
import Header from "../components/Header";
import Filter from "../components/Filter";
import download from "../images/download.svg";
import sort from "../images/uil_sort-amount-down.svg";
import upload from "../images/ic_outline-cloud-upload.svg";
import Sidebar from '../components/Sidebar';
import Search from "../components/Search";
import cross from "../images/cross-23.svg";
import warning from "../images/mdi_alert-circle-outline.svg";
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from "react-router-dom";
import Return from "../components/Cells/Return";
import Approved from "../components/Cells/Approved";
import Block from "../components/Cells/Block";


export default function Inventory() {

  // =====================Pop_box=============================

  const [hide, sethide] = useState(true);
  function show_pop() {
    sethide(!hide)
  }
  const upload_img = hide ? "upload_img" : "upload_img active";
  let pop_box = hide ? "pop_box" : "pop_box active";
  let upload_pop_up_box = hide ? "upload_pop_up_box" : "upload_pop_up_box active";

  const pop = useRef()
  const outerclick = e => {
    if (!pop.current.contains(e.target)) {
      sethide(true);
    }
  }
  useEffect(() => {
    if (!hide) {
      document.addEventListener("mousedown", outerclick);
    }
    return () => document.removeEventListener("mousedown", outerclick);
  }, [hide])

  const closePop = () => {
    sethide(!hide)
  }
  // ===================Popup_box================================
  const [value2, newvalue2] = useState(true);
  const [error2, setError2] = useState(false);
  const inputRef2 = useRef();

  function approve2() {
    newvalue2((value2) => !value2);
  }
  function notApprove2() {
    newvalue2((value2) => !value2);
  }
  function closePop5() {
    newvalue2(!value2)
  }

  const styling_aprove2 = value2 ? "styling_aprove2 block" : "styling_aprove2 block";
  let approve_box2 = value2 ? "approve_box" : "approve_box active";

  const aprove_ref2 = useRef()
  const outclick2 = e => {
    if (!aprove_ref2.current.contains(e.target)) {
      newvalue2(true);
    }
  }

  const uploadd = useRef()
  function uploadfile() {

    uploadd.current.click()
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
// Filter Functions

  function handeldemo() {

  }
  
  //Filter Patch
  const handleFilterSubmit = () => {
  }

 const myData = [
    { Serial: '607469004072651', VC: 'VC6', MasterCode: 'ICSH0446', Recieved: '21/01/2023 </br> 21:53:49', Dispatched: '21/01/2023 </br> 21:53:49', VehicleClass: 'Vc4', PaymentRefrence: 'Sole345VQ37b8Nx', Acknowledge: 'Yes', Agent: {name:"Aditya Jangid",spanname:"A", mob:"854697845"} , Master : '<div class="box_span"> <span class="span_b">M</span><span> Aditya Jangid, <br /> 854697845 </span></div>' , Status : 'Admin' , Return : <Return /> },
    { Serial: '607469004072652', VC: 'VC6', MasterCode: 'ICSH0446', Recieved: '21/01/2023 </br> 21:53:49', Dispatched: '21/01/2023 </br> 21:53:49', VehicleClass: 'Vc4', PaymentRefrence: 'Sole345VQ37b8Nx', Acknowledge: 'Yes', Agent: {name:"Aditya Jangid",spanname:"A", mob:"854697845"} , Master : '<div class="box_span"> <span class="span_b">M</span><span> Aditya Jangid, <br /> 854697845 </span></div>' , Status : 'Inventory At Agent' , Return : 'Not Applicable' },
    { Serial: '607469004072653', VC: 'VC6', MasterCode: 'ICSH0446', Recieved: '21/01/2023 </br> 21:53:49', Dispatched: '21/01/2023 </br> 21:53:49', VehicleClass: 'Vc4', PaymentRefrence: 'Sole345VQ37b8Nx', Acknowledge: 'Yes', Agent: {name:"Aditya Jangid",spanname:"A", mob:"854697845"} , Master : '<div class="box_span"> <span class="span_b">M</span><span> Aditya Jangid, <br /> 854697845 </span></div>' , Status : 'Inventory At Agent' , Return : 'Not Applicable' },  
  ]

  const [tableData, setTableData] = useState(myData)
  // Search Function start
const [searchBy, setSearchBy] = useState('MasterCode'); // default to searching by name
const [searchQuery, setSearchQuery] = useState('');

const searchOptions = [
  { label: 'MasterCode', value: 'MasterCode' },
  { label: 'Serial', value: 'Serial' },
  
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

  //sorting
  const [isSortedDesc, setIsSortedDesc] = useState(true);

  const sortDesc = () => {
    const sortedList = [...tableData].sort((a, b) => b.Serial - a.Serial);
    setTableData(sortedList);
    setIsSortedDesc(!isSortedDesc)
  };

  const sortAsc = () => {
    const sortedList = [...tableData].sort((a, b) => a.Serial - b.Serial);
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

  return (
    <>

      <Sidebar />

      <div className="main_body">
        <div className="aget_header">
          <Header />
        </div>
        <div className="invent_body_container">
          <div className="invent_body">
            <div className={upload_img} >
              <img src={upload} alt="" onClick={show_pop} />
            </div>
            <div className={upload_pop_up_box} >
              <div className={pop_box} ref={pop}>
                <div className="cross_icn_wrap" onClick={closePop} ><img src={cross} alt="" />
                </div>
                <div className="browse_file" onClick={uploadfile}>
                  <input type='file' hidden ref={uploadd} />
                  <img src={upload} alt="" className="allow_size" />
                  <span>Browse File</span>
                  <span>Choose Images</span>
                </div>
                <div className="sample_file">
                  <img src={download} alt="" className="allow_size" />
                  <span>Download Sample File</span>
                </div>
              </div>
            </div>

            <div className="search_bar">
            <Search title="Inventory" searchOptions={searchOptions} handleSearchChange={handleSearchChange}  handleSearchQueryChange ={handleSearchQueryChange} handleSearchSubmit={handleSearchSubmit}/>
              
            </div>
            <div className="filter_section">
            <Filter statuses={['Blocked', 'Unblocked']} Filters={Filters} onSubmit={handleFilterSubmit} />
            </div>
            <div className="invent_main_cont">
              <div className="aget_main_cont">
                <div className="aget_main_box">
                  <div className="aget_main_box_heading">
                    <table>
                      <thead>
                        <tr>
                          <td>
                            <span className="align" onClick={handleClick}>
                              Serial No <img src={sort} alt="" onClick={sortit()} style={{ transform: `rotate(${rotation}deg)` }}/>
                            </span>
                          </td>
                          <td>
                            <span className="align" onClick={handleClick}>
                              VC <img src={sort} alt="" onClick={sortit()} style={{ transform: `rotate(${rotation}deg)` }}/>
                            </span>
                          </td>
                          <td>
                            <span className="align" onClick={handleClick}>
                              Received Date <img src={sort} alt="" onClick={sortit()} style={{ transform: `rotate(${rotation}deg)` }}/>
                            </span>
                          </td>
                          <td>
                            <span className="align" onClick={handleClick}>
                              Dispatched Date <img src={sort} alt="" onClick={sortit()} style={{ transform: `rotate(${rotation}deg)` }}/>
                            </span>
                          </td>
                          <td>
                            <span className="align">
                              Acknowledge 
                            </span>
                          </td>
                          <td>
                            <span className="align">
                              {" "}
                              Agent Details 
                            </span>
                          </td>
                          <td>
                            <span className="align">
                              {" "}
                              Mater Details 
                            </span>
                          </td>
                          <td>
                            <span className="align" onClick={handleClick}>
                              Status <img src={sort} alt="" onClick={sortit()} style={{ transform: `rotate(${rotation}deg)` }}/>
                            </span>
                          </td>
                          <td>
                            <span>Return</span>
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                      {tableData.map((item, index) => (
                        <tr key={index}>
                          <td>{item.Serial}</td>
                          <td>{item.VC}</td>
                          <td dangerouslySetInnerHTML={{ __html: (item.Recieved) }}></td>
                          <td dangerouslySetInnerHTML={{ __html: (item.Dispatched) }}></td>
                          <td>{item.Acknowledge}</td>
                          <td>
                          <div className="box_span"> 
                          <span className="span_a">{item.Agent.spanname}</span>
                          <span> {item.Agent.name}, <br /> {item.Agent.mob} </span>
                          </div>
                          </td>
                          <td dangerouslySetInnerHTML={{ __html: (item.Master) }}></td>
                          <td dangerouslySetInnerHTML={{ __html: (item.Status) }}></td>
                          <td>{item.Return}</td>
                          
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
      </div>
    </>
  );
}
