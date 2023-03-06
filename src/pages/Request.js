import React, { useState} from "react";
import "../css/Request.css";
import Header from "../components/Header";
import Search from "../components/Search";
import Sidebar from '../components/Sidebar';
import Filter from "../components/Filter";
import cross from "../images/close.png";
import tick from "../images/tick.png";
import sort from "../images/uil_sort-amount-down.svg";

function Request() {

  const [action, setAction] = useState({
    accepted: null,
    rejected: null
  })


  return (
    <>
    {/* ==================Dummy data with accepted and rejected functionality working in last option=============== */}

      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main_body">
        <div className="req_header">
          <Header />
        </div>
        <div className="req_body_container">
          <div className="req_body">
          <div className="search_bar">
            <Search title="Request"/>
           </div>
            <div className="fillter_section">
                <Filter/>
            </div>
            <div className="req_main_cont">
              <div className="req_main_box">
                <div className="req_main_box_heading">
                  <table>
                    <thead>
                      <tr>
                        <th>
                          <span className="align">
                            Request ID <img src={sort} alt="" />
                          </span>
                        </th>
                        <th>
                          <span className="align">
                            Order ID<img src={sort} alt="" />
                          </span>
                        </th>
                        <th>
                          <span className="align">
                            Agent Details<img src={sort} alt="" />
                          </span>
                        </th>
                        <th>
                          <span className="align">
                            Tag serial ID <img src={sort} alt="" />
                          </span>
                        </th>
                        <th>
                          <span className="align">
                            Master code <img src={sort} alt="" />
                          </span>
                        </th>
                        <th>
                          <span className="align">
                            Requested on<img src={sort} alt="" />
                          </span>
                        </th>
                        <th>
                          <span className="align">
                            Dispatched on<img src={sort} alt="" />
                          </span>
                        </th>
                        <th>
                          <span className="align">
                            Payment reference ID<img src={sort} alt="" />
                          </span>
                        </th>
                        <th>
                          <span className="align">
                            Action
                          </span>
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      

                      <tr>
                        <td>AER15SD60D</td>
                        <td>ASXDC321</td>
                        <td>
                          <div className="box_span">
                            <span className="span_a">A</span>
                            <span>
                              SADJCSTN, <br />
                              854697845
                            </span>
                          </div>
                        </td>
                        <td>
                          <span className="color_green">607469-00B-258445</span>
                        </td>
                        <td>SADE3202</td>
                        <td>05/01/202310:23:55</td>
                        <td>06/01/202318:23:55</td>
                        <td>-</td>
                        <td>
                          <span className="accepted_styling">Accepted</span>
                        </td>
                      </tr>
                      <tr>
                        <td>AER15SD60D</td>
                        <td>ASXDC321</td>
                        <td>
                          <div className="box_span">
                            <span className="span_a">A</span>
                            <span>
                              SADJCSTN, <br />
                              854697845
                            </span>
                          </div>
                        </td>
                        <td>
                          <span className="color_red">607469-00B-258445</span>
                        </td>
                        <td>SADE3202</td>
                        <td>05/01/202310:23:55</td>
                        <td>06/01/202318:23:55</td>
                        <td>-</td>
                        <td>
                          <span className="Rejected_styling">Rejected</span>
                        </td>
                      </tr>

                      
                      <tr>
                        <td>AER15SD60D</td>
                        <td>ASXDC321</td>
                        <td>
                          <div className="box_span">
                            <span className="span_a">A</span>
                            <span>
                              SADJCSTN, <br />
                              854697845
                            </span>
                          </div>
                        </td>
                        <td>607469-00B-258445</td>
                        <td>SADE3202</td>
                        <td>05/01/202310:23:55</td>
                        <td>06/01/202318:23:55</td>
                        <td>-</td>
                        <td>
                          {action.accepted === null && action.rejected === null ?
                            <span className="btn_sty_tick">
                              <button className="green_btn" onClick={() => {
                                setAction((prev) => ({ ...prev, accepted: true }))
                              }}>
                                <img src={tick} alt="" />
                              </button>
                              <button className="red_btn" onClick={() => {
                                setAction((prev) => ({ ...prev, rejected: true }))
                              }}>
                                <img src={cross} alt="" />
                              </button>
                            </span>
                            : action?.accepted ?
                              <span className="accepted_styling">Accepted</span>
                              :
                              <span className="Rejected_styling">Rejected</span>
                          }
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

export default Request;
