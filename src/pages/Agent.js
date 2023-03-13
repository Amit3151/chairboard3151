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
import {AiOutlineClose} from 'react-icons/ai'


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

  //
  // const data = [
  //   { id: 1, AgentDetails: 'Aditya Jangid, 854697845', MasterCode: 'ICHP8797', DistrictState: 'Bikaner, Rajasthan', AvailableInventory : '46', ActivatedTags : '125', Balance : '125', JoiningTime: '06/01/23 , 18:35:35', Block: '', SignUp: '3'},
  //   { id: 2, AgentDetails: 'Aditya Jangid, 854697845', MasterCode: 'ICHP8797', DistrictState: 'Bikaner, Rajasthan', AvailableInventory : '46', ActivatedTags : '125', Balance : '125', JoiningTime: '06/01/23 , 18:35:35', Block: '', SignUp: '3'},
  //   { id: 3, AgentDetails: 'Aditya Jangid, 854697845', MasterCode: 'ICHP8797', DistrictState: 'Bikaner, Rajasthan', AvailableInventory : '46', ActivatedTags : '125', Balance : '125', JoiningTime: '06/01/23 , 18:35:35', Block: '', SignUp: '3'},
  // ];
  // const numColumns = 3;
  // const rows = [];

  // for (let i = 0; i < data.length; i++) {
  //   const columns = [];

  //   for (let j = 1; j <= numColumns; j++) {
  //     columns.push(<td key={j}>{data[i]['column' + j]}</td>);
  //   }
  //   rows.push(<tr key={data[i].id}>{columns}</tr>);
  // }


  //sorting :- same logic as Channel page , when the data will get added from the backend!!
  return (
    <>
      <div className="sidebar">
        <Sidebar />
      </div>
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
              <Filter />
            </div>
            <div className="aget_main_cont">
              <div className="aget_main_box">
                <div className="aget_main_box_heading">
                  <table>
                    <thead>
                      <tr>
                        <td>
                          <span className="align">
                            Agent Details<img src={sort} alt="" />
                          </span>
                        </td>
                        <td>
                          <span className="align">
                            Master Code<img src={sort} alt="" />
                          </span>
                        </td>
                        <td>
                          <span className="align">
                            District & State<img src={sort} alt="" />
                          </span>
                        </td>
                        <td>
                          <span className="align">
                            Available Inventory<img src={sort} alt="" />
                          </span>
                        </td>
                        <td>
                          <span className="align">
                            Activated Tags<img src={sort} alt="" />
                          </span>
                        </td>
                        <td>
                          <span className="align">
                            Balance<img src={sort} alt="" />
                          </span>
                        </td>
                        <td>
                          <span className="align">
                            Joining Time<img src={sort} alt="" />
                          </span>
                        </td>
                        <td>
                          <span className="align">
                            Block<img src={sort} alt="" />
                          </span>
                        </td>
                        <td>
                          <span className="align">
                            Sign up Step<img src={sort} alt="" />
                          </span>
                        </td>
                      </tr>
                    </thead>
                    {/* this is only dummy data , real data will come from backend */}
                    <tbody>
                      <tr>
                        <td>
                          <div className="box_span">
                            <span className="span_a">A</span>
                            <span>
                              Aditya Jangid, <br />
                              854697845
                            </span>
                          </div>
                        </td>
                        <td>ICHP8797</td>
                        <td>
                          Bikaner,<br /> Rajasthan
                        </td>
                        <td>46</td>
                        <td>125</td>
                        <td>225</td>
                        <td>06/01/2023 <br />18:23:55</td>
                        <td>


                          <td>
                            <button className={styling_aprove1} >Unblock</button>
                            <div className={approve_box1} >
                              <div className="approve_inside">
                                <div className="blur1" ref={aprove_ref1}>
                                  <div className="apro_heading">
                                    <span>Unblock</span>
                                    <AiOutlineClose  />
                                    <div className="cross_icn_wrap">
                                      <img src={cross} alt="" onClick={notApprove1} />
                                    </div>
                                  </div>
                                  <div className="apro_input">
                                    <label htmlFor="">Enter Master Code</label>
                                    <input type="text" ref={inputRef1} placeholder="Enter Master Code" />
                                    {error1 && <span><img src={warning} alt="" /> {'Invaild Master Code'}</span>}
                                  </div>
                                  <div className="apro_button">
                                    <button onClick={() => {
                                      let pattern = /\d/g;
                                      let result1 = pattern.test(inputRef1.current.value1);
                                      if (!result1) {
                                        setError1(true);
                                      } else {
                                        setError1(false);
                                      }
                                    }}>Submit</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>


                        </td>
                        <td>
                          <div className="edit">
                            <span>3</span>
                            <Link to='/AgentDetails'>
                              <img src={edit} alt="" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="box_span">
                            <span className="span_a">A</span>
                            <span>
                              Aditya Jangid, <br />
                              854697845
                            </span>
                          </div>
                        </td>
                        <td>ICHP8797</td>
                        <td>
                          Bikaner,<br /> Rajasthan
                        </td>
                        <td>46</td>
                        <td>125</td>
                        <td>225</td>
                        <td>06/01/2023 <br />18:23:55</td>
                        <td>
                          <button className={styling_aprove} onClick={approve}>Approved</button>
                          <div className={approve_box} >
                            <div className="approve_inside">
                              <div className="blur1" ref={aprove_ref}>
                                <div className="apro_heading">
                                  <span>Approve</span>
                                  <AiOutlineClose  onClick={closePop}/>
                                  <div className="cross_icn_wrap">
                                    <img src={cross} alt="" onClick={notApprove} />
                                  </div>
                                </div>
                                <div className="apro_input">
                                  <label htmlFor="">Enter Master Code</label>
                                  <input type="text" ref={inputRef} placeholder="Enter Master Code" />
                                  {error && <span><img src={warning} alt="" /> {'Invaild Master Code'}</span>}
                                </div>
                                <div className="apro_button">
                                  <button onClick={() => {
                                    let pattern = /\d/g;
                                    let result = pattern.test(inputRef.current.value);
                                    if (!result) {
                                      setError(true);
                                    } else {
                                      setError(false);
                                    }
                                  }}>Submit</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="edit">
                            <span>3</span>
                            <Link to='/AgentDetails'>
                              <img src={edit} alt="" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="box_span">
                            <span className="span_a">A</span>
                            <span>
                              Aditya Jangid, <br />
                              854697845
                            </span>
                          </div>
                        </td>
                        <td>ICHP8797</td>
                        <td>
                          Bikaner,<br /> Rajasthan
                        </td>
                        <td>46</td>
                        <td>125</td>
                        <td>225</td>
                        <td>06/01/2023 <br />18:23:55</td>
                        <td>

                          <td>
                            <button className={styling_aprove2} >Block</button>
                            <div className={approve_box2} >
                              <div className="approve_inside">
                                <div className="blur1" ref={aprove_ref2}>
                                  <div className="apro_heading">
                                    <span>Block</span>
                                    <AiOutlineClose  />
                                    <div className="cross_icn_wrap">
                                    
                                    </div>
                                  </div>
                                  <div className="apro_input">
                                    <label htmlFor="">Enter Master Code</label>
                                    <input type="text" ref={inputRef2} placeholder="Enter Master Code" />
                                    {error2 && <span><img src={warning} alt="" /> {'Invaild Master Code'}</span>}
                                  </div>
                                  <div className="apro_button">
                                    <button onClick={() => {
                                      let pattern = /\d/g;
                                      let result2 = pattern.test(inputRef2.current.value2);
                                      if (!result2) {
                                        setError2(true);
                                      } else {
                                        setError2(false);
                                      }
                                    }}>Submit</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>


                        </td>
                        <td>
                          <div className="edit">
                            <span>3</span>
                            <Link to='/AgentDetails'>
                              <img src={edit} alt="" />
                            </Link>
                          </div>
                        </td>
                      </tr>
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