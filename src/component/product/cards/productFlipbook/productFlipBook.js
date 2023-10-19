import React from "react";
import { ButtonSecondary } from "../../../button/button";
import "./productFlipBook.css";
import Flipbook from "../../../dearFlip/dearFlip";


export const ProductFlipBook = (props) => {
    return (
        <div className="flipbook-container-product">
            <div className="flipbook" alt="Flipbook" style={{backgroundImage: `url('https://drive.google.com/uc?export=view&id=${props.thumb}&cache-control=max-age=172800"')`}}>     
            </div>
            <Flipbook source = {props.pdf}/>
            <div className="cont">
                <div className="text-wrap">
                    <p className="tag">
                       {props.text}
                    </p>
                </div>
                <ButtonSecondary/>
                <p className="price">Starts at Just ₹999</p>
            </div>
        </div>
    );
};
