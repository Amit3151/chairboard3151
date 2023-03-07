import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import '../css/AgentDetails.css'
import '../css/Filter.css'
import '../css/Channel.css'

const AgentDetails = () => {
    return (
        <>
            <div className="sidebar">
                <Sidebar />
            </div>

            <div className="main_body">
                <div className="aget_header">
                    <Header />
                </div>

                <div className='agent_details_page'>
                    <div className='adp_heading'>
                        <h1>Agent Details</h1>
                        <hr className='hr'></hr>
                    </div>

                    <div className='adp_input_list'>
                        <div className="apro_input add adp">
                            <label htmlFor="">Name</label>
                            <input type="text" placeholder="Enter Name" />
                        </div>

                        <div className="apro_input add adp">
                            <label htmlFor="">Master Code</label>
                            <input type="text" placeholder="Enter Master Code" />
                        </div>

                        <div className="apro_input add adp">
                            <label htmlFor="">Email</label>
                            <input type="text" placeholder="Enter Email" />
                        </div>

                        <div className="apro_input add adp">
                            <label htmlFor="">Mobile</label>
                            <input type="text" placeholder="Enter Mobile" />
                        </div>

                        <div className="apro_input add  adp">
                            <label htmlFor="">Alternate Mobile</label>
                            <input type="text" placeholder="Enter Alternate Mobile" />
                        </div>

                        <div className="apro_input add  adp">
                            <label htmlFor="">Relative Name</label>
                            <input type="text" placeholder="Enter Relative Name" />
                        </div>

                        <div className="apro_input add  adp">
                            <label htmlFor="">Relative Mobile</label>
                            <input type="text" placeholder="Enter Relative Mobile" />
                        </div>

                        <div className="filter_search_desc_second adp">
                            <div className="label_box adp">
                                <label htmlFor="">Add:</label>
                                <select className="lable_box_items">
                                    <option value="">Father</option>
                                    <option value="A">A</option>
                                    <option value="B">B</option>
                                    <option value="C">C</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* second phase */}

                    <div className='adp_heading'>
                        <h1>Tag Costs</h1>
                        <hr className='hr'></hr>
                    </div>

                    <div className='adp_input_list'>

                        <div className="filter_search_desc_second">
                            <div className="label_box adp2">
                                <label htmlFor="">Bank:</label>
                                <select className="lable_box_items">
                                    <option value="">Select Bank</option>
                                    <option value="A">A</option>
                                    <option value="B">B</option>
                                    <option value="C">C</option>
                                </select>
                            </div>
                        </div>

                        <div className="apro_input add adp">
                            <label htmlFor="">Vehicle class 4</label>
                            <input type="text" placeholder="Amount" />
                        </div>

                        <div className="apro_input add adp">
                            <label htmlFor="">Vehicle class 5</label>
                            <input type="text" placeholder="Amount" />
                        </div>

                        <div className="apro_input add adp">
                            <label htmlFor="">Vehicle class 6</label>
                            <input type="text" placeholder="Amount" />
                        </div>

                        <div className="apro_input add adp">
                            <label htmlFor="">Vehicle class 7</label>
                            <input type="text" placeholder="Amount" />
                        </div>

                        <div className="apro_input add adp">
                            <label htmlFor="">Vehicle class 12</label>
                            <input type="text" placeholder="Amount" />
                        </div>

                        <div className="apro_input add adp">
                            <label htmlFor="">Vehicle class 17</label>
                            <input type="text" placeholder="Amount" />
                        </div>
                    </div>

                    {/* phase three */}
                    <div className='adp_heading'>
                        <h1>Tag Commission</h1>
                        <hr className='hr'></hr>
                    </div>

                    <div className='phasethree'>
                        <div className="apro_input add adp">
                            <label htmlFor="">Vehicle class 4</label>
                            <input type="text" placeholder="Amount" />
                        </div>

                        <div className="apro_input add adp">
                            <label htmlFor="">Vehicle class 5</label>
                            <input type="text" placeholder="Amount" />
                        </div>

                        <div className="apro_input add adp">
                            <label htmlFor="">Vehicle class 6</label>
                            <input type="text" placeholder="Amount" />
                        </div>

                        <div className="apro_input add adp">
                            <label htmlFor="">Vehicle class 7</label>
                            <input type="text" placeholder="Amount" />
                        </div>

                        <div className="apro_input add adp">
                            <label htmlFor="">Vehicle class 8</label>
                            <input type="text" placeholder="Amount" />
                        </div>

                        <div className="apro_input add adp">
                            <label htmlFor="">Vehicle class 12</label>
                            <input type="text" placeholder="Amount" />
                        </div>
                        <div className="apro_input add adp">
                            <label htmlFor="">Vehicle class 15</label>
                            <input type="text" placeholder="Amount" />
                        </div>
                        <div className="apro_input add adp">
                            <label htmlFor="">Vehicle class 16</label>
                            <input type="text" placeholder="Amount" />
                        </div>
                    </div>

                    {/* phase four */}
                    <div className='adp_heading'>
                        <h1>Upload Document</h1>
                        <hr className='hr'></hr>
                    </div>

                    <div className='phasefour'>

                        <div className="apro_input add adp phasefour">
                            <label htmlFor="">Aadhaar number</label>
                            <input type="text" placeholder="30301245464561656" />
                        </div>

                            <div className="browse_file ">
                                <span>1. Aadhaar card front</span>
                            </div>
                            <div>
                                <img src='' alt=''/>
                            </div>

                        <div className="apro_input add adp">

                        </div>

                        <div className="apro_input add adp phasefour">
                            <label htmlFor="">Aadhaar number</label>
                            <input type="text" placeholder="30301245464561656" />
                        </div>

                        <div className="apro_input add adp phasefour">
                            <label htmlFor="">Aadhaar number</label>
                            <input type="text" placeholder="30301245464561656" />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default AgentDetails;