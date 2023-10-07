
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ButtonSecondary } from "../button/button";
import "./navbar.css";

export const NavbarLanding = () => {
    const [scrolling, setScrolling] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu open/close

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (window.scrollY > 200) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle menu state
    };

    // Function to close the menu
    const closeMenu = () => {
        setIsMenuOpen(false);
    };
    
   

    return (
        <div className={`nav ${scrolling ? 'scrolled' : ''}`}>
            <i className='fa-solid fa-bars menu' onClick={toggleMenu}></i>
            <div className="navTitle">IMURS</div>
            <ButtonSecondary className="hidden"/>
            
            {/* Pass the closeMenu function as a prop */}
            {isMenuOpen && <NavOpen closeMenu={closeMenu} />}
        </div>
    );
};
export const NavOpen = ({ closeMenu }) => {


    const click=()=>
    {
      closeMenu();
    }


    return (
        
        <div className="nav-open">
            <i class="fa-solid fa-x close" onClick={closeMenu}></i>
            <div className="frame">
                <div className="div">
                    <div className="frame-2">
                        <NavLink exact to="/" className="text-wrapper" onClick={click} >HOME</NavLink>
                    </div>
                    <div className="frame-2">
                        <NavLink exact to="/product" className="text-wrapper" onClick={click} >PRODUCT</NavLink>
                    </div>
                    <div className="frame-2">
                        <NavLink exact to="/plans" className="text-wrapper" onClick={click}>CORPORATE PLANS</NavLink>
                    </div>
                    <div className="frame-2">
                        <NavLink exact to="/price" className="text-wrapper" onClick={click}>PRICING</NavLink>
                    </div>
                </div>
                <div className="text-wrapper-2">IMURS</div>
            </div>
            <img className="star" alt="Star" src="star-5.png" />
        </div>
    );
};
