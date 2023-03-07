import React, { useState, useRef, useEffect } from "react";
import '../css/Channel.css';
import "../css/add.css"
import '../css/Order.css'
import '../css/ManualReqDetails.css'
import sort from "../images/uil_sort-amount-down.svg";
import Header from "../components/Header";
import Sidebar from '../components/Sidebar';
import Filter from '../components/Filter';
import { Link } from "react-router-dom";
import cross from "../images/cross-23.svg";
import upload from "../images/ic_outline-cloud-upload.svg";
import download from "../images/download.svg";
import id_bluespace from '../images/id_bluespace.png'

export default function ManualReqDetails() {


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

    const Accept = () => {
        alert("Accepted Successfully")
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
                                    <h3>Request Type : Issue</h3>
                                </div>
                                <div className="odbtns mrd">
                                    <Link to='/ManualRequest'>
                                        <button id="mrdbtnone">Cancel Order</button>
                                    </Link>
                                    <button id='mrdbtntwo' onClick={Accept}>Accept</button>
                                </div>

                            </div>

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




                            <div className='idHeading'>
                                <h1 className='id_head'>Preview of Document</h1>
                                <div className='idPhotos'>
                                    <div><img className='idPhoto' src={id_bluespace} /> <br /> <h2>RC Front</h2></div>
                                    <div><img className='idPhoto' src={id_bluespace} /> <br /> <h2>RC Back</h2></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};