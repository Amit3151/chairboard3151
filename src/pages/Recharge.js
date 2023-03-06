import React from 'react'
import Header from "../components/Header";
import Sidebar from '../components/Sidebar';
import Filter from '../components/Filter';
import "../css/Recharge.css";

export default function Recharge() {
  return (
    <>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main_body">
        <div className="aget_header">
          <Header />
        </div>
        <div className="recharge_body_contanier">
          <div className="recharge_body">
            <div className="wallet_search">
              <div className="wallet_search_left">
                <h3>Recharge</h3>
              </div>
              <div className="header_search">
                <span>
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
            <div className="filter_section">
              <Filter/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
