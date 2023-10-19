import PropTypes from "prop-types";
import React from "react";
import "./button.css";

export const ButtonSecondary = ({ className, customStyle,text }) => {
  return (
    <div className={`button-secondary ${className}`} style={customStyle}>
      <div className="text-wrapper">{text || "order now"}</div>
    </div>
  );
}; 

export const ButtonBlack = ({ className, customStyle,text }) => {
  return (
    <div className={`button-black ${className}`} style={customStyle}>
      <div className="text-wrapper">{text || "order now"}</div>
    </div>
  );
}; 


ButtonSecondary.propTypes = {
    text: PropTypes.string,
};
