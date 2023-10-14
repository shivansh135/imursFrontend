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


 
   return(

  <Marquee className="marquee-cont-icon" direction="left">
{
  info.text1 !== '' ? (
    <div className="marquee">
      <div className="text-wrapper">{info.text1}</div>
      <img className="star" alt="Star" src="flightsmode.svg" />
    </div>
  ) : null
}
{
  info.text2 !== '' ? (
    <div className="marquee">
      <div className="text-wrapper">{info.text2}</div>
      <img className="star" alt="Star" src="flightsmode.svg" />
    </div>
  ) : null
}
{
  info.text3 !== '' ? (
    <div className="marquee">
      <div className="text-wrapper">{info.text3}</div>
      <img className="star" alt="Star" src="flightsmode.svg" />
    </div>
  ) : null
}
{
  info.text4 !== '' ? (
    <div className="marquee">
      <div className="text-wrapper">{info.text4}</div>
      <img className="star" alt="Star" src="flightsmode.svg" />
    </div>
  ) : null
}
{
  info.text5 !== '' ? (
    <div className="marquee">
      <div className="text-wrapper">{info.text5}</div>
      <img className="star" alt="Star" src="flightsmode.svg" />
    </div>
  ) : null
}
{
  info.text6 !== '' ? (
    <div className="marquee">
      <div className="text-wrapper">{info.text6}</div>
      <img className="star" alt="Star" src="flightsmode.svg" />
    </div>
  ) : null
}
{
  info.text7 !== '' ? (
    <div className="marquee">
      <div className="text-wrapper">{info.text7}</div>
      <img className="star" alt="Star" src="flightsmode.svg" />
    </div>
  ) : null
}
{
  info.text8 !== '' ? (
    <div className="marquee">
      <div className="text-wrapper">{info.text8}</div>
      <img className="star" alt="Star" src="flightsmode.svg" />
    </div>
  ) : null
}
{
  info.text9 !== '' ? (
    <div className="marquee">
      <div className="text-wrapper">{info.text9}</div>
      <img className="star" alt="Star" src="flightsmode.svg" />
    </div>
  ) : null
}
{
  info.text10 !== '' ? (
    <div className="marquee">
      <div className="text-wrapper">{info.text10}</div>
      <img className="star" alt="Star" src="flightsmode.svg" />
    </div>
  ) : null
}
{
  info.text11 !== '' ? (
    <div className="marquee">
      <div className="text-wrapper">{info.text11}</div>
      <img className="star" alt="Star" src="flightsmode.svg" />
    </div>
  ) : null
}
{
  info.text12 !== '' ? (
    <div className="marquee">
      <div className="text-wrapper">{info.text12}</div>
      <img className="star" alt="Star" src="flightsmode.svg" />
    </div>
  ) : null
}
{
  info.text1 !== '' ? (
    <div className="marquee">
      <div className="text-wrapper">{info.text1}</div>
      <img className="star" alt="Star" src="flightsmode.svg" />
    </div>
  ) : null
}
{
  info.text2 !== '' ? (
    <div className="marquee">
      <div className="text-wrapper">{info.text2}</div>
      <img className="star" alt="Star" src="flightsmode.svg" />
    </div>
  ) : null
}
{
  info.text3 !== '' ? (
    <div className="marquee">
      <div className="text-wrapper">{info.text3}</div>
      <img className="star" alt="Star" src="flightsmode.svg" />
    </div>
  ) : null
}
{
  info.text4 !== '' ? (
    <div className="marquee">
      <div className="text-wrapper">{info.text4}</div>
      <img className="star" alt="Star" src="flightsmode.svg" />
    </div>
  ) : null
}
{
  info.text5 !== '' ? (
    <div className="marquee">
      <div className="text-wrapper">{info.text5}</div>
      <img className="star" alt="Star" src="flightsmode.svg" />
    </div>
  ) : null
}
{
  info.text6 !== '' ? (
    <div className="marquee">
      <div className="text-wrapper">{info.text6}</div>
      <img className="star" alt="Star" src="flightsmode.svg" />
    </div>
  ) : null
}
{
  info.text7 !== '' ? (
    <div className="marquee">
      <div className="text-wrapper">{info.text7}</div>
      <img className="star" alt="Star" src="flightsmode.svg" />
    </div>
  ) : null
}
{
  info.text8 !== '' ? (
    <div className="marquee">
      <div className="text-wrapper">{info.text8}</div>
      <img className="star" alt="Star" src="flightsmode.svg" />
    </div>
  ) : null
}
{
  info.text9 !== '' ? (
    <div className="marquee">
      <div className="text-wrapper">{info.text9}</div>
      <img className="star" alt="Star" src="flightsmode.svg" />
    </div>
  ) : null
}
{
  info.text10 !== '' ? (
    <div className="marquee">
      <div className="text-wrapper">{info.text10}</div>
      <img className="star" alt="Star" src="flightsmode.svg" />
    </div>
  ) : null
}
{
  info.text11 !== '' ? (
    <div className="marquee">
      <div className="text-wrapper">{info.text11}</div>
      <img className="star" alt="Star" src="flightsmode.svg" />
    </div>
  ) : null
}
{
  info.text12 !== '' ? (
    <div className="marquee">
      <div className="text-wrapper">{info.text12}</div>
      <img className="star" alt="Star" src="flightsmode.svg" />
    </div>
  ) : null
}

  </Marquee>);
  
   };

