import React from "react";
import "./home.css";


import { InfiniteMarquee } from "../marquee/marquee"
import { FlipbookContainer } from "../flipBookShow/flipBookShow";
import {VideoBackground} from "../displayVideo/video";
import { PartnerInvite } from "../partnerInvite/partnerInvite";
import Courosal from "../feedback/courosal/courosal";











export const Home = () => {
    return (
        <>
      
        <VideoBackground/>
        <div style={{ marginTop: "40px" }} />
        <FlipbookContainer/>
        <div style={{ marginTop: "40px" }} />
        <InfiniteMarquee />
        <div style={{ marginTop: "40px" }} />
          <Courosal/>
       
        
        <div style={{ marginTop: "40px" }} />  
        <PartnerInvite/>
        <div style={{ marginTop: "40px" }} />
        
        
        </>
    );
};
