import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import '../css/CheckDetails.css'
import sort from "../images/uil_sort-amount-down.svg";
import { BsDownload } from 'react-icons/bs'

const CheckDetails = () => {

    const tableData = [
        { TagSr: '274758290-0949348', TagId: '99856678as6545a6d656a6d6', ClassID: '4', Bank: 'Kotak', MasterAgent: 'ABC123', Status: 'Valid', },
        { TagSr: '274758290-0949348', TagId: '99856678as6545a6d656a6d6', ClassID: '4', Bank: 'Kotak', MasterAgent: 'ABC123', Status: 'InValid', },
        { TagSr: '274758290-0949348', TagId: '99856678as6545a6d656a6d6', ClassID: '4', Bank: 'Kotak', MasterAgent: 'ABC123', Status: 'Valid', },
        { TagSr: '274758290-0949348', TagId: '99856678as6545a6d656a6d6', ClassID: '4', Bank: 'Kotak', MasterAgent: 'ABC123', Status: 'InValid', },
    ]

    const download = () => {
        alert('File is downloading')
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
                <div className='mainBody'>
                    <div className='page_heading'>
                        <h1>Check Details</h1>
                        <div onClick={download}>
                        <BsDownload size={20}/>
                        </div>
                    </div>

                    <div className="repo_main_box">
                        <div className="repo_main_box_heading OD">
                            <table>
                                <thead>
                                    <tr>
                                        <td>
                                            <span className="align">
                                                Tag Sr no <img src={sort} alt="" />
                                            </span>
                                        </td>
                                        <td>
                                            <span className="align">
                                                Tag ID<img src={sort} alt="" />
                                            </span>
                                        </td>
                                        <td>
                                            <span className="align">
                                                Class ID<img src={sort} alt="" />
                                            </span>
                                        </td>
                                        <td>
                                            <span className="align">
                                                Bank<img src={sort} alt="" />
                                            </span>
                                        </td>
                                        <td>
                                            <span className="align">
                                                Master/ Agent ID<img src={sort} alt="" />
                                            </span>
                                        </td>
                                        <td>
                                            <span className="align">
                                                Status<img src={sort} alt="" />
                                            </span>
                                        </td>
                                    </tr>
                                </thead>

                                <tbody>
                                    {tableData.map((item, index) => (
                                        <tr key={index}>
                                            <td>{item.TagSr}</td>
                                            <td>{item.TagId}</td>
                                            <td>{item.ClassID}</td>
                                            <td>{item.Bank}</td>
                                            <td>{item.MasterAgent}</td>
                                            <td className={item.Status == "Valid" ? 'Valid' : 'InValid' }>{item.Status}</td>

                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                        </div>

                    </div>
                    <div className="odbtns">
                        <Link to='/Order'>
                            <button id="cancel">Cancel</button>
                        </Link>
                        <button id='dispatched' >Submit</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default CheckDetails