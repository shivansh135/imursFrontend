import React, { useEffect } from 'react'
import { InfiniteIconMarquee, InfiniteMarquee } from '../marquee/marquee'
import { PartnerInvite } from '../partnerInvite/partnerInvite'
import { ProductFlipBook } from './cards/productFlipbook/productFlipBook'
import { HedingSubheding } from '../headings/heading'
import { Feedback, FeedbackDynamic } from '../feedback/courosal/feedback-cards/card'
import Gridproduct from './cards/gridproduct/gridproduct'
import { useLocation } from 'react-router-dom'
import { FlipbookContainer } from '../flipBookShow/flipBookShow'

export default function Product() {

  
  const location = useLocation();
  const info = location.state?.info;
  console.log(info)
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // You can use 'auto' for instant scrolling or 'smooth' for smooth scrolling
  });
  
  // Outputs "1Jbrp-s-HvqhVgWQZeDx9_vbvRKZAnGWP"
  
  const url = new URL("https://drive.google.com/file/d/1Jbrp-s-HvqhVgWQZeDx9_vbvRKZAnGWP/view?usp=drive_link");
  const pathname = url.pathname;
  const fileId = pathname.split("/")[3];
  

  return (
    <>

<div className='body' style={{ marginTop: "60px",display:'flex',flexDirection:'column',width:'100%'}}>
    <div/>
    <Gridproduct info={info}/>
    <HedingSubheding heading={info.title} sub_heading="Wedding Magazine"/>
    <ProductFlipBook text={info.discription} thumb={info.thumbnail} pdf={info.pdf}/>
    <div style={{display:'flex',flexDirection:'column',gap:'30px',width:'100%'}}>
    <InfiniteIconMarquee info={info.bullets}/>
    <InfiniteMarquee />
    </div>
    <FeedbackDynamic info={info}/>
    <PartnerInvite/>
  </div>
    </>
  )
}