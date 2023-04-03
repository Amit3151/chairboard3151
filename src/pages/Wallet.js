import React, { useEffect, useRef, useState , Fra} from 'react';
import '../css/Wallet.css';
import Filter from '../components/Filter';
import wallet from "../images/black_wallet.svg"
import sort from "../images/uil_sort-amount-down.svg";
import Header from "../components/Header";
import Sidebar from '../components/Sidebar';
import cross from "../images/cross-23.svg";
import {AiOutlineClose} from 'react-icons/ai';
import Search from '../components/Search';

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

  // these are just for example
  const myData=[
    { Sr: 1, Transactionid: "DFGDH23021301", UserDetail: 'Aditya Jangid  </br> 854697845', MasterCode: "ASDF9876", Time: "06/01/23 <br/> 18:23:55 PM", Transaction: " <span class='cost_return'>Cost Return</span></br>98765-264-231421 ", Amount: "1" },
    { Sr: 2, Transactionid: "DFGDH23021301", UserDetail: "Aditya Jangid </br> 854697846", MasterCode: "ASDF9877", Time: "07/02/23 <br/> 18:23:56 PM", Transaction: "<span class='com_paid'>Commition Paid</span></br>98765-264-231422", Amount: "3" },
    { Sr: 3, Transactionid: "DFGDH23021301", UserDetail: "Aditya Jangid </br> 854697847", MasterCode: "ASDF9878", Time: "08/03/23 <br/> 18:23:57 PM", Transaction: "<span class='cost_return'>Cost Return</span></br>98765-264-231423", Amount: "5" },
  ]

  const [list, setList]= useState(myData)

   // Search Function start
   const [searchBy, setSearchBy] = useState('Transactionid'); // default to searching by name
   const [searchQuery, setSearchQuery] = useState('');
   
   const searchOptions = [
     { label: 'Transaction ID', value: 'Transactionid' },
     { label: 'Name', value: 'UserDetail' },
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
     setList(searchedData);
   }
   // Search Function END

  const [sortAsc, setSortAsc] = useState(true);
  const handleSort = () => {
    const sortedList = [...list].sort((a, b) => {
      if (sortAsc) {
        return a.Sr - b.Sr;
      } else {
        return b.Sr - a.Sr;
      }
    });
    setList(sortedList);
    setSortAsc(!sortAsc);
  };
  
  const [rotation, setRotation] = useState(0);

  const handleClick = () => {
    setRotation(rotation + 180);
  }

  function closePop() {
    newvalue((value) => !value);
  }

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

  return (
    <>  
        <Sidebar />
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
                    <button className='add_money' onClick={approve}>Add Money</button>
                    <div className={approve_box} >
                      <div className="approve_inside">
                        <div className="blur1" ref={aprove_ref}>
                          <div className="apro_heading">
                            <span>Add Money</span>  
                            <AiOutlineClose onClick={closePop}/>
                            <div className="cross_icn_wrap">
                              <img src={cross} alt="" onClick={handleClose} />
                            </div>
                          </div>
                          <div className="apro_input">
                            <label htmlFor="">Enter Amount</label>
                            <input type="text" ref={inputRef} placeholder="Enter Amount" />   
                            {error && <span> {'Invaild Amount'}</span>}
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
            <Search searchOptions={searchOptions} handleSearchChange={handleSearchChange}  handleSearchQueryChange ={handleSearchQueryChange} handleSearchSubmit={handleSearchSubmit}/>
              
              </div>
            </div>
            <div className="filter">
              <div className="_inside fix_popup">
                <Filter  Filters={Filters} statuses={['Approved', 'Declined']} onSubmit={handleFilterSubmit}/>
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
                          <span className="align" onClick={handleClick}>
                            Sr No<img src={sort} alt="" onClick={handleSort} style={{ transform: `rotate(${rotation}deg)` }} />
                          </span>
                        </td>
                        <td>
                          <span className="align">
                            Transaction ID
                            {/* <img src={sort} alt="" onClick={handleSort}/> */}
                          </span>
                        </td>
                        <td>
                          <span className="align">
                            User Detail
                            {/* <img src={sort} alt="" onClick={handleSort}/> */}
                          </span>
                        </td>
                        <td>
                          <span className="align">
                            Master Code
                            {/* <img src={sort} alt="" onClick={handleSort}/> */}
                          </span>
                        </td>
                        <td>
                          <span className="align" onClick={handleClick}>
                            Time<img src={sort} alt="" onClick={handleSort} style={{ transform: `rotate(${rotation}deg)` }} />
                          </span>
                        </td>
                        <td>
                          <span className="align">
                            Transaction Details
                            {/* <img src={sort} alt="" onClick={handleSort}/> */}
                          </span>
                        </td>
                        <td>
                          <span className="align" onClick={handleClick}>
                            Amount
                            <img src={sort} alt="" onClick={handleSort} style={{ transform: `rotate(${rotation}deg)` }}/> 
                          </span>
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      {list.map((item, index) => (
                        <tr key={index}>
                          <td>{item.Sr}</td>
                          <td >{item.Transactionid}</td>
                          {/* <td>{showPassword && selectedindex === index ? `${item.password}` : '**********'}</td>
                          <td>{showPassword && selectedindex === index ? `${item.Key}` : 'G1LI*************1020'}</td> */}
                          <td dangerouslySetInnerHTML={{__html: (item.UserDetail)}}></td>
                          <td>{item.MasterCode}</td>
                          <td dangerouslySetInnerHTML={{__html: (item.Time)}}></td>
                          <td dangerouslySetInnerHTML={{__html: (item.Transaction)}}></td>
                          <td>{item.Amount}</td>
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
  )
}