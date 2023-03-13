import React, { useState, useRef, useEffect } from "react";
import '../css/Channel.css';
import "../css/add.css"
import '../css/Order.css'
import '../css/ManualReqDetails.css'
import sort from "../images/uil_sort-amount-down.svg";
import Header from "../components/Header";
import Sidebar from '../components/Sidebar';
import Slider from "react-slick";
import Filter from '../components/Filter';
import { Link } from "react-router-dom";
import cross from "../images/cross-23.svg";
import upload from "../images/ic_outline-cloud-upload.svg";
import download from "../images/download.svg";
import id_bluespace from '../images/id_bluespace.png';




export default function ManualReqDetails() {


    // Creating Dummy Static Data For Channnel Partner Table
    const tableData = [
        { TagId: 'daiwd799sdadfa6adasd8', InputId: 'Vehicle number', VRN: 'RJ45 CM 2222', VC: '4', Mobile: '9987654321', },
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



    const [slider_click, setSlider_click] = useState(false);
    function open_popub_slider() {
        setSlider_click(true)
    }
    function close_slider_popup() {
        setSlider_click(false)
    }
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();
    const popup_box_slider = slider_click ? "popup_box_slider_main opened" : "popup_box_slider_main";

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

                                    <input className="enterAmount" placeholder="Enter Amount" />
                                    <Link to='/ManualRequest'>
                                        <button id="mrdbtnone">Decline Request</button>
                                    </Link>
                                    <button id='mrdbtntwo' onClick={Accept}>Accept Request</button>
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
                                                        Tag ID <img src={sort} alt="" />
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="align">
                                                        Input Type<img src={sort} alt="" />
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="align">
                                                        VRN<img src={sort} alt="" />
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="align">
                                                        VC<img src={sort} alt="" />
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="align">
                                                        Mobile<img src={sort} alt="" />
                                                    </span>
                                                </td>

                                            </tr>
                                        </thead>

                                        <tbody>
                                            {tableData.map((item, index) => (
                                                <tr key={index}>
                                                    <td>{item.TagId}</td>
                                                    <td>{item.InputId}</td>
                                                    <td>{item.VRN}</td>
                                                    <td>{item.VC}</td>
                                                    <td>{item.Mobile}</td>

                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>




                            <div className='idHeading'>
                                <h1 className='id_head'>Preview of Document</h1>
                                <div className='idimages'>
                                    <div><img className='idPhoto' src={id_bluespace} onClick={open_popub_slider} /><h2 className='idimagesheading'>RC Front</h2></div>
                                    <div><img className='idPhoto' src={id_bluespace} onClick={open_popub_slider} /><h2 className='idimagesheading'>RC Back</h2></div>
                                </div>



                                <div className={popup_box_slider}>
                                    <div className='popup_box_slider'>
                                        <div className='cross_icon_slider' onClick={close_slider_popup}>
                                            <img src={cross} alt="" />
                                        </div>
                                        <div className='download_icon_slider'>
                                            <a href={download} target="_blank" download>
                                                <img src={download} alt="" />
                                            </a>

                                        </div>

                                        <div className='main_display_popup_slider'>
                                            <Slider
                                                dots={false}
                                                arrows={true}
                                                infinite={true}
                                                asNavFor={nav2} ref={(slider1) => setNav1(slider1)

                                                }>
                                                <div className='document_preview_slide_wrap'>
                                                    <div className='image_name'>Rc Front</div>
                                                    <div className='document_preview_slide'>
                                                        <img src={id_bluespace} />
                                                    </div>
                                                </div>
                                                <div className='document_preview_slide_wrap'>
                                                    <div className='image_name'>Rc Front</div>
                                                    <div className='document_preview_slide'>
                                                        <img src={id_bluespace} />
                                                    </div>
                                                </div>
                                                <div className='document_preview_slide_wrap'>
                                                    <div className='image_name'>Rc Front</div>
                                                    <div className='document_preview_slide'>
                                                        <img src={id_bluespace} />
                                                    </div>
                                                </div>
                                                
                                            </Slider>
                                        </div>
                                        <div className='navigation_popup_slider manualreq'>
                                            <Slider asNavFor={nav1}
                                                ref={(slider2) => setNav2(slider2)}
                                                slidesToShow={2}
                                                swipeToSlide={true}
                                                focusOnSelect={true}
                                                dots={true}
                                                arrows={true}
                                                infinite={true}
                                                speed={500}
                                                slidesToScroll={1}
                                            >
                                                <div className='document_preview_slide_wrap'>
                                                    <div className='document_preview_slide'>
                                                        <img src={id_bluespace} />
                                                    </div>
                                                </div>
                                                <div className='document_preview_slide_wrap'>
                                                    <div className='document_preview_slide'>
                                                        <img src={id_bluespace} />
                                                    </div>
                                                </div>
                                                <div className='document_preview_slide_wrap'>
                                                    <div className='document_preview_slide'>
                                                        <img src={id_bluespace} />
                                                    </div>
                                                </div>
                                            </Slider>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div >
        </>
    )
};