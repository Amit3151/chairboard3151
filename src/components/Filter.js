import React, { useRef, useState, useEffect } from 'react'
import "../css/Filter.css";
import setting from "../images/mi_filter.svg";
import customise from "../images/ep_setting.svg";
import download from "../images/download.svg";
export default function Filter() {

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
            setshow(true);
        }
    }
    useEffect(() => {
        document.addEventListener("mousedown", outclick);
        return () => document.removeEventListener("mousedown", outclick);
    })

    // ====================Filter Applied======================================
    const [masterCode, setMasterCode] = useState('');
    const [status, setStatus] = useState('');
    const [demo1, setDemo1] = useState('');
    const [demo2, setDemo2] = useState('');
    const [acknowledgment, setAcknowledgment] = useState('');

    
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

    return (
        <>
            <form>
                <div className={fillter} >
                    <div><img src={customise} alt="dropdown.img"
                        onClick={toggleMenu}
                    /></div>

                    {showMenu && ( <div ref={menuRef} className="dropdown-menu">
                        <ul>
                            <li>Show/Hide Column</li>
                            <li>Add a Column</li>
                        </ul>
                    </div>)}

                    <div >
                        <div className={upload_img} >
                            <img src={download} alt="" type='file' onClick={show_pop} />
                        </div>
                        <div className= {pop_box_backdrop}>
                        </div>
                        <div className={pop_box} ref={pop}>
                            <div className="browse_file">
                                <img src={download} alt="" className="allow_size" />
                                <span>browse_file</span>
                                <span></span>
                            </div>
                            <div className="sample_file">
                                <img src={download} alt="" className="allow_size" />
                                <span>Download Sample File</span>
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
                                <input className="input_calendar" type="date" />
                            </div>

                            <div className="label_box">
                                <label htmlFor="">Master Code:</label>
                                <select className="lable_box_items" value={masterCode} onChange={e => setMasterCode(e.target.value)}>
                                    <option value="">Master Code</option>
                                    <option value="A">A</option>
                                    <option value="B">B</option>
                                    <option value="C">C</option>
                                </select>
                                {masterCode && <span style={{ color: 'green', marginLeft: '5px' }}>●</span>}
                            </div>

                            <div className="label_box">
                                <label htmlFor="">Status:</label>
                                <select className="lable_box_items" value={status} onChange={e => setStatus(e.target.value)}>
                                    <option value="">Status</option>
                                    <option value="Pending">Pending</option>
                                    <option value="Accepted">Accepted</option>
                                    <option value="Rejected">Rejected</option>
                                </select>
                                {status && <span style={{ color: 'green', marginLeft: '5px' }}>●</span>}
                            </div>

                        </div>
                        <div className="filter_search_desc_second">
                            <div className="label_box">
                                <label htmlFor="">Demo 1:</label>
                                <select className="lable_box_items" value={demo1} onChange={e => setDemo1(e.target.value)}>
                                    <option value="">Demo 1</option>
                                    <option value="A">A</option>
                                    <option value="B">B</option>
                                    <option value="C">C</option>
                                </select>
                                {demo1 && <span style={{ color: 'green', marginLeft: '5px' }}>●</span>}
                            </div>
                            <div className="label_box">
                                <label htmlFor="">Demo 2:</label>
                                <select className="lable_box_items" value={demo2} onChange={e => setDemo2(e.target.value)}>
                                    <option value="">Demo 2</option>
                                    <option value="A">A</option>
                                    <option value="B">B</option>
                                    <option value="C">C</option>
                                </select>
                                {demo2 && <span style={{ color: 'green', marginLeft: '5px' }}>●</span>}
                            </div>
                            <div className="label_box">
                                <label htmlFor="">Acknowledgment:</label>
                                <select className="lable_box_items" value={acknowledgment} onChange={e => setAcknowledgment(e.target.value)}>
                                    <option value="">Acknowledgment</option>
                                    <option value="yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                                {acknowledgment && <span style={{ color: 'green', marginLeft: '5px' }}>●</span>}
                            </div>
                        </div>

                        <div className="filter_button">
                            <button type='reset' onClick={() => {
                                console.log('reset clicked')
                            }}>Reset</button>

                            <button onClick={() => {
                                console.log('clicked')
                                setshow(!show)
                            }}>Apply</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}
