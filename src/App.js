import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react';
import Price from './component/price/price';
import Plan from './component/plans/plan';
import { Home } from './component/pricing/home';
import Product from './component/product/product';
import { NavbarLanding } from './component/navbarLanding/navbar';
import { PropertyFooterWrapper } from './component/footer/footer';
import { Otp } from './component/login/login';
import Form from './component/form/form';
import { DashboardHome } from './dashboard/home/home';
import { TopNavigation } from './dashboard/structure/structure';
import Success from './component/login/success';
import Profile_Settings from './dashboard/profileSetting/form';

function LandingRoutes() {
  return (
    <Router>
      <NavbarLanding />
      <div className="pages">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/register" element={<Form />} />
          <Route path="/price" element={<Price />} />
          <Route path="/plans" element={<Plan />} />
          <Route path="/login" element={<Otp />} />
          <Route path="/dashboard" element={<Success/>}></Route>
          <Route path='/registration' element={<Form/>} />
        </Routes>
      </div>
      <PropertyFooterWrapper />
    </Router>
  );
}

function DashboardRoutes(props) {

  return (
    <Router>
      <div className="pages">
        <Routes>
          <Route path="/dashboard" element={<DashboardHome data={props.data} />} />
          <Route path="/" element={<DashboardHome data={props.data} />} />
          <Route  path='/profile' element={<Profile_Settings data={props.data}/>} />
        </Routes>
      </div>
    </Router>
  );
}

function App() {
  const [x, setX] = useState(1);
  const [data,setdata] = useState('');
  useEffect(() => {
    // Make an API call to check if the user is authenticated.
    // Replace this with your actual API call logic.
    fetch('https://iamyourstoryclint.el.r.appspot.com//api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include'
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          alert('POST request failed');
        }
      })
      .then((data) => {
        if (data) {
          setdata(data);
          setX(data.user === false ? true : false);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  if (x === null) {
    return <div>Loading...</div>;
  }

  return x ? <LandingRoutes /> : <DashboardRoutes data={data} />;
}

export default App;
