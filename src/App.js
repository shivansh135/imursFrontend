import './App.css';
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";

import Price from './component/price/price';
import Plan from './component/plans/plan';
import { Home } from './component/pricing/home';
import Product from './component/product/product';
import { NavbarLanding } from './component/navbarLanding/navbar';
import { PropertyFooterWrapper } from './component/footer/footer';
import { Otp } from './component/login/login';
import Form from './component/form/form';


function App() {
  return (
    <>


    <Router>
 <NavbarLanding/>
      <div className="pages">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/product"  element={<Product/>} />
          <Route path="/price" element={<Price/>} />
          <Route path="/plans" element={<Plan/>} />
          <Route path="/login" element={<Otp/>} />
          <Route path="/registration" element={<Form/>}/>
        </Routes>
      </div>
      <PropertyFooterWrapper/>
    </Router>
</>
  );
}

export default App;

