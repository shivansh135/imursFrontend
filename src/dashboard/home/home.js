import { ButtonBlack } from "../../component/button/button"
import { FeedbackNew } from "../../component/feedback/courosal/feedback1-cards/card1"
import { SimpleHeading } from "../../component/headings/heading"
import { OrderCard } from "../cards/orderCard"
import { ButtonPrimary, ButtonSecondary } from "../dash_buttons/buttons"
import { TagCredit, Tag_1 } from "../headings/headings"
import Profile_Settings from "../profileSetting/form"
import { Dashboard } from "../structure/structure"

export const DashboardHome = (props)=>{
    
    return(
        <Dashboard data={props.data}>
            <div style={{display:'flex',justifyContent:'flex-end',gap:'24px'}}>
            <ButtonPrimary text='Request a Sample'/>
            <ButtonSecondary text='create order'/>
            </div>
            <div className="body">
            <div style={{width:'100%',aspectRatio:'1021/433',backgroundColor:"var(--jet-black)"}}></div>
            <div style={{display:'flex',gap:'24px'}}>
            <div style={{width:'50%',aspectRatio:'494/282',backgroundColor:"var(--jet-black)"}}></div>
            <div style={{width:'50%',aspectRatio:'494/282',backgroundColor:"var(--jet-black)"}}></div>
            </div>
            <SimpleHeading text="Happy Reviews"/>
            <div style={{display:'flex',width:'100%',overflowX:'auto',gap:'10px'}}>
                <div style={{width:'60%',flexShrink:'0'}}>
                    <FeedbackNew name="Mahi & Siddharth" img="feedbackimages/mahi_&_Siddharth.jpg" text="Reliving our special day through its pages brought tears and joy. Grateful!" city="Get Souvenir"/>
                </div>
                <div style={{width:'60%',flexShrink:'0'}}>
                <FeedbackNew name="Namita & Akshay" img="feedbackimages/Namita_&_Akshay.jpg"  text="Imurs exceeded expectations, beautifully curated. It's our love story in print!" city="Get Souvenir"/>
                </div>
                <div style={{width:'60%',flexShrink:'0'}}>
                <FeedbackNew name="Nitya and Shivam" img="feedbackimages/Nitya_&_Shivam.jpeg"  text="Our memories turned into a beautiful tangible keepsake. Loved this concept" city="Get Souvenir"/>
                </div>
                <div style={{width:'60%',flexShrink:'0'}}>
                    <FeedbackNew name="Harshita & Akhil" img="feedbackimages/Harshita_&_Akhil.jpg" text="Each page captured our love story perfectly. Cherished memories beautifully preserved!" city="Get Souvenir"/>
                </div>
            </div>
            </div>
        </Dashboard>
    )
    
} 