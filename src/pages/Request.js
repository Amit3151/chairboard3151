import React, { useState } from "react";
import "../css/Request.css";
import Header from "../components/Header";
import Search from "../components/Search";
import Sidebar from '../components/Sidebar';
import Filter from "../components/Filter";
import cross from "../images/close.png";
import tick from "../images/tick.png";
import sort from "../images/uil_sort-amount-down.svg";
import AcceptRejected from "../components/Cells/AcceptRejected";

function Request() {

  const myData = [
    { Request: 'AER15SD60D', OrderID: 'ASXDC321', AgentDetails: '<div class="box_span"> <span class="span_a">A</span><span> SADJCSTN, <br /> 854697845 </span></div>', Tag: '607469-00B-258445', MasterCode: 'SADE3202', Requested: '05/01/2023 <br /> 10:23:15', Dispatched: '05/01/2023 <br /> 10:23:55', Payment: '-', Action: 'Rejected', SNO : "1" },
    { Request: 'AER15SD61D', OrderID: 'ASXDC331', AgentDetails: '<div class="box_span"> <span class="span_a">A</span><span> SADJCSTM, <br /> 854697846 </span></div>', Tag: '607469-00B-258446', MasterCode: 'SADE3204', Requested: '06/02/2023 <br /> 10:33:25', Dispatched: '06/02/2023 <br /> 11:23:55', Payment: 'RDSFC2565 <br /> 456', Action: 'Accepted', SNO : "2"},
    { Request: 'AER15SD62D', OrderID: 'ASXDC341', AgentDetails: '<div class="box_span"> <span class="span_a">A</span><span> SADJCSTO, <br /> 854697847 </span></div>', Tag: '607469-00B-258447', MasterCode: 'SADE3206', Requested: '07/03/2023 <br /> 10:43:35', Dispatched: '07/03/2023 <br /> 12:23:55', Payment: '-', Action: <AcceptRejected />, SNO : "3"},
  ]

  const [tableData, setTableData] = useState(myData)
  // Search Function start
  const [searchBy, setSearchBy] = useState('Request'); // default to searching by name
  const [searchQuery, setSearchQuery] = useState('');
  
  const searchOptions = [
    { label: 'Request ID', value: 'Request' },
    { label: 'Order ID', value: 'OrderID' },
    { label: 'MasterCode', value: 'MasterCode' },
    
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
  const sortedList = [...tableData].sort((a, b) => b.SNO - a.SNO);
  setTableData(sortedList);
  setIsSortedDesc(!isSortedDesc)
};

const sortAsc = () => {
  const sortedList = [...tableData].sort((a, b) => a.SNO - b.SNO);
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

// Filter Patch
 const handleFilterSubmit = () => {
}



  return (
    <>
      {/* ==================Dummy data with accepted and rejected functionality working in last option=============== */}


      <Sidebar />

      <div className="main_body">
        <div className="req_header">
          <Header />
        </div>
        <div className="req_body_container">
          <div className="req_body">
            <div className="search_bar">
            <Search title="Request" searchOptions={searchOptions} handleSearchChange={handleSearchChange}  handleSearchQueryChange ={handleSearchQueryChange} handleSearchSubmit={handleSearchSubmit}/>

            </div>
            <div className="fillter_section">
              <Filter Filters={Filters} statuses={['Accepted', 'Rejected']} onSubmit={handleFilterSubmit} />
            </div>
            <div className="req_main_cont">
              <div className="req_main_box">
                <div className="req_main_box_heading">
                  <table>
                    <thead>
                      <tr>
                        <th>
                          <span className="align">
                            Request ID 
                            {/* <img src={sort} alt="" /> */}
                          </span>
                        </th>
                        <th>
                          <span className="align">
                            Order ID
                            {/* <img src={sort} alt="" /> */}
                          </span>
                        </th>
                        <th>
                          <span className="align">
                            Agent Details
                            {/* <img src={sort} alt="" /> */}
                          </span>
                        </th>
                        <th>
                          <span className="align">
                            Tag serial ID 
                            {/* <img src={sort} alt="" /> */}
                          </span>
                        </th>
                        <th>
                          <span className="align">
                            Master code 
                            {/* <img src={sort} alt="" /> */}
                          </span>
                        </th>
                        <th>
                          <span className="align" onClick={handleClick}>
                            Requested on<img src={sort} alt="" onClick={sortit()} style={{ transform: `rotate(${rotation}deg)` }}/>
                          </span>
                        </th>
                        <th>
                          <span className="align" onClick={handleClick}>
                            Dispatched on<img src={sort} alt="" onClick={sortit()} style={{ transform: `rotate(${rotation}deg)` }}/>
                          </span>
                        </th>
                        <th>
                          <span className="align">
                            Payment
                            {/* <img src={sort} alt="" /> */}
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
                    {tableData.map((item, index) => (
                        <tr key={index}>
                          <td>{item.Request}</td>
                          <td>{item.OrderID}</td>
                          <td dangerouslySetInnerHTML={{ __html: (item.AgentDetails) }}></td>
                          <td className={item.Action === 'Accepted' ? 'color_green': item.Action === 'Rejected'?'color_red':''}>{item.Tag}</td>
                          <td>{item.MasterCode}</td>
                          <td dangerouslySetInnerHTML={{ __html: (item.Requested) }}></td>
                          <td dangerouslySetInnerHTML={{ __html: (item.Dispatched) }}></td>
                          <td dangerouslySetInnerHTML={{ __html: (item.Payment) }}></td>
                          <td><span className={item.Action === 'Accepted' ? 'accepted_styling': item.Action === 'Rejected' ? 'Rejected_styling' : ''}>{item.Action}</span></td>
                          
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

export default Request;