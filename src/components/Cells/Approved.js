import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import cross from '../../images/cross-23.svg';
import { AiOutlineClose } from 'react-icons/ai'

export default function Approved() {
    const [value, newvalue] = useState(true);
  const [error, setError] = useState(false);
  const inputRef = useRef();

  function approve() {
    newvalue((value) => !value);
  }
  function notApprove() {
    newvalue((value) => !value);
  }

  const styling_aprove = value ? "styling_aprove" : "styling_aprove active";
  let approve_box = value ? "approve_box" : "approve_box active";

  const aprove_ref = useRef()
  const outclick = e => {
    if (!aprove_ref.current.contains(e.target)) {
      newvalue(true);
    }
  }

  const [value1, newvalue1] = useState(true);
  const [error1, setError1] = useState(false);
  const inputRef1 = useRef();

  function approve1() {
    newvalue1((value1) => !value1);
  }
  function notApprove1() {
    newvalue1((value1) => !value1);
  }

  const styling_aprove1 = value1 ? "styling_aprove1" : "styling_aprove1 ";
  let approve_box1 = value1 ? "approve_box" : "approve_box active";

  const aprove_ref1 = useRef()
  const outclick1 = e => {
    if (!aprove_ref1.current.contains(e.target)) {
      newvalue1(true);
    }
  }

  function closePop1() {
    newvalue1(!value1)
  }

  const [value2, newvalue2] = useState(true);
  const [error2, setError2] = useState(false);
  const inputRef2 = useRef();

  function approve2() {
    newvalue2((value2) => !value2);
  }
  function notApprove2() {
    newvalue2((value2) => !value2);
  }

  const styling_aprove2 = value2 ? "styling_aprove2" : "styling_aprove2 ";
  let approve_box2 = value2 ? "approve_box" : "approve_box active";

  const aprove_ref2 = useRef()
  const outclick2 = e => {
    if (!aprove_ref2.current.contains(e.target)) {
      newvalue2(true);
    }
  }
  function closePop2() {
    newvalue2(!value2)
  }
  function closePop() {
    newvalue(!value)
  }

  useEffect(() => {
    document.addEventListener("mousedown", outclick);
    return () => document.removeEventListener("mousedown", outclick);
  })

  const [buttonText, setButtonText] = useState('Unblock');
  const [className, setClassName] = useState('styling_unblock');
  
  const handleClick = () => {
    buttonText=== "Unblock" ?setButtonText('Block'):setButtonText('Unblock');
    className=== "styling_unblock" ?setClassName('styling_block') : setClassName('styling_unblock');
  };
  
  const [buttonText1, setButtonText1] = useState('Block');
  const [className1, setClassName1] = useState('styling_block');

  const handleClick1 = () => {
    buttonText1=== "Unblock" ?setButtonText1('Block'):setButtonText1('Unblock');
    className1=== "styling_unblock" ?setClassName1('styling_block') : setClassName1 ('styling_unblock');
  };
    return (
        <td>
        <button className={styling_aprove} onClick={approve}>Approved</button>
        <div className={approve_box} >
          <div className="approve_inside">
            <div className="blur1" ref={aprove_ref}>
              <div className="apro_heading">
                <span>Approve</span>
                <AiOutlineClose onClick={closePop} />
                <div className="cross_icn_wrap">
                  <img src={cross} alt="" onClick={notApprove} />
                </div>
              </div>
              <div className="apro_input">
                <label htmlFor="">Enter Master Code</label>
                <input type="text" ref={inputRef} placeholder="Enter Master Code" />
                {/* {error && <span><img src={warning} alt="" /> {'Invaild Master Code'}</span>} */}
                {error && <span> {'Invaild Master Code'}</span>}
              </div>
              <div className="apro_button">
                <button onClick={() => {
                  let pattern = /\d/g;
                  let result = pattern.test(inputRef.current.value);
                  if (!result) {
                    setError(true);
                  } else {
                    setError(false);
                  }
                }}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </td>
    )
  }