import React from "react";
import "../css/Reports.css";
import Header from "../components/Header";
import Search from "../components/Search";
import Sidebar from '../components/Sidebar';
import Filter from "../components/Filter";
import eye from "../images/eye.png";
import { Link } from "react-router-dom";
import { TiTickOutline } from 'react-icons/ti'
import { RxCrossCircled } from 'react-icons/rx'
import Cross from "../images/Cross.svg";
import Tick from "../images/Tick.svg";

export default function Reports() {
   // Filter Patch

   const handleFilterSubmit = () => {
  }
  return (
    <>

      <Sidebar />

      <div className="main_body">
        <div className="req_header">
          <Header />
        </div>
        <div className="repo_body_container">
          <div className="repo_body">
            <div className="search_bar">
              <Search title="Reports" />
            </div>
            <div className="filter_section">
              <Filter statuses={['Approved', 'Unapproved']} onSubmit={handleFilterSubmit}/>
            </div>
            <div className="repo_main_cont">
              <div className="repo_main_box">
                <div className="repo_main_box_heading">
                  <table>
                    <thead>
                      <tr>
                        <td>Sr.no</td>
                        <td>Agent Details</td>
                        <td>Master code</td>
                        <td>Issue date</td>
                        <td>Vehicle Number</td>
                        <td>Cust mob no.</td>
                        <td>insurance exp date</td>
                        <td>Tag serial no</td>
                        <td>Commission status</td>
                        <td>Registration type</td>
                        <td>Action</td>
                      </tr>
                    </thead>

                    <tbody>

                      <tr>
                        <td>1</td>
                        <td className="agent_name"><span className="span_a">A</span>Vishal Jadhav<br />9854721210</td>
                        <td>ASDF9876</td>
                        <td>06/01/2023<br />18:23:55</td>
                        <td className="vehNumYellow">
                          <div className="center">
                          <div>Vehicle number</div>
                          <div className="yellow_num_main">
                            <div className="yellow_num">RJ 45 CM 1234</div>
                            </div>
                          </div>
                          <div >
                              <img src={Tick} className="logoSize" />
                            </div>
                        </td>
                        <td>9987654321</td>
                        <td>06/01/2023</td>
                        <td>987654-321-123456</td>
                        <td>
                          <span className="accepted_styling">Full</span>
                        </td>
                        <td>Issued</td>
                        <td>
                          <span className="btn_sty_tick">
                            <Link to='/ReportsViews'>
                              <button className="eye_btn">
                                <img src={eye} alt="" />
                              </button>
                            </Link>
                          </span>
                        </td>
                      </tr>

                      <tr>
                        <td>2</td>
                        <td className="agent_name"><span className="span_a">A</span>Vishal Jadhav <br />9854721210</td>
                        <td>ASDF9876</td>
                        <td>06/01/2023<br />18:23:55</td>
                        
                        <td className="vehNumYellow">
                          <div className="center">
                          <div>Chasis number</div>
                          <div className="yellow_num_main">
                            <div className="red_num">RJ 45 CM 1234</div>
                            </div>
                          </div>
                          <div >
                              <img src={Cross} className="logoSize" />
                            </div>
                        </td>
                        <td>9987654321</td>
                        <td>06/01/2023</td>
                        <td>987654-321-123456</td>
                        <td>
                          <span className="half_styling">Half</span>
                        </td>
                        <td>Issued</td>
                        <td>
                          {" "}
                          <span className="btn_sty_tick">
                            <Link to='/ReportsViews'>
                              <button className="eye_btn">
                                <img src={eye} alt="" />
                              </button>
                            </Link>
                          </span>
                        </td>
                      </tr>

                      <tr>
                        <td>3</td>
                        <td className="agent_name"><span className="span_a">A</span>Vishal Jadhav <br />9854721210</td>
                        <td>ASDF9876</td>
                        <td>06/01/2023<br />18:23:55</td>
                        <td className="vehNumYellow">
                          <div className="center">
                          <div>Vehicle number</div>
                          <div className="yellow_num_main">
                            <div className="yellow_num">RJ 45 CM 1234</div>
                            </div>
                          </div>
                          <div >
                              <img src={Tick} className="logoSize" />
                            </div>
                        </td>
                        <td>9987654321</td>
                        <td>06/01/2023</td>
                        <td>987654-321-123456</td>
                        <td>
                          <span className="pending_styling">Pending</span>
                        </td>
                        <td>Issued</td>
                        <td>
                          {" "}
                          <span className="btn_sty_tick">
                            <Link to='/ReportsViews'>
                              <button className="eye_btn">
                                <img src={eye} alt="" />
                              </button>
                            </Link>
                          </span>
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
