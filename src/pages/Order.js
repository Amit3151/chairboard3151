import React, { useState, useRef, useEffect } from "react";
import '../css/Channel.css';
import "../css/add.css"
import '../css/Order.css'
import sort from "../images/uil_sort-amount-down.svg";
import eye from "../images/eye.png";
import Header from "../components/Header";
import Sidebar from '../components/Sidebar';
import Filter from '../components/Filter';
import { Link } from "react-router-dom";


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

  // Eye Butten Table Pass Show

  const [showPassword, setShowPassword] = useState(false)
  const [selectedindex, setselectedIndex] = useState(-1)

  const handleshowPassword = (index) => {
    setShowPassword(!showPassword)
    setselectedIndex(index)
  }

  // Creating Dummy Static Data For Channnel Partner Table

  const tableData = [
    { Id: 'z61dqqhyy98u7', Customer_details: 'ChairBoard pvt limited', MasterCode: 'ICSH0446', OrderedAt: '21/01/2023 , 21:50', Amount: '25', VehicleClass: 'Vc4', PaymentRefrence: 'Sole345VQ37b8Nx', DispatchOn: '21/01/2023 , 21:50:49', Status: 'Placed',},
    { Id: 'z61dqqhyy98u7', Customer_details: 'ChairBoard pvt limited', MasterCode: 'ICSH0446', OrderedAt: '21/01/2023 , 21:50', Amount: '25', VehicleClass: 'Vc4', PaymentRefrence: 'Sole345VQ37b8Nx', DispatchOn: '21/01/2023 , 21:50:49', Status: 'Dispatched',},
    { Id: 'z61dqqhyy98u7', Customer_details: 'ChairBoard pvt limited', MasterCode: 'ICSH0446', OrderedAt: '21/01/2023 , 21:50', Amount: '25', VehicleClass: 'Vc4', PaymentRefrence: 'Sole345VQ37b8Nx', DispatchOn: '21/01/2023 , 21:50:49', Status: 'Cancel',},
    { Id: 'z61dqqhyy98u7', Customer_details: 'ChairBoard pvt limited', MasterCode: 'ICSH0446', OrderedAt: '21/01/2023 , 21:50', Amount: '25', VehicleClass: 'Vc4', PaymentRefrence: 'Sole345VQ37b8Nx', DispatchOn: '21/01/2023 , 21:50:49', Status: 'Placed',},
    { Id: 'z61dqqhyy98u7', Customer_details: 'ChairBoard pvt limited', MasterCode: 'ICSH0446', OrderedAt: '21/01/2023 , 21:50', Amount: '25', VehicleClass: 'Vc4', PaymentRefrence: 'Sole345VQ37b8Nx', DispatchOn: '21/01/2023 , 21:50:49', Status: 'Dispatched',},
  ];


  return (
    <>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main_body">
        <div className="aget_header">
          <Header />
        </div>
        <div className='channel_body_container'>
          <div className="channel_body">
            <div className="channel_search">
              <div className="wallet_search">
                <div className="wallet_search_left">
                  <h3>Orders</h3>
                </div>
                <div className="header_search">
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

            </div>
            <div className="filter_section">
              <Filter />
            </div>
            <div className="repo_main_cont">
              <div className="repo_main_box">
                <div className="repo_main_box_heading">
                  <table>
                    <thead>
                      <tr>
                        <td>
                          <span className="align">
                            Order ID<img src={sort} alt="" />
                          </span>
                        </td>
                        <td>
                          <span className="align">
                            Customer Details<img src={sort} alt="" />
                          </span>
                        </td>
                        <td>
                          <span className="align">
                            Master code<img src={sort} alt="" />
                          </span>
                        </td>
                        <td>
                          <span className="align">
                            Ordered at<img src={sort} alt="" />
                          </span>
                        </td>
                        <td>
                          <span className="align">
                            Amount<img src={sort} alt="" />
                          </span>
                        </td>
                        <td>
                          <span className="align">
                            Vehicle Class<img src={sort} alt="" />
                          </span>
                        </td>
                        <td>
                          <span className="align">
                            Payment Refrence<img src={sort} alt="" />
                          </span>
                        </td>
                        <td>
                          <span className="align">
                            Dispatched on<img src={sort} alt="" />
                          </span>
                        </td>
                        <td>
                          <span className="align">
                            Status<img src={sort} alt="" />
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
                          <td>{item.Id}</td>
                          <td>{item.Customer_details}</td>
                          {/* <td>{showPassword && selectedindex === index ? `${item.password}` : '**********'}</td>
                          <td>{showPassword && selectedindex === index ? `${item.Key}` : 'G1LI*************1020'}</td> */}
                          <td>{item.MasterCode}</td>
                          <td>{item.OrderedAt}</td>
                          <td>{item.Amount}</td>
                          <td>{item.VehicleClass}</td>
                          <td>{item.PaymentRefrence}</td>
                          <td>{item.DispatchOn}</td>
                          <td className={item.Status == 'Placed' ? "item_status1 span" : 'item_status2 span'}><span>{item.Status}</span></td>
                          <td >
                            <span className="btn_sty_tick" >
                              <Link to='/Orderdetails'>
                              <button className="eye_btn_channel">
                                <img src={eye} alt="" />
                              </button>
                              </Link>
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