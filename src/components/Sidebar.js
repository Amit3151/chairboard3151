import React, { useState } from "react";
import meter from "../images/Dashboard.svg";
import profile from "../images/profile.svg";
import wallet from "../images/wallet.svg";
import group from "../images/Agent.svg";
import invent from "../images/Inventory.svg";
import order from "../images/Order.svg";
import code from "../images/Request.svg";
import report from "../images/Report.svg";
import manreq from "../images/Manual_req.svg";
import master from '../images/Master.svg';
import recharge from "../images/Recharge.svg"
import "../css/Sidebar.css"
import { NavLink } from "react-router-dom";


export default function Sidebar() {

    const [btnstate, setBtnState] = useState(true);
    function opennav() {
        setBtnState((btnstate) => !btnstate);
    }
    let menu_box = btnstate ? "menu_box" : "menu_box active";
    let cross = btnstate ? "menu_btn" : "menu_btn cross";
    let menu = btnstate ? "menu" : "menu active";
    let sidebar = btnstate ? "sidebar" : "sidebar active";

    let activeclassname = "sidebarnavchild sidenavactive";
    let inactiveclassname = "sidebarnavchild";
    return (
        <>
         <div className={sidebar}>
            <div className={menu}>
                <div className="header_opt">
                    <ul>
                        <NavLink to="/" className={({ isActive }) => (
                            isActive ? activeclassname : inactiveclassname
                        )}>
                            <li className="styling">
                                <img src={meter} alt="" />
                                <div
                                    className="nav_link"
                                >
                                    Dashboard
                                </div>
                            </li>
                        </NavLink>

                        <NavLink to="/Channel" className={({ isActive }) => (
                            isActive ? activeclassname : inactiveclassname
                        )}>
                            <li className="styling">
                                <img src={profile} alt="" />
                                <div
                                    className="nav_link"

                                >
                                    Channel Partner
                                </div>
                            </li>
                        </NavLink>

                        <NavLink to="/Master" className={({ isActive }) => (
                            isActive ? activeclassname : inactiveclassname
                        )}>
                            <li className="styling">
                                <img src={master} alt="" />
                                <div
                                    className="nav_link"

                                >
                                    Master
                                </div>
                            </li>
                        </NavLink>
                        
                        <NavLink to="/Agent/" className={({ isActive }) => (
                            isActive ? activeclassname : inactiveclassname
                        )}>
                            <li className="styling">
                                <img src={group} alt="" />
                                <div
                                    className="nav_link"

                                >
                                    Agents
                                </div>
                            </li>
                        </NavLink>

                        <NavLink to="/Inventory" className={({ isActive }) => (
                            isActive ? activeclassname : inactiveclassname
                        )}>
                            <li className="styling">
                                <img src={invent} alt="" />
                                <div
                                    className="nav_link"

                                >
                                    Inventory
                                </div>
                            </li>
                        </NavLink>

                        <NavLink to="/Order" className={({ isActive }) => (
                            isActive ? activeclassname : inactiveclassname
                        )}>
                            <li className="styling">
                                <img src={order} alt="" />
                                <div
                                    className="nav_link"

                                >
                                    Orders
                                </div>
                            </li>
                        </NavLink>

                        <NavLink to="/Request" className={({ isActive }) => (
                            isActive ? activeclassname : inactiveclassname
                        )}>
                            <li className="styling">
                                <img src={code} alt="" />
                                <div
                                    className="nav_link"

                                >
                                    Requests
                                </div>
                            </li>
                        </NavLink>

                        <NavLink to="/ManualRequest" className={({ isActive }) => (
                            isActive ? activeclassname : inactiveclassname
                        )}>
                            <li className="styling">
                                <img src={manreq} alt="" />
                                <div
                                    className="nav_link"

                                >
                                    Manual Requests
                                </div>
                            </li>
                        </NavLink>

                        <NavLink to="/Reports" className={({ isActive }) => (
                            isActive ? activeclassname : inactiveclassname
                        )}>
                            <li className="styling">
                                <img src={report} alt="" />
                                <div
                                    className="nav_link"

                                >
                                    Reports
                                </div>
                            </li>
                        </NavLink>


                        <NavLink to="/Wallet" className={({ isActive }) => (
                            isActive ? activeclassname : inactiveclassname
                        )}>
                            <li className="styling">
                                <img src={wallet} alt="" />
                                <div
                                    className="nav_link"
                                >
                                    Recharge / Wallet
                                </div>
                            </li>
                        </NavLink>

                        

                        

                        
                        

                        

                        

                        

                       
                    </ul>
                </div>
            </div>
            <div className={menu_box}>
                <div className={cross} onClick={opennav}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            </div>
        </>
    )
}
