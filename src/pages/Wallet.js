import React, { useEffect, useRef, useState } from 'react';
import '../css/Wallet.css';
import Filter from '../components/Filter';
import wallet from "../images/black_wallet.svg"
import sort from "../images/uil_sort-amount-down.svg";
import Header from "../components/Header";
import Sidebar from '../components/Sidebar';
import cross from "../images/cross-23.svg";

export default function Wallet() {

//add money
const [value, newvalue] = useState(true);
const [error, setError] = useState(false);
const inputRef = useRef();
function approve() {
  newvalue((value) => !value);
}
function handleClose() {
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
useEffect(() => {
  document.addEventListener("mousedown", outclick);
  return () => document.removeEventListener("mousedown", outclick);
})

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
        <div className="wallet_body_contanier">
          <div className="wallet_body">
            <div className="wallet_search">
              <div className="wallet_search_left">
                <h3>Your Wallet</h3>
              </div>
              <div className="header_search">
                <div className="balance">
                  <span>
                    <label className='wallet_label'>Wallet Balance</label>
                    <span className='balance_span'>
                      <img src={wallet} alt="" />INR:6881
                    </span>
                  </span>
                  {/* <button>Add Money</button> */}
                  <td>
                          <button className={styling_aprove} onClick={approve}>Add Money</button>
                          
                          <div className={approve_box} >
                            <div className="approve_inside">
                              <div className="blur1" ref={aprove_ref}>
                                <div className="apro_heading">
                                  <span>Add Money</span>
                                  <div className="cross_icn_wrap">
                                  <img src={cross} alt="" onClick={handleClose} />
                                    </div>
                                </div>
                                <div className="apro_input">
                                  <label htmlFor="">Enter Amount</label>
                                  <input type="text" ref={inputRef} placeholder="Enter Amount" />
                                  {error && <span> {'Invaild'}</span>}
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
                </div>
                <span className='label_style'>
                  <label htmlFor="">Search</label>
                  <input
                    className="input_search"
                    type="text"
                    placeholder="Enter"
                    name="search"
                  />
                </span>
                <button>Submit</button>
              </div>
            </div>
            <div className="filter">
              <div className="_inside fix_popup">
                <Filter />
                <div className="credit_box">
                    <span>
                      <label className='wallet_label'>Total Credit</label>
                      <span className='balance_span span_green'>$ 44.00 </span>
                    </span>
                    <span>
                      <label className='wallet_label'>Total Debit</label>
                      <span className='balance_span span_red'>$ 44.00 </span>
                    </span>
                </div>
              </div>
            </div>
            <div className="repo_main_cont">
              <div className="repo_main_box">
                <div className="repo_main_box_heading">
                  <table>
                    <thead>
                      <tr>
                        <td>
                          <span className="align">
                            Sr No<img src={sort} alt="" />
                          </span>
                        </td>
                        <td>
                          <span className="align">
                            Transcation ID<img src={sort} alt="" />
                          </span>
                        </td>
                        <td>
                          <span className="align">
                            User Details<img src={sort} alt="" />
                          </span>
                        </td>
                        <td>
                          <span className="align">
                            Master Code<img src={sort} alt="" />
                          </span> 
                        </td>
                        <td>
                          <span className="align">
                            Time<img src={sort} alt="" />
                          </span> 
                        </td>
                        <td>
                          <span className="align">
                            Transcation Details<img src={sort} alt="" />
                          </span> 
                        </td>
                        <td>
                          <span className="align">
                            Amount<img src={sort} alt="" />
                          </span> 
                        </td>
                      </tr>
                    </thead>
                     {/* data will be shown here from the database , these are just for example */}
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>DFGDH23021301</td>
                        <td>
                            <div className="box_span">
                            <span>
                              Aditya Jangid, <br />
                              854697845
                            </span>
                          </div>
                        </td>
                        <td>ASDF9876</td>
                        <td>06/01/2023 <br/> 18:23:55</td>
                        <td><span className="cost_color">Cost Return</span> <br/>98765-264-231421</td>
                        <td>1</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>DFGDH23021301</td>
                        <td>
                            <div className="box_span">
                            <span>
                              Aditya Jangid, <br />
                              854697845
                            </span>
                          </div>
                        </td>
                        <td>ASDF9876</td>
                        <td>06/01/2023 <br/>18:23:55</td>
                        <td><span className="cost_color">Cost Return</span> <br/>98765-264-231421</td>
                        <td>1</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>DFGDH23021301</td>
                        <td>
                            <div className="box_span">
                            <span>
                              Aditya Jangid, <br />
                              854697845
                            </span>
                          </div>
                        </td>
                        <td>ASDF9876</td>
                        <td>06/01/2023 <br/>18:23:55</td>
                        <td><span className="cost_color">Cost Return</span> <br/>98765-264-231421</td>
                        <td>1</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>DFGDH23021301</td>
                        <td>
                            <div className="box_span">
                            <span>
                              Aditya Jangid, <br />
                              854697845
                            </span>
                          </div>
                        </td>
                        <td>ASDF9876</td>
                        <td>06/01/2023 <br/>18:23:55</td>
                        <td><span className='coms_color'>Commission Paid</span><br/>98765-264-231421</td>
                        <td>1</td>
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
  )
}
