import { Tag_1, Tag_2 } from '../headings/headings';
import './structure.css'


export const TopNavigation = () => {
  return (
    <div className="top-navigation">
      <Tag_1/>
      <div className='logo'></div>
    </div>
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



export const Dashboard = ({ children }) => {
    return (
      <div className="dashboard-body">
        <SideNavigation/>
        <div className='main'>
          <div style={{position:'absolute',width:"100%",height:'80px',backgroundColor:"var(--isabeline)",zIndex:'9999',top:'0',left:'0'}}></div>
            <TopNavigation/>
            {children}
        </div>
      </div>
    );
  }