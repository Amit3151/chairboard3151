import "../css/add.css"
import React, { useState, useRef, useEffect } from "react";

export default function Add(){
    
    return (
        <>
<div className="approve_box active">
    <div className="approve_inside">
        <div className="blur add">
            <div className="apro_heading">
                <span>Channel Partner Creation</span>
            </div>
            <div className="input_add_wrap">
            <div className="apro_input add">
                <label htmlFor="">CP ID</label>
                <input type="text" placeholder="CP Id" />
                
                
            </div>
            <div className="apro_input add">
                <label htmlFor="">PASSWORD</label>
                <input type="text" placeholder="PASSWORD" />
                
                
            </div>
            <div className="apro_input add">
                <label htmlFor="">ENCRYPTION KEY</label>
                <input type="text" placeholder="ENCRYPTION KEY" />
                
                
            </div>
            <div className="apro_input add">
                <label htmlFor="">AGENT ID</label>
                <input type="text" placeholder="AGENT ID" />
                
                
            </div>
            <div className="apro_button">
                <button>Submit</button>
            </div>
        </div>
        </div>
    </div>
</div>

</>
  );
}