import React, { useEffect } from 'react'
import { InfiniteIconMarquee, InfiniteMarquee } from '../marquee/marquee'
import { PartnerInvite } from '../partnerInvite/partnerInvite'
import { ProductFlipBook } from './cards/productFlipbook/productFlipBook'
import { HedingSubheding } from '../headings/heading'
import { Feedback, FeedbackDynamic } from '../feedback/courosal/feedback-cards/card'
import Gridproduct from './cards/gridproduct/gridproduct'
import { useLocation } from 'react-router-dom'

export default function Product() {

  
  const location = useLocation();
  const info = location.state?.info;
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // You can use 'auto' for instant scrolling or 'smooth' for smooth scrolling
  });
  










  return (
    <>

<div className='body' style={{ marginTop: "60px",display:'flex',flexDirection:'column',width:'100%'}}>
    <div/>
    <Gridproduct info={info}/>
    <HedingSubheding heading={info.title} sub_heading="Wedding Magazine"/>
    <ProductFlipBook  text="A Wedding Souvenir covering all events and your precious memories "/>
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