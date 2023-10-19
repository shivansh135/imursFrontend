import React from "react";
import Marquee from "react-fast-marquee";
import "./marquee.css"

export const InfiniteMarquee = () => (
  <Marquee className="marquee-cont" direction="right">
    <div className="marquee">
      <div className="text-wrapper">Preserving Moments</div>
      <img className="star" alt="Star" src="Marquee-Star.svg" />
    </div>
    <div className="marquee">
      <div className="text-wrapper">Preserving Moments</div>
      <img className="star" alt="Star" src="Marquee-Star.svg" />
    </div>
    <div className="marquee">
      <div className="text-wrapper">Preserving Moments</div>
      <img className="star" alt="Star" src="Marquee-Star.svg" />
    </div>
    <div className="marquee">
      <div className="text-wrapper">Preserving Moments</div>
      <img className="star" alt="Star" src="Marquee-Star.svg" />
    </div>
    <div className="marquee">
      <div className="text-wrapper">Preserving Moments</div>
      <img className="star" alt="Star" src="Marquee-Star.svg" />
    </div>
    <div className="marquee">
      <div className="text-wrapper">Preserving Moments</div>
      <img className="star" alt="Star" src="Marquee-Star.svg" />
    </div>
    <div className="marquee">
      <div className="text-wrapper">Preserving Moments</div>
      <img className="star" alt="Star" src="Marquee-Star.svg" />
    </div>
    <div className="marquee">
      <div className="text-wrapper">Preserving Moments</div>
      <img className="star" alt="Star" src="Marquee-Star.svg" />
    </div>
    <div className="marquee">
      <div className="text-wrapper">Preserving Moments</div>
      <img className="star" alt="Star" src="Marquee-Star.svg" />
    </div>
    <div className="marquee">
      <div className="text-wrapper">Preserving Moments</div>
      <img className="star" alt="Star" src="Marquee-Star.svg" />
    </div>
    <div className="marquee">
      <div className="text-wrapper">Preserving Moments</div>
      <img className="star" alt="Star" src="Marquee-Star.svg" />
    </div>
    <div className="marquee">
      <div className="text-wrapper">Preserving Moments</div>
      <img className="star" alt="Star" src="Marquee-Star.svg" />
    </div>
  </Marquee>
  
);

export const InfiniteIconMarquee = (props) => {
  const info = props.info;
  const infoTexts = [];
  const keys = Object.keys(info);
  const maxIndex = keys.length; // Define your maximum index, e.g., 35
  
  for (let i = 1; i <= maxIndex; i++) {
    if (i <= keys.length) {
      const text = info[`text${i}`]; // Access info.text1, info.text2, ..., info.textX
      if (text) {
        infoTexts.push(text);
      } else {
        break; // Stop the loop if a textX property is empty
      }
    } else {
      break; // Stop the loop when there are no more keys to access
    }
  }
  
  const displayElements = infoTexts.map((text, index) => (
    <div className="marquee" key={index}>
      <div className="text-wrapper">{text}</div>
      <img className="star" alt="Star" src={`product_icons/${index}.svg`} />
    </div>
  ));
  
  return (
    <Marquee className="marquee-cont-icon" direction="left">
      {displayElements}
    </Marquee>
  );
  
  }  