import React, { useRef, useState } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import '../css/AgentDetails.css'
import '../css/Filter.css'
import '../css/Channel.css'
import '../css/Master.css'
import id_bluespace from '../images/id_bluespace.png'
import download from "../images/download.svg";
import { BsTrash } from 'react-icons/bs'
import { AiOutlineEye } from 'react-icons/ai'
import { HiDownload } from 'react-icons/hi'
import { BsPencil } from 'react-icons/bs'
import { AiOutlineCloudUpload } from 'react-icons/ai'
import { Link } from 'react-router-dom'


const MasterDetails = () => {


    const uploadd = useRef()
    function uploadfile() {
        console.log('click')
        uploadd.current.click()
    }

    const uploadd2 = useRef()
    function uploadfile2() {
        console.log('click')
        uploadd2.current.click()
    }

    //display uploaded img
   const [imageURL, setImageURL] = useState('');

   const handleFileUpload = (event) => {
     const file = event.target.files[0];
     const reader = new FileReader();
     reader.readAsDataURL(file);
     reader.onloadend = () => {
       setImageURL(reader.result);
     };
   };
    //display uploaded img 2
   const [imageURL2, setImageURL2] = useState('');

   const handleFileUpload2 = (event) => {
     const file = event.target.files[0];
     const reader = new FileReader();
     reader.readAsDataURL(file);
     reader.onloadend = () => {
       setImageURL2(reader.result);
     };
   };

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
                        <h1>Profile Details</h1>
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
                            <label  for="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="Enter Email" />
                        </div>

                        <div className="apro_input add adp">
                            <label htmlFor="">Mobile</label>
                            <input type="number" placeholder="Enter Mobile" />
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
                            <input type="number" placeholder="Amount" />
                        </div>

                        <div className="apro_input add adp">
                            <label htmlFor="">Vehicle class 5</label>
                            <input type="number" placeholder="Amount" />
                        </div>

                        <div className="apro_input add adp">
                            <label htmlFor="">Vehicle class 6</label>
                            <input type="number" placeholder="Amount" />
                        </div>

                        <div className="apro_input add adp">
                            <label htmlFor="">Vehicle class 7</label>
                            <input type="number" placeholder="Amount" />
                        </div>
                        <div className="apro_input add adp">
                            <label htmlFor="">Vehicle class 8</label>
                            <input type="number" placeholder="Amount" />
                        </div>
                        <div className="apro_input add adp">
                            <label htmlFor="">Vehicle class 9</label>
                            <input type="number" placeholder="Amount" />
                        </div>
                        <div className="apro_input add adp">
                            <label htmlFor="">Vehicle class 10</label>
                            <input type="number" placeholder="Amount" />
                        </div>
                        <div className="apro_input add adp">
                            <label htmlFor="">Vehicle class 11</label>
                            <input type="number" placeholder="Amount" />
                        </div>

                        <div className="apro_input add adp">
                            <label htmlFor="">Vehicle class 12</label>
                            <input type="number" placeholder="Amount" />
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
                            <input type="number" placeholder="Amount" />
                        </div>

                        <div className="apro_input add adp">
                            <label htmlFor="">Vehicle class 5</label>
                            <input type="number" placeholder="Amount" />
                        </div>

                        <div className="apro_input add adp">
                            <label htmlFor="">Vehicle class 6</label>
                            <input type="number" placeholder="Amount" />
                        </div>

                        <div className="apro_input add adp">
                            <label htmlFor="">Vehicle class 7</label>
                            <input type="number" placeholder="Amount" />
                        </div>

                        <div className="apro_input add adp">
                            <label htmlFor="">Vehicle class 8</label>
                            <input type="number" placeholder="Amount" />
                        </div>

                        <div className="apro_input add adp">
                            <label htmlFor="">Vehicle class 12</label>
                            <input type="number" placeholder="Amount" />
                        </div>
                        <div className="apro_input add adp">
                            <label htmlFor="">Vehicle class 15</label>
                            <input type="number" placeholder="Amount" />
                        </div>
                        <div className="apro_input add adp">
                            <label htmlFor="">Vehicle class 16</label>
                            <input type="number" placeholder="Amount" />
                        </div>
                    </div>

                    {/* phase four */}
                    <div className='adp_heading'>
                        <h1>Upload Document</h1>
                        <hr className='hr'></hr>
                    </div>

                    <div className='phasefour'>

                        <div className='uplaod'>
                            <div className="apro_input add adp phasefour">
                                <label htmlFor="">Aadhaar number</label>
                                <input type="number" placeholder="30301245464561656" />
                            </div>

                            <div className='container'>
                                <div className="browse_file upload">
                                    <div className='icons'>
                                        <div>1. Aadhaar card front</div>
                                        <div className='iconss'>
                                            <AiOutlineEye />    
                                            <HiDownload />
                                            <BsPencil />
                                            <BsTrash />
                                        </div>
                                    </div>
                                    <img src={id_bluespace} alt='' className='browse_file_img' />
                                </div>
                            </div>
                        </div>

                        <div className='uplaod'>
                            <div className="browse_file upload acb" onClick={uploadfile}>
                                <AiOutlineCloudUpload size={40} color='blue' />
                                <span>Aadhaar card back</span>
                                <input type='file' hidden ref={uploadd} onChange={handleFileUpload} />
                                {imageURL && <img src={imageURL} alt="Image description" className = 'browse_file_img'/>}
                                <span className='acb chooseimg'>Choose image</span>

                            </div>
                        </div>

                        <div className='uplaod'>
                            <div className="apro_input add adp phasefour" >
                                <label htmlFor="">PAN Card</label>
                                <input type="number" placeholder="30301245464561656" />
                            </div>
                            <div className="browse_file upload PAN" onClick={uploadfile2}>
                                <AiOutlineCloudUpload size={40} color='blue' />
                                <span>PAN card back</span>
                                <input type='file' hidden ref={uploadd2} onChange={handleFileUpload2}/>
                                {imageURL2 && <img src={imageURL2} alt="Image description" className = 'browse_file_img'/>}
                                <span className='acb chooseimg'>Choose image</span>
                            </div>
                        </div>

                        <div className='uplaod'>
                            <div className="apro_input add adp phasefour">
                                <label htmlFor="">Aadhaar number</label>
                                <input type="number" placeholder="30301245464561656" />
                            </div>

                            <div className='container'>
                                <div className="browse_file upload">
                                    <div className='icons'>
                                        <div>1. GST card front</div>
                                        <div>
                                            <AiOutlineEye />
                                            <HiDownload />
                                            <BsPencil />
                                            <BsTrash />
                                        </div>
                                    </div>
                                    <img src={id_bluespace} alt='' className='browse_file_img' />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* phase five */}
                    <div className='agent_details_page'>
                        <div className='adp_heading'>
                            <h1>Agent Details</h1>
                            <hr className='hr'></hr>
                        </div>
                        <div className='fourcols'>
                            <div className='adp_input_list'>
                                <div className="apro_input add adp addr">
                                    <label htmlFor="">Address</label>
                                    <input type="text" placeholder="Enter Address" />
                                </div>
                            </div>
                            
                                <div className='adp_input_list'>
                                    <div className="apro_input add adp">
                                        <label htmlFor="">PIN code</label>
                                        <input type="number" placeholder="Enter PIN" className='inputfield' />
                                    </div>
                                </div>
                                <div className='adp_input_list'>
                                    <div className="apro_input add adp">
                                        <label htmlFor="">State</label>
                                        <input type="text" placeholder="Enter State" className='inputfield' />
                                    </div>
                                </div>
                                <div className='adp_input_list'>
                                    <div className="apro_input add adp">
                                        <label htmlFor="">District</label>
                                        <input type="text" placeholder="Enter District" className='inputfield' />
                                    </div>
                                </div>
                            
                        </div>
                        <div className="odbtns ads">
                            <Link to='/Master'>
                                <button id="cancel">Cancel</button>
                            </Link>
                            <button id='dispatched' >Update</button>
                        </div>

                    </div>



                </div>
            </div>
        </>
    )
}

export default MasterDetails;