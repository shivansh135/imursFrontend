import { ButtonBlack } from "../../component/button/button"
import { SimpleHeading } from "../../component/headings/heading"
import { OrderCard } from "../cards/orderCard"
import { ButtonPrimary, ButtonSecondary } from "../dash_buttons/buttons"
import { TagCredit, Tag_1 } from "../headings/headings"
import Profile_Settings from "../profileSetting/form"
import { Dashboard } from "../structure/structure"

export const OrdersB2B = (props)=>{
    
    return(
        <Dashboard data={props.data}>
            <div style={{display:'flex',justifyContent:'space-between'}}>
            <ButtonSecondary text='creare order'/>
            <TagCredit data={props.data}/>
            </div>
            <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'space-evenly',gap:"20px"}}>
            <OrderCard/>
            <OrderCard/>
            <OrderCard/>
            <OrderCard/>
            </div>
        </Dashboard>
    )
    
} 