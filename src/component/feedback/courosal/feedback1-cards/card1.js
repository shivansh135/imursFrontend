import PropTypes from "prop-types";
import React from "react";
import "./card1.css";

export const FeedbackNew = () => {
    return (
        <div className="feedback-new">
            <img className="rectangle" alt="Rectangle" src="sampleSquare.jpg" />
            <div className="div">
                <div className="frame-2">
                    <div className="text-wrapper">Rajesh Singh</div>
                </div>
                <p className="element-prestalo-onli">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem d typesetting ind
                </p>
                <div className="element-prestalo-onli-2">Get Souvenir</div>
            </div>
        </div>
    );
};

FeedbackNew.propTypes = {
    rectangle: PropTypes.string,
};
