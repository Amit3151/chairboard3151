import React, { useRef, useState, useEffect } from 'react'
import "../css/Filter.css";
import setting from "../images/mi_filter.svg";
import download from "../images/download.svg";
import 'react-date-range/dist/styles.css'; //Date range main style file
import 'react-date-range/dist/theme/default.css'; //Date range theme css file
import cross from "../images/cross-23.svg";
import DateRangeSelector from './DateRange';


export default function Filter({ statuses, onSubmit, Filters }) {

    // ===================Pop-up=====================================

    const [show, setshow] = useState(true);
    function show_fill() {
        setshow((show) => !show);
    }

    const fillter = show ? "fillter" : "fillter active";
    const pop_up = show ? "pop_up" : "pop_up active";

    const input_box = useRef();

    //download button
    const [hide, sethide] = useState(true);
    function show_pop() {
        sethide(!hide)
    }

    const closePop = () => {
        sethide(!hide)
    }
    const upload_img = hide ? "upload_img" : "upload_img active";
    let pop_box = hide ? "pop_box" : "pop_box active";
    let pop_box_backdrop = hide ? "pop_box_backdrop" : "pop_box_backdrop active";

    const pop = useRef()
    const outerclick = e => {
        if (!pop.current.contains(e.target)) {
            sethide(true);
        }
    }
    useEffect(() => {
        if (!hide) {
            document.addEventListener("mousedown", outerclick);
        }
        return () => document.removeEventListener("mousedown", outerclick);
    }, [hide])

    const hidebox = useRef()
    const outclick = e => {
        if (!hidebox.current.contains(e.target)) {
            // setshow(true);
        }
    }
    useEffect(() => {
        document.addEventListener("mousedown", outclick);
        return () => document.removeEventListener("mousedown", outclick);
    })

    // ====================Filter Applied======================================
    const [masterCode, setMasterCode] = useState('');
    const [selectedValue, setSelectedValue] = useState("");
    const [acknowledgment, setAcknowledgment] = useState('');

    //reset everything
    const ResetEverything = () => {
        setMasterCode('')
        setSelectedStatus('')
        setSelectedValue('')
        // setDemo2('')
        setAcknowledgment('')

    }

    // ====================Setting Options===============================
    const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setShowMenu(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuRef]);

    const uploadd = useRef()
    function uploadfile() {
        console.log('click')
        uploadd.current.click()
    }

    //date range
    let upload_pop_up_box = hide ? "upload_pop_up_box" : "upload_pop_up_box active";

    //Form Filter Submit
    const [selectedStatus, setSelectedStatus] = useState('');

    const handleStatusChange = (event) => {
        setSelectedStatus(event.target.value);
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        setshow(!show);
        onSubmit(selectedStatus);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className={fillter}>
                    {/* <div><img src={customise} alt="dropdown.img"
                        onClick={toggleMenu} />
                    </div> */}

                    {showMenu && (<div ref={menuRef} className="dropdown-menu">
                        <ul>
                            <li>Show/Hide Column</li>
                            <li>Add a Column</li>
                        </ul>
                    </div>)}

                    <div >

                        <div className={upload_img}>

                            <img src={download} alt="" type='file' onClick={show_pop} />
                        </div>
                        <div className={pop_box_backdrop}>
                            <div className={pop_box} ref={pop}>

                                <div className="cross_icn_wrap" onClick={closePop} >
                                    <h3>Download List</h3>
                                    <img src={cross} alt="" />
                                </div>

                                <div className="browse_file" >
                                    <img src={download} alt="" className="allow_size" />
                                    <input type='file' hidden ref={uploadd} />
                                    <span className='customblue'>Download CSV File</span>
                                    <span></span>
                                </div>
                                <div className="sample_file">
                                    <img src={download} alt="" className="allow_size" />
                                    <span className='customblue'>Download PDF File</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="input_file">
                        <input type="file" ref={input_box} />
                    </div>

                    <img src={setting} alt="" onClick={show_fill} />

                    <div className={pop_up} ref={hidebox}>
                        <div className="filter_heading">
                            <h3>Filter Area</h3>
                            {/* <img src={customise} alt="" /> */}
                        </div>
                        <div className="filter_search_desc_first">
                            <div className="label_box update">
                                <label>Calendar:</label>
                                <DateRangeSelector />

                            </div>
                            <div className="label_box hasdot">
                                <label htmlFor="">Master Code:</label>
                                <select className="lable_box_items" value={masterCode} onChange={e => setMasterCode(e.target.value)}>
                                    <option value="">Master Code</option>
                                    <option value="A">A</option>
                                    <option value="B">B</option>
                                    <option value="C">C</option>
                                </select>
                                {masterCode && <span style={{ color: 'green', marginLeft: '116px' }}>●</span>}
                            </div>

                            <div className="label_box hasdot">
                                <label htmlFor="">Status:</label>
                                <select className="lable_box_items" value={selectedStatus} onChange={handleStatusChange}>
                                    <option value="">Status</option>
                                    {statuses.map(status => (
                                        <option key={status} value={status}>{status}</option>
                                    ))}
                                </select>
                                {selectedStatus && <span style={{ color: 'green', marginLeft: '70px' }}>●</span>}
                            </div>

                        </div>
                        <div className="filter_search_desc_second">
                            {Filters.map((filter, index) => (
                                <div className="label_box hasdot">
                                    <label htmlFor="">{filter.filtername}</label>
                                    <select
                                        className="lable_box_items"
                                        onChange={(e) => {
                                            filter.filtonChange(e);
                                            const newFilters = [...Filters];
                                            newFilters[index].selectedValue = e.target.value;
                                            setSelectedValue(newFilters);
                                        }}
                                    >
                                        {filter.options.map((option) => (
                                            <option value={option}>{option}</option>
                                        ))}
                                    </select>
                                    {filter.selectedValue && (
                                        <span style={{ color: 'green', marginLeft: '85px' }}>●</span>
                                    )}
                                </div>
                            ))}

                            <div className="label_box hasdot">
                                <label htmlFor="">Acknowledgment:</label>
                                <select className="lable_box_items" value={acknowledgment} onChange={e => setAcknowledgment(e.target.value)}>
                                    <option value="">Acknowledgment</option>
                                    <option value="yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                                {acknowledgment && <span style={{ color: 'green', marginLeft: '150px' }}>●</span>}
                            </div>
                        </div>

                        <div className="filter_button">
                            <button type='reset' onClick={() => { ResetEverything() }}>Reset</button>

                            <button type='submit' >Apply</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}