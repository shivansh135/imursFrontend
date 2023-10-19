import React, { useState, useRef } from "react";
import "./login.css";

import { MainHeading } from "../headings/heading";
import { ButtonSecondary } from "../button/button";

export const Otp = () => {
  const [otpFields, setOtpFields] = useState(["", "", "", "", "", ""]);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
  const [flag,setflag] = useState(0);
  const handleInputChange = (value, index) => {
    if (!isNaN(value) && value >= 0 && value <= 9) {
      // Update the corresponding OTP field
      const newOtpFields = [...otpFields];
      newOtpFields[index] = value;
      setOtpFields(newOtpFields);

      // Move to the next input field if not the last one
      if (index < 5 && value !== "") {
        inputRefs[index + 1].current.focus();
      }
    }
  };

  const handleBackspace = (index, event) => {
    if (event.key === "Backspace" && index > 0 && otpFields[index] === "") {
      // Move to the previous input field if backspace is pressed in an empty field
      inputRefs[index - 1].current.focus();
    }
  };

  const hide = ()=>
  {
      setflag(1);
  }

  const unhide=()=>
  {
    setflag(0);
  }

  return (
    <div className="body otp-page" style={{ marginTop: '100px' }}>


       <MainHeading name="Verify Phone Number" />
       {flag==0?<div className="input-group">
        <div className="lable">Enter Phone Number</div>
        <input className="phone" type="number" />
      </div>:null}
      {flag==0?<div className="bttn" onClick={hide}>
        <ButtonSecondary />
      </div>:null}
      {flag===1?
      <div className="input-group">
        <div className="text-wraper" style={{ margin: "0" }}>
          OTP sent to{" "}
          <span className="link" onClick={unhide}> +91 790 590 4204 EDIT</span>
        </div>
        <div className="otp-input-cont">
          {otpFields.map((value, index) => (
            <input
              key={index}
              type="number"
              min={0}
              max={9}
              className="otp-input"
              value={value}
              onChange={(e) => handleInputChange(e.target.value, index)}
              onKeyDown={(e) => handleBackspace(index, e)}
              ref={inputRefs[index]}
            />
          ))}
        </div>
      </div>:null
}
{flag?<div className="bttn">
        <ButtonSecondary />
      </div>
      :null
}
{flag?  <div className="text-wraper">
        60 Seconds
        <span className="link"> Resend OTP</span>
      </div>:null}
      <div style={{display:'flex',flexDirection:'column',gap:'30px',width:'100%'}}></div>
    </div>
  );
};