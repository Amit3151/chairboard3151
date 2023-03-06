import React from "react";
import "../css/Reports.css";
import Header from "../components/Header";
import Search from "../components/Search";
import Sidebar from '../components/Sidebar';
import Filter from "../components/Filter";
import eye from "../images/eye.png";
import { Link } from "react-router-dom";

export default function Reports() {
  return (
    <>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main_body">
        <div className="req_header">
          <Header />
        </div>
        <div className="repo_body_container">
          <div className="repo_body">
          <div className="search_bar">
            <Search title="Reports"/>
           </div>
            <div className="filter_section">
              <Filter/>
            </div>
            <div className="repo_main_cont">
              <div className="repo_main_box">
                <div className="repo_main_box_heading">
                  <table>
                    <thead>
                      <tr>
                        <td>Sr.no</td>
                        <td>Agent name</td>
                        <td>Agent Mobile no.</td>
                        <td>Master code</td>
                        <td>Issue date</td>
                        <td>Tag serial no.</td>
                        <td>Commission status</td>
                        <td>Registration type</td>
                        <td>Action</td>
                      </tr>
                    </thead>
                    
                    <tbody>
                      
                      <tr>
                        <td>1</td>
                        <td>Vishal Jadhav</td>
                        <td>9854721210</td>
                        <td>ASDF9876</td>
                        <td>06/01/202318:23:55</td>
                        <td>98765-264-231421</td>
                        <td>
                          <span className="accepted_styling">Full</span>
                        </td>
                        <td>Issued</td>
                        <td>
                          <span className="btn_sty_tick">
                          <Link to= '/ReportsViews'>
                            <button className="eye_btn">
                              <img src={eye} alt="" />
                            </button>
                            </Link>
                          </span>
                        </td>
                      </tr>

                      <tr>
                        <td>2</td>
                        <td>Vishal Jadhav</td>
                        <td>9854721210</td>
                        <td>ASDF9876</td>
                        <td>06/01/202318:23:55</td>
                        <td>98765-264-231421</td>
                        <td>
                          <span className="half_styling">Half</span>
                        </td>
                        <td>Issued</td>
                        <td>
                          {" "}
                          <span className="btn_sty_tick">
                          <Link to= '/ReportsViews'>
                            <button className="eye_btn">
                              <img src={eye} alt="" />
                            </button>
                            </Link>
                          </span>
                        </td>
                      </tr>

                      <tr>
                        <td>3</td>
                        <td>Vishal Jadhav</td>
                        <td>9854721210</td>
                        <td>ASDF9876</td>
                        <td>06/01/202318:23:55</td>
                        <td>98765-264-231421</td>
                        <td>
                          <span className="pending_styling">Pending</span>
                        </td>
                        <td>Issued</td>
                        <td>
                          {" "}
                          <span className="btn_sty_tick">
                          <Link to= '/ReportsViews'>
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
