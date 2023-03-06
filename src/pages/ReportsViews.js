import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import id_bluespace from '../images/id_bluespace.png'
import '../css/ReportsViews.css'


const ReportsViews = () => {
    return (
        <>
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="main_body">
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
                                        <td className='tdd'>996, ChandPole , jaipur</td>
                                        <td className='tdd'>141100</td>
                                        <td className='tdd'>141100</td>
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
                                        <td className='tdd'>98745-659-32</td>
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
                                        <td className='tdd'>daf5456afasd56asd <br /> 1Rs</td>
                                        <td className='tdd'>daf5456afasd56asd <br /> 1Rs</td>
                                        <td className='tdd'>daf5456afasd56asd <br /> 1Rs</td>
                                        <td className='tdd'>daf5456afasd56asd <br /> 1Rs</td>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        
                    </div>
                    <div className='idHeading'>
                            <h1 className='id_head'>Preview of Document</h1>
                            <div className='idPhotos'>
                                <div><img className='idPhoto' src={id_bluespace}/> <br /> <h2>RC Front</h2></div>
                                <div><img className='idPhoto' src={id_bluespace}/> <br /> <h2>RC Back</h2></div>
                                <div><img className='idPhoto' src={id_bluespace}/> <br /> <h2>Address Front</h2></div>
                                <div><img className='idPhoto' src={id_bluespace}/> <br /> <h2>Address back</h2></div>
                            </div>
                        </div>
                </div>
            </div>
        </>
    )
}

export default ReportsViews