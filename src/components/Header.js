import React, { useState, useRef, useEffect } from "react";
import "../css/Header.css";
import back from "../images/Group 1000002772.svg";
import user from "../images/user.png";
import gear from "../images/gear.png";
import chat from "../images/chat.png";
import customer from "../images/customer-support.png";
import { NavLink } from "react-router-dom";

export default function Header() {

  // ================My_box======================================

  const [hide, sethide] = useState(true);
  function show() {
    sethide((hide) => !hide);
  }
  const customer_name = hide ? "customer_name" : "customer_name active";
  let hide_box = hide ? "hide_box" : "hide_box active";


  const mybox = useRef()
  const outclick = e => {
    if (!mybox.current.contains(e.target)) {
      sethide(true);
    }
  }
  useEffect(() => {
    document.addEventListener("mousedown", outclick);
    return () => document.removeEventListener("mousedown", outclick);
  })

  // ======================My_box========================================


  return (
    <>
      <div className="chair_header_box">
        <div className="chair_board">
          <button>Chairboard</button>
        </div>
        <div className={customer_name} onClick={show}>
          <img src={user} alt="" />
          <h3>Aditya Jangid</h3>
          <div className={hide_box} ref={mybox}>
            <NavLink to="" className="style_txt_img">
              <img src={user} alt="" />
              My Profile
            </NavLink>
            <NavLink to="" className="style_txt_img">
              <img src={gear} alt="" />
              Settings</NavLink>
            <NavLink to="" className="style_txt_img">
              <img src={chat} alt="" />
              Messages</NavLink>
            <NavLink to="" className="style_txt_img">
              <img src={customer} alt="" />
              Support</NavLink>
            <hr />
            <NavLink to="" className="style_txt_img">
              <img src={back} alt="" />
              Logout</NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
