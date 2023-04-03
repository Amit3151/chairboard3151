import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import cross from '../../images/cross-23.svg';
import { AiOutlineClose } from 'react-icons/ai'

export default function Return() {
    // =====================Pop_box=============================

  const [hide, sethide] = useState(true);
  function show_pop() {
    sethide(!hide)
  }
  const upload_img = hide ? "upload_img" : "upload_img active";
  let pop_box = hide ? "pop_box" : "pop_box active";
  let upload_pop_up_box = hide ? "upload_pop_up_box" : "upload_pop_up_box active";

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

  const closePop = () => {
    sethide(!hide)
  }
  // ===================Popup_box================================
  const [value2, newvalue2] = useState(true);
  const [error2, setError2] = useState(false);
  const inputRef2 = useRef();

  function approve2() {
    newvalue2((value2) => !value2);
  }
  function notApprove2() {
    newvalue2((value2) => !value2);
  }
  function closePop5() {
    newvalue2(!value2)
  }

  const styling_aprove2 = value2 ? "styling_aprove2 block" : "styling_aprove2 block";
  let approve_box2 = value2 ? "approve_box" : "approve_box active";

  const aprove_ref2 = useRef()
  const outclick2 = e => {
    if (!aprove_ref2.current.contains(e.target)) {
      newvalue2(true);
    }
  }

  const uploadd = useRef()
  function uploadfile() {

    uploadd.current.click()
  }
  //Filter Patch
  const handleFilterSubmit = () => {
  }

    return (
        <td>

                            <td>
                              <button className={styling_aprove2} onClick={approve2}>Return</button>
                              <div className={approve_box2} >
                                <div className="approve_inside">
                                  <div className="blur1" ref={aprove_ref2}>
                                    <div className="apro_heading">
                                      <span>Block</span>
                                      <AiOutlineClose onClick={closePop5} />
                                      <div className="cross_icn_wrap">
                                        <img src={cross} alt="" onClick={notApprove2} />
                                      </div>
                                    </div>
                                    <div className="apro_input">
                                      <label htmlFor="">Enter Master Code</label>
                                      <input type="text" ref={inputRef2} placeholder="Enter Master Code" />
                                      {error2 && <span> {'Invaild Master Code'}</span>}
                                    </div>
                                    <div className="apro_button">
                                      <button onClick={() => {
                                        let pattern = /\d/g;
                                        let result2 = pattern.test(inputRef2.current.value2);
                                        if (!result2) {
                                          setError2(true);
                                        } else {
                                          setError2(false);
                                        }
                                      }}>Submit</button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </td>
    )
  }