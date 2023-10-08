import React from 'react'
import Courosal from '../feedback/courosal/courosal'
import { InfiniteMarquee } from '../marquee/marquee'
import { PartnerInvite } from '../partnerInvite/partnerInvite'
import { ProductFlipBook } from './cards/productFlipbook/productFlipBook'
import ProductGrid from './product-grid/product-grid'
import { ProducTitle } from './product-title/product-title'

export default function Product() {
  return (
    <>

<div style={{ marginTop: "80px" }} />
    <div style={{display:"flex",justifyContent:"center"}}>  <ProducTitle/></div>
  
     <div style={{ marginTop: "40px" }} />
    <ProductFlipBook text="A Wedding Souvenir covering all events and your precious memories "/>
    <div style={{ marginTop: "40px" }} />
    <InfiniteMarquee/>
    <div style={{ marginTop: "40px" }} />
    <Courosal/>
    <div style={{ marginTop: "80px" }} />
    <ProductGrid/>
    <div style={{ marginTop: "40px" }} />
    <PartnerInvite/>
    </>
  )
}
