import React from "react";
import "./flipbookShow.css";
import { ButtonSecondary } from "../button/button";

export const FlipbookContainer = () => {
    return (
        <div className="flipbook-container">
            <img className="flipbook" alt="Flipbook" src="sample.jfif" />
            <div className="cont">
                <div className="text-wrap">
                    <div className="heading">Customized <br/> Beyond Imagination</div>
                    <p className="tag">Don’t trust us? Experience it live.</p>
                </div>
                <ButtonSecondary className="center"/>
            </div>
        </div>
    );
};
