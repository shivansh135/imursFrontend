import { ButtonBlack } from "../../component/button/button"
import { FeedbackNew } from "../../component/feedback/courosal/feedback1-cards/card1"
import { SimpleHeading } from "../../component/headings/heading"
import { OrderCard } from "../cards/orderCard"
import { ButtonPrimary, ButtonSecondary } from "../dash_buttons/buttons"
import { TagCredit, Tag_1 } from "../headings/headings"
import Profile_Settings from "../profileSetting/form"
import { Dashboard } from "../structure/structure"
import { CardPortfolio } from "./portfolioCard/card"

export const Portfolio = (props)=>{
    
    return(
        <Dashboard data={props.data}>
            <div className="body">
            <div style={{width:'100%',aspectRatio:'1021/433',backgroundColor:"var(--jet-black)"}}></div>
            <div className="card-container">
                <CardPortfolio/>
                <CardPortfolio/>
                <CardPortfolio/>
                <CardPortfolio/>
                <CardPortfolio/>
                <CardPortfolio/>
            </div>
            </div>
            
        </Dashboard>
    )
    
} 

export const Suvinor = (props)=>{
    
    return(
        <Dashboard data={props.data}>
            <div className="body">
            <div className="card-container">
                <CardPortfolio/>
                <CardPortfolio/>
                <CardPortfolio/>
                <CardPortfolio/>
                <CardPortfolio/>
                <CardPortfolio/>
            </div>
            </div>
            
        </Dashboard>
    )
    
} 