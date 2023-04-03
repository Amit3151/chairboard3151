import React, { useRef, useState } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import '../css/AgentDetails.css'
import '../css/Filter.css'
import '../css/Channel.css'
import '../css/Master.css'
import '../css/Breadcrumbs.css'
import id_bluespace from '../images/id_bluespace.png'
import download from "../images/download.svg";
import { BsTrash } from 'react-icons/bs'
import { AiOutlineEye } from 'react-icons/ai'
import { HiDownload } from 'react-icons/hi'
import { BsPencil } from 'react-icons/bs'
import { ImArrowRight2 } from 'react-icons/im'
import { AiOutlineCloudUpload } from 'react-icons/ai'
import { AiOutlineHome } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import BreadcrumbItem from 'rsuite/esm/Breadcrumb/BreadcrumbItem'
import { Breadcrumb } from 'rsuite'





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

    //Mobile number input box
    const [value, setValue] = useState('');

    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        if (/^\d*$/.test(inputValue)) {
            setValue(inputValue);
        }
    };

    //Email input box
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleEmailChange = (event) => {
        const enteredEmail = event.target.value;
        setEmail(enteredEmail);

        // Regular expression to check if entered text is in email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(enteredEmail)) {
            setError('(Please enter a valid email address)');
        } else {
            setError('');
        }
    };

    //Vehicle number
    const [value1, setValue1] = useState('');
    const handleInputChange1 = (event) => {const inputValue = event.target.value;
        if (/^\d*$/.test(inputValue)) {
            setValue1(inputValue);  }};

            const [value2, setValue2] = useState('');
            const handleInputChange2 = (event) => {const inputValue = event.target.value;
                if (/^\d*$/.test(inputValue)) {
                    setValue2(inputValue);  }};

            const [value3, setValue3] = useState('');
            const handleInputChange3 = (event) => {const inputValue = event.target.value;
                if (/^\d*$/.test(inputValue)) {
                    setValue3(inputValue);  }};

            const [value4, setValue4] = useState('');
            const handleInputChange4 = (event) => {const inputValue = event.target.value;
                if (/^\d*$/.test(inputValue)) {
                    setValue4(inputValue);  }};

            const [value5, setValue5] = useState('');
            const handleInputChange5 = (event) => {const inputValue = event.target.value;
                if (/^\d*$/.test(inputValue)) {
                    setValue5(inputValue);  }};

            const [value6, setValue6] = useState('');
            const handleInputChange6 = (event) => {const inputValue = event.target.value;
                if (/^\d*$/.test(inputValue)) {
                    setValue6(inputValue);  }};

            const [value7, setValue7] = useState('');
            const handleInputChange7 = (event) => {const inputValue = event.target.value;
                if (/^\d*$/.test(inputValue)) {
                    setValue7(inputValue);  }};

            const [value8, setValue8] = useState('');
            const handleInputChange8 = (event) => {const inputValue = event.target.value;
                if (/^\d*$/.test(inputValue)) {
                    setValue8(inputValue);  }};

            const [value9, setValue9] = useState('');
            const handleInputChange9 = (event) => {const inputValue = event.target.value;
                if (/^\d*$/.test(inputValue)) {
                    setValue9(inputValue);  }};

            const [value10, setValue10] = useState('');
            const handleInputChange10 = (event) => {const inputValue = event.target.value;
                if (/^\d*$/.test(inputValue)) {
                    setValue10(inputValue);  }};

            const [value11, setValue11] = useState('');
            const handleInputChange11 = (event) => {const inputValue = event.target.value;
                if (/^\d*$/.test(inputValue)) {
                    setValue11(inputValue);  }};

            const [value12, setValue12] = useState('');
            const handleInputChange12 = (event) => {const inputValue = event.target.value;
                if (/^\d*$/.test(inputValue)) {
                    setValue12(inputValue);  }};

            const [value13, setValue13] = useState('');
            const handleInputChange13 = (event) => {const inputValue = event.target.value;
                if (/^\d*$/.test(inputValue)) {
                    setValue13(inputValue);  }};

            const [value14, setValue14] = useState('');
            const handleInputChange14 = (event) => {const inputValue = event.target.value;
                if (/^\d*$/.test(inputValue)) {
                    setValue14(inputValue);  }};

            const [value15, setValue15] = useState('');
            const handleInputChange15 = (event) => {const inputValue = event.target.value;
                if (/^\d*$/.test(inputValue)) {
                    setValue15(inputValue);  }};

            const [value16, setValue16] = useState('');
            const handleInputChange16 = (event) => {const inputValue = event.target.value;
                if (/^\d*$/.test(inputValue)) {
                    setValue16(inputValue);  }};

            const [value17, setValue17] = useState('');
            const handleInputChange17 = (event) => {const inputValue = event.target.value;
                if (/^\d*$/.test(inputValue)) {
                    setValue17(inputValue);  }};

            const [value18, setValue18] = useState('');
            const handleInputChange18 = (event) => {const inputValue = event.target.value;
                if (/^\d*$/.test(inputValue)) {
                    setValue18(inputValue);  }};

            const [value19, setValue19] = useState('');
            const handleInputChange19 = (event) => {const inputValue = event.target.value;
                if (/^\d*$/.test(inputValue)) {
                    setValue19(inputValue);  }};

            const [value20, setValue20] = useState('');
            const handleInputChange20 = (event) => {const inputValue = event.target.value;
                if (/^\d*$/.test(inputValue)) {
                    setValue20(inputValue);  }};
        
    return (
        <>

            <Sidebar />


            <div className="main_body">
                <div className="aget_header">
                    <Header />
                </div>
                <div className='bread-crumbs'>
                    <Breadcrumb>
                        <Link to='/Master'> <BreadcrumbItem className='breadcolor'> Master  </BreadcrumbItem></Link>
                        <Link to='/MasterDetails'> <BreadcrumbItem className='breadcolor'>Master Details</BreadcrumbItem></Link>
                    </Breadcrumb>
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

                        <div className="apro_input add adp errorrel">
                            <label for="email">Email</label>
                            <input
                                type="text"
                                id="email-input"
                                value={email}
                                onChange={handleEmailChange}
                                placeholder='Enter your Email'
                            />
                            <div className='errror'>{error && <p>{error}</p>}</div>
                            
                        </div>

                        <div className="apro_input add adp">
                            <label for="mobile">Mobile Number:</label>
                            <input
                                type="text"
                                value={value}
                                onChange={handleInputChange}
                                maxlength="10"
                                placeholder='Enter Mobile Number'
                            />
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
                            <input
                                type="text"
                                value={value1}
                                onChange={handleInputChange1}
                                placeholder='Amount'
                            />
                        </div>

                        <div className="apro_input add adp">
                            <label htmlFor="">Vehicle class 5</label>
                            <input
                                type="text"
                                value={value2}
                                onChange={handleInputChange2}
                                placeholder='Amount'
                            />
                        </div>

                        <div className="apro_input add adp">
                            <label htmlFor="">Vehicle class 6</label>
                            <input
                                type="text"
                                value={value3}
                                onChange={handleInputChange3}
                                placeholder='Amount'
                            />
                        </div>

                        <div className="apro_input add adp">
                            <label htmlFor="">Vehicle class 7</label>
                            <input
                                type="text"
                                value={value4}
                                onChange={handleInputChange4}
                                placeholder='Amount'
                            />
                        </div>
                        <div className="apro_input add adp">
                            <label htmlFor="">Vehicle class 8</label>
                            <input
                                type="text"
                                value={value5}
                                onChange={handleInputChange5}
                                placeholder='Amount'
                            />
                        </div>
                        <div className="apro_input add adp">
                            <label htmlFor="">Vehicle class 9</label>
                            <input
                                type="text"
                                value={value6}
                                onChange={handleInputChange6}
                                placeholder='Amount'
                            />
                        </div>
                        <div className="apro_input add adp">
                            <label htmlFor="">Vehicle class 10</label>
                            <input
                                type="text"
                                value={value7}
                                onChange={handleInputChange7}
                                placeholder='Amount'
                            />
                        </div>
                        <div className="apro_input add adp">
                            <label htmlFor="">Vehicle class 11</label>
                            <input
                                type="text"
                                value={value8}
                                onChange={handleInputChange8}
                                placeholder='Amount'
                            />
                        </div>

                        <div className="apro_input add adp">
                            <label htmlFor="">Vehicle class 12</label>
                            <input
                                type="text"
                                value={value9}
                                onChange={handleInputChange9}
                                placeholder='Amount'
                            />
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
                            <input
                                type="text"
                                value={value10}
                                onChange={handleInputChange10}
                                placeholder='Amount'
                            />
                        </div>

                        <div className="apro_input add adp">
                            <label htmlFor="">Vehicle class 5</label>
                            <input
                                type="text"
                                value={value11}
                                onChange={handleInputChange11}
                                placeholder='Amount'
                            />
                        </div>

                        <div className="apro_input add adp">
                            <label htmlFor="">Vehicle class 6</label>
                            <input
                                type="text"
                                value={value12}
                                onChange={handleInputChange12}
                                placeholder='Amount'
                            />
                        </div>

                        <div className="apro_input add adp">
                            <label htmlFor="">Vehicle class 7</label>
                            <input
                                type="text"
                                value={value13}
                                onChange={handleInputChange13}
                                placeholder='Amount'
                            />
                        </div>

                        <div className="apro_input add adp">
                            <label htmlFor="">Vehicle class 8</label>
                            <input
                                type="text"
                                value={value14}
                                onChange={handleInputChange14}
                                placeholder='Amount'
                            />
                        </div>

                        <div className="apro_input add adp">
                            <label htmlFor="">Vehicle class 12</label>
                            <input
                                type="text"
                                value={value15}
                                onChange={handleInputChange15}
                                placeholder='Amount'
                            />
                        </div>
                        <div className="apro_input add adp">
                            <label htmlFor="">Vehicle class 15</label>
                            <input
                                type="text"
                                value={value16}
                                onChange={handleInputChange16}
                                placeholder='Amount'
                            />
                        </div>
                        <div className="apro_input add adp">
                            <label htmlFor="">Vehicle class 16</label>
                            <input
                                type="text"
                                value={value17}
                                onChange={handleInputChange17}
                                placeholder='Amount'
                            />
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
                                <input
                                type="text"
                                value={value19}
                                onChange={handleInputChange19}
                                placeholder='Amount'
                                maxLength='12'
                            />
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
                                {imageURL && <img src={imageURL} alt="Image description" className='browse_file_img' />}
                                <span className='acb chooseimg'>Choose image</span>

                            </div>
                        </div>

                        <div className='uplaod'>
                            <div className="apro_input add adp phasefour" >
                                <label htmlFor="">PAN Card</label>
                                <input type="text" placeholder="Enter 10 digit PAN number" maxLength='10'/>
                            </div>
                            <div className="browse_file upload PAN" onClick={uploadfile2}>
                                <AiOutlineCloudUpload size={40} color='blue' />
                                <span>PAN card back</span>
                                <input type='file' hidden ref={uploadd2} onChange={handleFileUpload2} />
                                {imageURL2 && <img src={imageURL2} alt="Image description" className='browse_file_img' />}
                                <span className='acb chooseimg'>Choose image</span>
                            </div>
                        </div>

                        <div className='uplaod'>
                            <div className="apro_input add adp phasefour">
                                <label htmlFor="">Toll</label>
                                <select className="lable_box_items selectable1">
                                    <option value="">Select toll pla..</option>
                                    <option value="A">A</option>
                                    <option value="B">B</option>
                                    <option value="C">C</option>
                                </select>
                            </div>


                            <div className='container'>
                                <div className="browse_file upload">
                                    <div className='icons'>
                                        <div>1. GST card front</div>
                                        <div className='iconss'>
                                            <AiOutlineEye />
                                            <HiDownload />
                                            <BsPencil />
                                            <BsTrash />
                                        </div>
                                    </div>
                                    {/* <br /> */}
                                    <img src={id_bluespace} alt='' className='browse_file_img' />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* phase five */}
                    <div className='agent_details_page'>
                        <div className='adp_heading'>
                            <h1>Address Details</h1>
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
                                    <input
                                type="text"
                                value={value18}
                                onChange={handleInputChange18}
                                placeholder='PIN'
                                maxLength='6'
                            />
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