import React from "react";
import "./card.css";
import { ButtonSecondary } from "../../dash_buttons/buttons";

export const CardPortfolio = () => {
    return (
        <div className="display-card">
            <div className="img" />
            <div className="cont">
                <img className="logo" alt="Logo" src="partnersmarquelogos/1.png" />
                <div className="heading">
                    Payal &amp; Mukesh
                    <br />
                    Wedding Magazine
                </div>
                <div className="text">
                    Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.
                </div>
                <div className="button-secondaryB">
                    <div className="text-wrapper">VIEW FULL MAGAZINE</div>
                </div>
            </div>
        </div>
    );
};