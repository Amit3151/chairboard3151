import React, { useState, useRef, useEffect } from "react";
import '../css/Channel.css';
import "../css/add.css"
import sort from "../images/uil_sort-amount-down.svg";
import eye from "../images/eye.png";
import eye_close from "../images/eye_close.svg"
import Header from "../components/Header";
import Sidebar from '../components/Sidebar';
import Filter from '../components/Filter';
import cross from "../images/cross-23.svg";
import eyepass from "../images/eye-21.svg";     
import eyeclose from "../images/eye-close-3.svg";
import {AiOutlineClose} from 'react-icons/ai' 

export default function Profile() {
  const [new_ch_stt, new_ch_btn] = useState(true);
  const for_outclick_ref = useRef();
  const outclick = e => {
    if (!for_outclick_ref.current.contains(e.target)) {
      new_ch_btn(true);
    }
  }
  useEffect(() => {
    document.addEventListener("mousedown", outclick);
    return () => document.removeEventListener("mousedown", outclick);
  });

  function create_channel_partner() {
    new_ch_btn((new_ch_stt) => !new_ch_stt);
  }

  let new_ch_box_class = new_ch_stt ? "approve_box" : "approve_box active";

  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });
  function handleClickShowEncryption() {
    setValues(!values)
  }

  const [value, setValue] = React.useState({
    password: "",
    showPassword: false,
  });
  function handleClickShowPassword() {
    setValue(!value)
  }

  const [show, setShow] = useState(true)
  function showdata(index) {
    setShow(!show)
  }

  // Eye Button Table Pass Show

  const [showPassword, setShowPassword] = useState(false)
  const [selectedindex, setselectedIndex] = useState(-1)

  const handleshowPassword = (index) => {
    setShowPassword(!showPassword)
    setselectedIndex(index)
  }

  // Creating Dummy  Data For Channnel Partner Table
  const [text, setText] = useState("")
  const [result, setResult] = useState([])
  const [cpId, setCpId] = useState('');
  const [password, setPassword] = useState('');
  const [encryptionKey, setEncryptionKey] = useState('');
  const [agentId, setAgentId] = useState('');
  const [tableData, setTableData] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = { id: tableData.length + 1, cpId, password, encryptionKey, agentId };
    setTableData([...tableData, newData]);
    setCpId('');
    setPassword('');
    setEncryptionKey('');
    setAgentId('');
  };
  
  const [isSortedDesc, setIsSortedDesc] = useState(true);

  const sortDesc = () => {
    const sortedList = [...tableData].sort((a, b) => b.id - a.id);
    setTableData(sortedList);
  setIsSortedDesc(!isSortedDesc) 
  };

  const sortAsc = () => {
    const sortedList = [...tableData].sort((a, b) => a.id - b.id);
    setTableData(sortedList);
  setIsSortedDesc(!isSortedDesc) 
  }; 
  
 function sortit(){  
  return isSortedDesc ? sortDesc : sortAsc;
 }

 function closePop() {
  new_ch_btn((new_ch_stt) => !new_ch_stt);
}

//sorting icon change
const [rotation, setRotation] = useState(0);

  const handleClick = () => {
    setRotation(rotation + 180);}
  

    // Filter Patch
    const handleFilterSubmit = () => {
    }

  return (
    <>
        <Sidebar />
      
      <div className="main_body">
        <div className="aget_header">
          <Header />
        </div>
        <div className='channel_body_container'>
          <div className="channel_body">
            <div className="channel_search">
              <div className="channel_search_left">
                <h3>Channel Partner</h3>
              </div>
              <div className="header_search_channel">
                <button onClick={create_channel_partner}>Create Channel Partner</button>
                <div className={new_ch_box_class}>
                  <div className="approve_inside">
                    <div className="blur1 add" ref={for_outclick_ref} >
                      <div className="apro_heading">
                        <span>Channel Partner Creation</span>
                        <AiOutlineClose onClick={closePop}/>
                        <div className="cross_icn_wrap" onClick={create_channel_partner}><img src={cross} alt="" />
                        </div>
                      </div>
                      <form onSubmit={handleSubmit}>
                        <div className="input_add_wrap">
                          <div className="apro_input add">
                            <label htmlFor="">CP ID</label>
                            <input type="text" value={cpId} onChange={(e) => setCpId(e.target.value)} placeholder="CP ID" />
                          </div>
                          <div className="apro_input add">
                            <label htmlFor="password">PASSWORD</label>
                            <div className="input_btn_wrap">
                              <input type={value ? 'password' : 'text'} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                              <div className="eypas" onClick={handleClickShowPassword}> <img src={value ? eyepass : eyeclose} /></div>
                            </div>
                          </div>
    
                          <div className="apro_input add">
                            <label htmlFor="password">ENCRYPTION KEY</label>
                            <div className="input_btn_wrap">
                              
                              <input type={values ? 'password' : 'text'} value={encryptionKey} onChange={(e) => setEncryptionKey(e.target.value)} placeholder="Encryption Key" />
                              <div className="eypas" onClick={handleClickShowEncryption}> <img src={values ? eyepass : eyeclose} /></div>
                            </div>
                          </div>
                          <div className="apro_input add">
                            <label htmlFor="">AGENT ID</label>
                            <input type="text" value={agentId} onChange={(e) => setAgentId(e.target.value)} placeholder="Agent ID" />
                          </div>
                          <div className="apro_button">
                            <button type="submit">Add Data</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="filter_section">
              <Filter statuses={['Blocked', 'Unblocked']} onSubmit={handleFilterSubmit}/>
            </div>
            <div className="repo_main_cont">
              <div className="repo_main_box">
                <div className="repo_main_box_heading">
                  <table>
                    <thead>
                      <tr className="align_head">
                        <th className="align"> <div className='align_ch_head'> <div>Sr.no</div>  <div onClick={handleClick}><img src={sort} alt="" onClick={sortit()} style={{ transform: `rotate(${rotation}deg)` }}/></div> </div> </th>
                        <th className="align"> <div className='align_ch_head'> <div>CP ID </div><div onClick={handleClick}><img src={sort} /></div> </div> </th>
                        <th className="align"> <div className='align_ch_head'> <div>Password</div> <div onClick={handleClick}><img src={sort} alt="" /></div> </div> </th>
                        <th className="align"> <div className='align_ch_head'> <div>Encryption key</div> <div onClick={handleClick}><img src={sort} alt="" /></div> </div> </th>
                        <th className="align"> <div className='align_ch_head'> <div>Agent ID</div> <div onClick={handleClick}><img src={sort} alt=""  /></div> </div> </th>
                        <th className="align"> <div className='align_ch_head'> <div>Action</div> <div onClick={handleClick}><img src={sort} alt=""  /></div> </div> </th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableData.map((data, index) => (
                        <tr key={index}>
                          <td>{data.id}</td>
                          <td>{data.cpId}</td>
                          <td>{showPassword && selectedindex === index ? `${data.password}` : '**********'}</td>
                          <td>{showPassword && selectedindex === index ? `${data.encryptionKey}` : '*************'}</td>
                          <td>{data.agentId}</td>
                          <td >
                            <span className="btn_sty_tick" >
                              <button onClick={() => handleshowPassword(index)} className="eye_btn_channel">
                                <img src={showPassword && selectedindex === index ? eye_close : eye} alt="" />
                              </button>
                            </span>
                          </td>
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
};