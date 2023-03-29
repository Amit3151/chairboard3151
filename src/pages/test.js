import React, { useState, useRef, useEffect } from "react";
import "../css/Agent.css";
import Filter from "../components/Filter";
import sort from "../images/uil_sort-amount-down.svg";
import warning from "../images/mdi_alert-circle-outline.svg";
import edit from "../images/Edit.svg";
import Header from "../components/Header";
import Search from "../components/Search";
import Sidebar from '../components/Sidebar';
import { Link } from "react-router-dom";
import cross from "../images/cross-23.svg";
import { AiOutlineClose } from 'react-icons/ai'
import Block from "../components/Cells/Block";
import Approved from "../components/Cells/Approved";


export default function Agent() {
  const [value, newvalue] = useState(true);
  const [error, setError] = useState(false);
  const inputRef = useRef();

  function approve() {
    newvalue((value) => !value);
  }
  function notApprove() {
    newvalue((value) => !value);
  }

  const styling_aprove = value ? "styling_aprove" : "styling_aprove active";
  let approve_box = value ? "approve_box" : "approve_box active";

  const aprove_ref = useRef()
  const outclick = e => {
    if (!aprove_ref.current.contains(e.target)) {
      newvalue(true);
    }
  }

  const [value1, newvalue1] = useState(true);
  const [error1, setError1] = useState(false);
  const inputRef1 = useRef();

  function approve1() {
    newvalue1((value1) => !value1);
  }
  function notApprove1() {
    newvalue1((value1) => !value1);
  }

  const styling_aprove1 = value1 ? "styling_aprove1" : "styling_aprove1 ";
  let approve_box1 = value1 ? "approve_box" : "approve_box active";

  const aprove_ref1 = useRef()
  const outclick1 = e => {
    if (!aprove_ref1.current.contains(e.target)) {
      newvalue1(true);
    }
  }

  function closePop1() {
    newvalue1(!value1)
  }

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
  function closePop2() {
    newvalue2(!value2)
  }
  function closePop() {
    newvalue(!value)
  }

  useEffect(() => {
    document.addEventListener("mousedown", outclick);
    return () => document.removeEventListener("mousedown", outclick);
  })

  const [buttonText, setButtonText] = useState('Unblock');
  const [className, setClassName] = useState('styling_unblock');
  
  const handleClick = () => {
    buttonText=== "Unblock" ?setButtonText('Block'):setButtonText('Unblock');
    className=== "styling_unblock" ?setClassName('styling_block') : setClassName('styling_unblock');
  };
  
  const [buttonText1, setButtonText1] = useState('Block');
  const [className1, setClassName1] = useState('styling_block');

  const handleClick1 = () => {
    buttonText1=== "Unblock" ?setButtonText1('Block'):setButtonText1('Unblock');
    className1=== "styling_unblock" ?setClassName1('styling_block') : setClassName1 ('styling_unblock');
  };

  const [tableData, setTableData] = useState([
    { id: 1, AgentDetails: '<span className="span_a">A</span> Aditya Jangid <br /> 854697845', MasterCode: 'ICHP8797', DistrictState: 'Bikaner, Rajasthan', AvailableInventory : '46', ActivatedTags : '125', Balance : '125', JoiningTime: '06/01/23 , 18:35:35',Block : <Block />, SignUp: '3'},
    { id: 2, AgentDetails: 'Aditya Jangid <br /> 854697845', MasterCode: 'ICHP8797', DistrictState: 'Bikaner, Rajasthan', AvailableInventory : '46', ActivatedTags : '125', Balance : '125', JoiningTime: '06/01/23 , 18:35:35', Block: <Approved />, SignUp: '3'},
    { id: 3, AgentDetails: 'Aditya Jangid <br /> 854697845', MasterCode: 'ICHP8797', DistrictState: 'Bikaner, Rajasthan', AvailableInventory : '46', ActivatedTags : '125', Balance : '125', JoiningTime: '06/01/23 , 18:35:35', Block: <Block />, SignUp: '3'},
  ])

  //sorting :- same logic as Channel page , when the data will get added from the backend!!

   // Filter Patch
   const handleFilterSubmit = () => {
  }

  
  return (
    <>
      <Sidebar />
      <div className="main_body">
        <div className="aget_header">
          <Header />
        </div>
        <div className="aget_body_container">
          <div className="aget_body">
            <div className="search_bar" >
              <Search title="Agent" />
            </div>
            <div className="fillter_section">
              <Filter statuses={['Blocked', 'Unblocked']} onSubmit={handleFilterSubmit} />
            </div>
            <div className="aget_main_cont">
              <div className="aget_main_box">
                <div className="aget_main_box_heading">
                  <table>
                  <thead>
                      <tr>
                        <td>
                          <span className="align">
                            Agent Details
                            <img src={sort} alt="" />
                          </span>
                        </td>
                        <td>
                          <span className="align">
                            Master Code
                            <img src={sort} alt="" />
                          </span>
                        </td>
                        <td>
                          <span className="align">
                            District & State
                            <img src={sort} alt="" />
                          </span>
                        </td>
                        <td>
                          <span className="align">
                            Available Inventory
                            <img src={sort} alt="" />
                          </span>
                        </td>
                        <td>
                          <span className="align">
                            Activated Tags
                            <img src={sort} alt="" />
                          </span>
                        </td>
                        <td>
                          <span className="align">
                            Balance
                            <img src={sort} alt="" />
                          </span>
                        </td>
                        <td>
                          <span className="align">
                            Joining Time
                            <img src={sort} alt="" />
                          </span>
                        </td>
                        <td>
                          <span className="align">
                            Block
                            <img src={sort} alt="" />
                          </span>
                        </td>
                        <td>
                          <span className="align">
                            Sign up Step
                            <img src={sort} alt="" />
                          </span>
                        </td>
                      </tr>
                    </thead>

                    {/* this is only dummy data , real data will come from backend */}
                    <tbody>
                    {tableData.map((item, index) => (
                        <tr key={index}>
                          {/* <td>{item.id}</td> */}
                          <td dangerouslySetInnerHTML={{ __html: (item.AgentDetails) }}></td>
                          <td>{item.MasterCode}</td>
                          <td dangerouslySetInnerHTML={{ __html: (item.DistrictState) }}></td>
                          <td>{item.AvailableInventory}</td>
                          <td>{item.ActivatedTags}</td>
                          <td>{item.Balance}</td>
                          <td dangerouslySetInnerHTML={{ __html: (item.JoiningTime) }}></td>
                          <td><span>{item.Block}</span></td>
                          <td>{item.SignUp} <Link to='/AgentDetails'><img src={edit} alt="" /></Link></td>
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
  );
}