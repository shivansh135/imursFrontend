import React from "react";
import "./home.css";


import { InfiniteMarquee } from "../marquee/marquee"
import { FlipbookContainer } from "../flipBookShow/flipBookShow";
import {VideoBackground} from "../displayVideo/video";
import { PartnerInvite } from "../partnerInvite/partnerInvite";

import { DecorCard } from "../product/cards/decorCard/decorCard";
import { ProcessContainer } from "../product/cards/processCard/processCard";
import ProductGrid from "../product/product-grid/product-grid";
import { MainHeading } from "../headings/heading";
import DynamicSlides from "../feedback/courosal/courosal/courosal";
import AliceCarousel from "react-alice-carousel";
import Carousel from "../feedback/courosal/courosal/courosal";



export const Home = () => {
    return (
        <div className="body" style={{display:'flex',flexDirection:"column"}}>
        <VideoBackground/>
        
        <FlipbookContainer/>
        
        <InfiniteMarquee />

        <MainHeading name="Imurs' Greatest Hits"/>
        
        <ProductGrid/>

        <ProcessContainer/>

        <MainHeading name="Redecorating Home with Memories"/>

        <DecorCard/>

        <MainHeading name="Nostalgia Champions"/>

     
        <Carousel/>
        <PartnerInvite/>
        
        
        
        </div>
    );
};