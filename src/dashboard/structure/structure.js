import { NavLink } from 'react-router-dom';
import { Tag_1, Tag_2 } from '../headings/headings';
import './structure.css'


export const TopNavigation = (props) => {
  return (
    <NavLink exact to='/profile'  className="top-navigation">
      <Tag_1 data={props.data}/>
      <div className='logo' style={{background:`url(https://drive.google.com/thumbnail?export=view&id=${props.data.logo}&cache-control=max-age=172800)`,backgroundSize:'100%',backgroundPosition:'center'}}></div>
    </NavLink>
  );
}

export const SideNavigation = () => {
    return (
      <div className="side-navigation">
        <div className="headding">IMURS</div>
        <div className='button active'>
          <img alt='logo' src='logos/grid-view.svg'/>
          <span className='text'>Dashboard</span>
        </div>
        <div className='button'>
          <img alt='logo' src='logos/local-mall.svg'/>
          <span className='text'>Orders</span>
        </div>
        <div className='button'>
          <img alt='logo' src='logos/sell.svg'/>
          <span className='text'>Pricing</span>
        </div>
        <div className='button'>
          <img alt='logo' src='logos/web-stories.svg'/>
          <span className='text'>Portfolio</span>
        </div>
        <div className='button'>
          <img alt='logo' src='logos/redeem.svg'/>
          <span className='text'>Suvenir</span>
        </div>
      </div>
    );
  }



export const Dashboard = ({ children ,data}) => {
  console.log(data)
    return (
      <div className="dashboard-body">
        <SideNavigation/>
        <div className='main'>
          <div style={{position:'absolute',width:"100%",height:'80px',backgroundColor:"var(--isabeline)",zIndex:'9999',top:'0',left:'0'}}></div>
            <TopNavigation data={data}/>
            {children}
        </div>
      </div>
    );
  }