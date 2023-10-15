
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";
import { FeedbackNew } from "../feedback1-cards/card1";
import './courosal.css'
const Courosal = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div style={{marginLeft:"10%",marginRight:"10%",display:"flex",justifyContent:"center",flexDirection:"column"}}>
      <Slider {...settings}>
        <div>
          <h3><FeedbackNew/></h3>
        </div>
        <div>
          <h3><FeedbackNew/></h3>
        </div>  <div>
          <h3><FeedbackNew/></h3>
        </div>  <div>
          <h3><FeedbackNew/></h3>
        </div>  <div>
          <h3><FeedbackNew/></h3>
        </div>  <div>
          <h3><FeedbackNew/></h3>
        </div>
      </Slider>
    </div>
  );
};

export default Courosal;

