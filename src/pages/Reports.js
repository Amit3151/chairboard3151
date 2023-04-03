import React, { useState } from "react";
import "../css/Reports.css";
import Header from "../components/Header";
import Search from "../components/Search";
import Sidebar from '../components/Sidebar';
import Filter from "../components/Filter";
import eye from "../images/eye.png";
import { Link } from "react-router-dom";
import { TiTickOutline } from 'react-icons/ti'
import { RxCrossCircled } from 'react-icons/rx'
import sort from "../images/uil_sort-amount-down.svg";
import Cross from "../images/Cross.svg";
import Tick from "../images/Tick.svg";


export default function Reports() {

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

  const myData = [
    { Sr: '1', AgentDetails: '<div class="box_span"> <span class="span_a">A</span><span>Vishal Jadav<br /> 9929292929 </span></div>', MasterCode: 'ASDF9876', Issue: '06/01/2023 </br> 18:23:55', VehicleNum: `<div class="vehNumYellow"><div class="center"><div>Vehicle number</div><div class="yellow_num_main"><div class="yellow_num">RJ 45 CM 1234</div></div></div><div ><img src=${Tick} class="logoSize" /></div></div>`, CustMob: '9987654321', Insurance: '06/01/2023', TagSrNo: '987654-321-123456', Commission: 'Full', Registration : 'Issued', Action : `<span class="btn_sty_tick"><button class="eye_btn"><img src=${eye} alt="" /></button></span>` },
    { Sr: '2', AgentDetails: '<div class="box_span"> <span class="span_a">A</span><span>Dishal Madav<br /> 9929292928 </span></div>', MasterCode: 'ASDF9877', Issue: '07/01/2023 </br> 18:43:55', VehicleNum: `<div class="vehNumYellow"><div class="center"><div>Chasis number</div><div class="yellow_num_main"><div class="red_num">RJ 45 CM 1244</div></div></div><div ><img src=${Cross} class="logoSize" /></div></div>`, CustMob: '9987654331', Insurance: '06/02/2023', TagSrNo: '987654-321-123457', Commission: 'Half', Registration : 'Issued', Action : `<span class="btn_sty_tick"><button class="eye_btn"><img src=${eye} alt="" /></button></span>` },
    { Sr: '3', AgentDetails: '<div class="box_span"> <span class="span_a">A</span><span>Kishal Vadav<br /> 9929292927 </span></div>', MasterCode: 'ASDF9878', Issue: '08/01/2023 </br> 18:53:55', VehicleNum: `<div class="vehNumYellow"><div class="center"><div>Vehicle number</div><div class="yellow_num_main"><div class="yellow_num">RJ 45 CM 1254</div></div></div><div ><img src=${Tick} class="logoSize" /></div></div>`, CustMob: '9987654342', Insurance: '06/03/2023', TagSrNo: '987654-321-123458', Commission: 'Pending', Registration : 'Issued', Action : `<span class="btn_sty_tick"><button class="eye_btn"><img src=${eye} alt="" /></button></span>` },
    ]
    const [tableData, setTableData] = useState(myData)
    // Search Function start
  const [searchBy, setSearchBy] = useState('MasterCode'); // default to searching by name
  const [searchQuery, setSearchQuery] = useState('');
  
  const searchOptions = [
    { label: 'Master code', value: 'MasterCode' },
    { label: 'Vehicle Number', value: 'VehicleNum' },
    { label: 'Tag serial no', value: 'TagSrNo' },
    
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
    const sortedList = [...tableData].sort((a, b) => b.Sr - a.Sr);
    setTableData(sortedList);
    setIsSortedDesc(!isSortedDesc)
  };

  const sortAsc = () => {
    const sortedList = [...tableData].sort((a, b) => a.Sr - b.Sr);
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
        <div className="req_header">
          <Header />
        </div>
        <div className="repo_body_container">
          <div className="repo_body">
            <div className="search_bar">
            <Search title="Reports" searchOptions={searchOptions} handleSearchChange={handleSearchChange}  handleSearchQueryChange ={handleSearchQueryChange} handleSearchSubmit={handleSearchSubmit}/>
             
            </div>
            <div className="filter_section">
              <Filter Filters={Filters} statuses={['Approved', 'Unapproved']} onSubmit={handleFilterSubmit}/>
            </div>
            <div className="repo_main_cont">
              <div className="repo_main_box">
                <div className="repo_main_box_heading">
                  <table>
                  <thead>
                      <tr>
                        <td>
                          <span className="align" onClick={handleClick}>
                            Sr.No
                            <img src={sort} alt="" onClick={sortit()} style={{ transform: `rotate(${rotation}deg)` }} />
                          </span>
                        </td>
                        <td>
                          <span className="align" onClick={handleClick}>
                            Agent Details
                            {/* <img src={sort} alt="" onClick={sortit()} style={{ transform: `rotate(${rotation}deg)` }} /> */}
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
                            Issue Date<img src={sort} alt="" onClick={sortit()} style={{ transform: `rotate(${rotation}deg)` }} />
                          </span>
                        </td>
                        <td>
                          <span className="align" onClick={handleClick}>
                            Vehicle Number
                            {/* <img src={sort} alt="" onClick={sortit()} style={{ transform: `rotate(${rotation}deg)` }} /> */}
                          </span>
                        </td>
                        <td>
                          <span className="align" onClick={handleClick}>
                            Cust Mob no.
                            {/* <img src={sort} alt="" onClick={sortit()} style={{ transform: `rotate(${rotation}deg)` }} /> */}
                          </span>
                        </td>
                        <td>
                          <span className="align">
                            Insurance exp date
                            {/* <img src={sort} alt="" /> */}
                          </span>
                        </td>
                        <td>
                          <span className="align" onClick={handleClick}>
                            Tag serial no
                            <img src={sort} alt="" onClick={sortit()} style={{ transform: `rotate(${rotation}deg)` }} />
                          </span>
                        </td>
                        <td>
                          <span className="align">
                            Commission status
                            {/* <img src={sort} alt="" /> */}
                          </span>
                        </td>
                        <td>
                          <span className="align">
                            Registration type
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
                          <td>{item.Sr}</td>
                          <td dangerouslySetInnerHTML={{ __html: (item.AgentDetails) }}></td>
                          <td>{item.MasterCode}</td>
                          <td dangerouslySetInnerHTML={{ __html: (item.Issue) }}></td>
                          <td dangerouslySetInnerHTML={{ __html: (item.VehicleNum)}}></td>
                          <td>{item.CustMob}</td>
                          <td>{item.Insurance}</td>
                          <td>{item.TagSrNo}</td>
                          <td><span className={item.Commission === 'Full' ? "accepted_styling" : item.Commission === 'Half'?'half_styling': 'pending_styling'}>{item.Commission}</span></td>
                          <td>{item.Registration}</td>
                          <Link to = '/ReportsViews'>
                          <td dangerouslySetInnerHTML={{ __html: (item.Action)}}></td>
                          </Link>
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