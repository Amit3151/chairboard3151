import React, { useState, useRef, useEffect } from "react";
import '../css/Channel.css';
import "../css/add.css"
import '../css/Order.css'
import sort from "../images/uil_sort-amount-down.svg";
import Header from "../components/Header";
import Sidebar from '../components/Sidebar';
import Filter from '../components/Filter';
import { Link } from "react-router-dom";
import cross from "../images/cross-23.svg";
import upload from "../images/ic_outline-cloud-upload.svg";
import download from "../images/download.svg";
import {AiOutlineClose} from 'react-icons/ai'

export default function Orderdetails() {


    // Creating Dummy Static Data For Channnel Partner Table
    const tableData = [
        { Id: '1', VehicleClass: 'Vc4', Quantity: '25', Bank: 'Kotak', Rate: '1', Amount: '25', UploadedInVentory: 0, },
    ]

    //Pop up upload
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

    const uploadd = useRef()
    function uploadfile() {
        console.log('click')
        uploadd.current.click()
    }

    const closePop = () => {
        new_ch_btn(!new_ch_stt)
    }

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
                                    <h3>Order Details</h3>
                                    
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
                                <div className="repo_main_box_heading OD">
                                    <table>
                                        <thead>
                                            <tr>
                                                <td>
                                                    <span className="align">
                                                        Vehicle Class <img src={sort} alt="" />
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="align">
                                                        Quantity<img src={sort} alt="" />
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="align">
                                                        Bank<img src={sort} alt="" />
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="align">
                                                        Rate<img src={sort} alt="" />
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="align">
                                                        Amount<img src={sort} alt="" />
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="align">
                                                        Uploaded InVentory<img src={sort} alt="" />
                                                    </span>
                                                </td>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {tableData.map((item, index) => (
                                                <tr key={index}>
                                                    <td>{item.VehicleClass}</td>
                                                    <td>{item.Quantity}</td>
                                                    <td>{item.Bank}</td>
                                                    <td>{item.Rate}</td>
                                                    <td>{item.Amount}</td>
                                                    <td>{item.UploadedInVentory}</td>
                                                    <td>{item.DispatchOn}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>


                            <div className="odbtns">
                                <Link to='/Order'>
                                    <button id="cancel">Cancel Order</button>
                                </Link>
                                <button id='dispatched' onClick={create_channel_partner}>Dispatched Order</button>
                            </div>

                            <div className="header_search_channel">
                                <div className={new_ch_box_class}>
                                    <div className="approve_inside">
                                        <div className="blur1 add" ref={for_outclick_ref} >
                                            <div className="apro_heading">
                                                <span>Upload File</span>
                                                < AiOutlineClose onClick={closePop} />
                                                <div className="cross_icn_wrap" onClick={create_channel_partner}><img src={cross} alt="" />
                                                </div>
                                            </div>
                                            <div className="uploadBox">
                                                
                                                <div className="browse_file od" >
                                                
                                                    <img src={upload} alt="" className="allow_size" onClick={uploadfile}/>
                                                    <input type='file' hidden ref={uploadd} />
                                                    <Link to='/CheckDetails'>
                                                    <span>Browse File</span>
                                                    
                                                    </Link>
                                                </div>
                                                
                                                <div className="sample_file od">
                                                    <img src={download} alt="" className="allow_size" />
                                                    <span>Download Sample File</span>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};