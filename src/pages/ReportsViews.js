import React, {useCallback, useState } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import id_bluespace from '../images/id_bluespace.png'
import '../css/ReportsViews.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cross from "../images/cross-23.svg";
import download from "../images/download.svg";



const ReportsViews = () => {

    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1


    };


    const [slider_click, setSlider_click] = useState(false);
    function open_popub_slider() {
        setSlider_click(true)
    }
    function close_slider_popup() {
        setSlider_click(false)
    }

    //view imgs
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const images = [
        'http://placeimg.com/1200/800/nature',
        'http://placeimg.com/800/1200/nature',
        'http://placeimg.com/1920/1080/nature',
        'http://placeimg.com/1500/500/nature',
    ];

    const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();
    const popup_box_slider = slider_click ? "popup_box_slider_main opened" : "popup_box_slider_main";


    return (
        <>
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="main_body rv">
                <div className="req_header">
                    <Header />
                </div>
                <div className='buttons'>
                    <button className='halfButton'>Half</button>
                    <div>
                        <button className='declineButton'>Decline</button>
                        <button className='fullButton'>Full Payment</button>
                    </div>
                </div>
                <div className="repo_main_cont rvs">
                    <div className="repo_main_box">
                        <div className="repo_main_box_heading rvs">
                            <div className='tableHeading'>
                                Customer details
                            </div>
                            <div>
                                <table className='tablee'>
                                    <thead>
                                        <th className='thh'>Customer name</th>
                                        <th className='thh'>Mobile number</th>
                                        <th className='thh'>Address</th>
                                        <th className='thh'>Pin code Customer</th>
                                        <th className='thh'>Pin code Vahan</th>
                                        <th className='thh'>PAN number</th>
                                        <th className='thh'>Customer ID</th>
                                    </thead>
                                    <tbody>
                                        <td className='tdd'>Nisha devi</td>
                                        <td className='tdd'>9929654477</td>
                                        <td className='tdd'>996,chandni chauk  , tabri new kartar negar ludhiana ,<br />  North India, Punjab</td>
                                        <td className='tdd'>141100 <div className='NonServiceable'>Non Servicable</div></td>
                                        <td className='tdd'>141100 <div className='Serviceable'>Servicable</div></td>
                                        <td className='tdd'>7539518524</td>
                                        <td className='tdd'>DHAJ518524</td>
                                    </tbody>
                                </table>
                            </div>
                            <div className='tableHeading'>
                                Agent details
                            </div>
                            <div>
                                <table className='tablee'>
                                    <thead>
                                        <th className='thh'>Name</th>
                                        <th className='thh'>Mobile number</th>
                                        <th className='thh'>Master code</th>
                                    </thead>
                                    <tbody>
                                        <td className='tdd'>Nisha devi</td>
                                        <td className='tdd'>9929654477</td>
                                        <td className='tdd'>ICH0446</td>
                                    </tbody>
                                </table>
                            </div>
                            <div className='tableHeading'>
                                Tag details
                            </div>
                            <div>
                                <table className='tablee'>
                                    <thead>
                                        <th className='thh'>Reg. number</th>
                                        <th className='thh'>Vehicle class</th>
                                        <th className='thh'>Issue Time</th>
                                        <th className='thh'>Tag ID</th>
                                        <th className='thh'>Tag seriel no.</th>
                                        <th className='thh'>SD amount</th>
                                        <th className='thh'>FTL</th>
                                        <th className='thh'>Tag Cost</th>
                                        <th className='thh'>Wavier code</th>
                                        <th className='thh'>Total amount</th>
                                    </thead>
                                    <tbody>
                                        <td className='tdd'>Chasis number<br /><button>RJ45 CM 1109</button></td>
                                        <td className='tdd'>Vc4</td>
                                        <td className='tdd'>06/01/2023</td>
                                        <td className='tdd'>3416XXXXXXXXXXXXXXXD0C0</td>
                                        <td className='tdd'><div className='green'>98745876-98743214</div></td>
                                        <td className='tdd'></td>
                                        <td className='tdd'></td>
                                        <td className='tdd'></td>
                                        <td className='tdd'></td>
                                    </tbody>
                                </table>
                            </div>
                            <div className='tableHeading'>
                                Commission details
                            </div>
                            <div>
                                <table >
                                    <thead>
                                        <th className='thh'>Master Tag cost return</th>
                                        <th className='thh'>Agent tag cost return</th>
                                        <th className='thh'>Master Commission</th>
                                        <th className='thh'>Agent Commission</th>
                                    </thead>
                                    <tbody>
                                        <td className='tdd'><div className='green'>daf5456afasd56asd </div> 1Rs</td>
                                        <td className='tdd'><div className='blue'>daf5456afasd56asd </div> 1Rs</td>
                                        <td className='tdd'><div className='green'>daf5456afasd56asd </div> 1Rs</td>
                                        <td className='tdd'><div className='blue'>daf5456afasd56asd </div> 1Rs</td>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                    <div className='document_preview_wrap'>
                        <div className='document_preview_wrap_title'>
                            Preview Of Documents
                            <div  className='open_popub_slider'>
                                <Slider {...settings}>
                                    <div className='document_preview_slide_wrap'>
                                        <div className='document_preview_slide' onClick={open_popub_slider}>
                                            <img src={id_bluespace} />
                                        </div>
                                    </div>
                                    <div className='document_preview_slide_wrap'>
                                        <div className='document_preview_slide' onClick={open_popub_slider}>
                                            <img src={id_bluespace} />
                                        </div>
                                    </div>
                                    <div className='document_preview_slide_wrap'>
                                        <div className='document_preview_slide' onClick={open_popub_slider}>
                                            <img src={id_bluespace} />
                                        </div>
                                    </div>
                                    <div className='document_preview_slide_wrap'>
                                        <div className='document_preview_slide'onClick={open_popub_slider}>
                                            <img src={id_bluespace} />
                                        </div>
                                    </div>
                                    <div className='document_preview_slide_wrap'>
                                        <div className='document_preview_slide'onClick={open_popub_slider}>
                                            <img src={id_bluespace} />
                                        </div>
                                    </div>
                                </Slider>
                            </div>
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
                                    <div className='navigation_popup_slider'>
                                        <Slider asNavFor={nav1}
                                            ref={(slider2) => setNav2(slider2)}
                                            slidesToShow={4}
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
        </>
    )
}

export default ReportsViews