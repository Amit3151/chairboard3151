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
import {AiOutlineClose} from 'react-icons/ai'


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
  function closePop5(){
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
        console.log('click')
        uploadd.current.click()
    }

  return (
    <>
      <div className="sidebar">
        <Sidebar />
      </div>
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
              <Search title="Inventory" />
            </div>
            <div className="filter_section">
              <Filter />
            </div>
            <div className="invent_main_cont">
              <div className="aget_main_cont">
                <div className="aget_main_box">
                  <div className="aget_main_box_heading">
                    <table>
                      <thead>
                        <tr>
                          <td>
                            <span className="align">
                              Serial No <img src={sort} alt="" />
                            </span>
                          </td>
                          <td>
                            <span className="align">
                              VC <img src={sort} alt="" />
                            </span>
                          </td>
                          <td>
                            <span className="align">
                              Received Date <img src={sort} alt="" />
                            </span>
                          </td>
                          <td>
                            <span className="align">
                              Dispatched Date <img src={sort} alt="" />
                            </span>
                          </td>
                          <td>
                            <span className="align">
                              Acknowledge <img src={sort} alt="" />
                            </span>
                          </td>
                          <td>
                            <span className="align">
                              {" "}
                              Agent Details <img src={sort} alt="" />
                            </span>
                          </td>
                          <td>
                            <span className="align">
                              {" "}
                              Mater Details <img src={sort} alt="" />
                            </span>
                          </td>
                          <td>
                            <span className="align">
                              Status <img src={sort} alt="" />
                            </span>
                          </td>
                          <td>
                            <span>Return</span>
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>607469004072651</td>
                          <td>VC6</td>
                          <td>
                            21/01/2023, <br />
                            21:50:49
                          </td>
                          <td>
                            21/01/2023, <br />
                            21:50:49
                          </td>
                          <td>Yes</td>
                          <td>
                            <div className="box_span">
                              <span className="span_a">A</span>
                              <span>
                                Aditya Jangid, <br />
                                854697845
                              </span>
                            </div>
                          </td>
                          <td>
                            <div className="box_span">
                              <span className="span_b">M</span>
                              <span>
                                854697845 , <br />
                                ICSH0446
                              </span>
                            </div>
                          </td>
                          <td>Admin</td>
                          <td>

                            <td>
                              <button className={styling_aprove2} onClick={approve2}>Return</button>
                              <div className={approve_box2} >
                                <div className="approve_inside">
                                  <div className="blur1" ref={aprove_ref2}>
                                    <div className="apro_heading">
                                      <span>Block</span>
                                      <AiOutlineClose onClick={closePop5}/>
                                      <div className="cross_icn_wrap">
                                        <img src={cross} alt="" onClick={notApprove2} />
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
                        </tr>

                        <tr>
                          <td>607469004072651</td>
                          <td>VC6</td>
                          <td>
                            21/01/2023, <br />
                            21:50:49
                          </td>
                          <td>
                            21/01/2023, <br />
                            21:50:49
                          </td>
                          <td>Yes</td>
                          <td>
                            <div className="box_span">
                              <span className="span_a">A</span>
                              <span>
                                Aditya Jangid, <br />
                                854697845
                              </span>
                            </div>
                          </td>
                          <td>
                            <div className="box_span">
                              <span className="span_b">M</span>
                              <span>
                                854697845 , <br />
                                ICSH0446
                              </span>
                            </div>
                          </td>
                          <td>Inventory at Agent</td>
                          <td>Not Applicable</td>
                        </tr>

                        <tr>
                          <td>607469004072651</td>
                          <td>VC6</td>
                          <td>
                            21/01/2023, <br />
                            21:50:49
                          </td>
                          <td>
                            21/01/2023, <br />
                            21:50:49
                          </td>
                          <td>Yes</td>
                          <td>
                            <div className="box_span">
                              <span className="span_a">A</span>
                              <span>
                                Aditya Jangid, <br />
                                854697845
                              </span>
                            </div>
                          </td>
                          <td>
                            <div className="box_span">
                              <span className="span_b">M</span>
                              <span>
                                854697845 , <br />
                                ICSH0446
                              </span>
                            </div>
                          </td>
                          <td>Inventory at Agent</td>
                          <td>Not Applicable</td>
                        </tr>

                        <tr>
                          <td>607469004072651</td>
                          <td>VC6</td>
                          <td>
                            21/01/2023, <br />
                            21:50:49
                          </td>
                          <td>
                            21/01/2023, <br />
                            21:50:49
                          </td>
                          <td>Yes</td>
                          <td>
                            <div className="box_span">
                              <span className="span_a">A</span>
                              <span>
                                Aditya Jangid, <br />
                                854697845
                              </span>
                            </div>
                          </td>
                          <td>
                            <div className="box_span">
                              <span className="span_b">M</span>
                              <span>
                                854697845 , <br />
                                ICSH0446
                              </span>
                            </div>
                          </td>
                          <td>Inventory at Agent</td>
                          <td>Not Applicable</td>
                        </tr>

                        <tr>
                          <td>607469004072651</td>
                          <td>VC6</td>
                          <td>
                            21/01/2023, <br />
                            21:50:49
                          </td>
                          <td>
                            21/01/2023, <br />
                            21:50:49
                          </td>
                          <td>Yes</td>
                          <td>
                            <div className="box_span">
                              <span className="span_a">A</span>
                              <span>
                                Aditya Jangid, <br />
                                854697845
                              </span>
                            </div>
                          </td>
                          <td>
                            <div className="box_span">
                              <span className="span_b">M</span>
                              <span>
                                854697845 , <br />
                                ICSH0446
                              </span>
                            </div>
                          </td>
                          <td>Inventory at Agent</td>
                          <td>Not Applicable</td>
                        </tr>

                        <tr>
                          <td>607469004072651</td>
                          <td>VC6</td>
                          <td>
                            21/01/2023, <br />
                            21:50:49
                          </td>
                          <td>
                            21/01/2023, <br />
                            21:50:49
                          </td>
                          <td>Yes</td>
                          <td>
                            <div className="box_span">
                              <span className="span_a">A</span>
                              <span>
                                Aditya Jangid, <br />
                                854697845
                              </span>
                            </div>
                          </td>
                          <td>
                            <div className="box_span">
                              <span className="span_b">M</span>
                              <span>
                                854697845 , <br />
                                ICSH0446
                              </span>
                            </div>
                          </td>
                          <td>Inventory at Agent</td>
                          <td>Not Applicable</td>
                        </tr>

                        <tr>
                          <td>607469004072651</td>
                          <td>VC6</td>
                          <td>
                            21/01/2023, <br />
                            21:50:49
                          </td>
                          <td>
                            21/01/2023, <br />
                            21:50:49
                          </td>
                          <td>Yes</td>
                          <td>
                            <div className="box_span">
                              <span className="span_a">A</span>
                              <span>
                                Aditya Jangid, <br />
                                854697845
                              </span>
                            </div>
                          </td>
                          <td>
                            <div className="box_span">
                              <span className="span_b">M</span>
                              <span>
                                854697845 , <br />
                                ICSH0446
                              </span>
                            </div>
                          </td>
                          <td>Inventory at Agent</td>
                          <td>Not Applicable</td>
                        </tr>

                        <tr>
                          <td>607469004072651</td>
                          <td>VC6</td>
                          <td>
                            21/01/2023, <br />
                            21:50:49
                          </td>
                          <td>
                            21/01/2023, <br />
                            21:50:49
                          </td>
                          <td>Yes</td>
                          <td>
                            <div className="box_span">
                              <span className="span_a">A</span>
                              <span>
                                Aditya Jangid, <br />
                                854697845
                              </span>
                            </div>
                          </td>
                          <td>
                            <div className="box_span">
                              <span className="span_b">M</span>
                              <span>
                                854697845 , <br />
                                ICSH0446
                              </span>
                            </div>
                          </td>
                          <td>Inventory at Agent</td>
                          <td>Not Applicable</td>
                        </tr>
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
