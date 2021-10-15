import React from 'react';
import './Header.css'
import logo from '../../images/logo2.png';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <div className="header-top mb-4">
                {/* Logo */}
                <div className="logo d-flex"> 
                    <img src={logo} alt="" />
                    <h3>E-CODING</h3>
                </div>
                {/* Menu */}
                <div className="nav">
                    <Link className="nav-item" to="/home">Home</Link>
                    <Link className="nav-item" to="/courses">Courses</Link>
                    <Link className="nav-item" to="/aboutUs">About Us</Link>
                    <Link className="nav-item" to="/ContactUs">Contact Us</Link>
                    <Link className="nav-item" to="/home"><button className="nav-btn">Get Started</button></Link>
                    
                </div>
            </div>
            
        </div>
    );
};

export default Header;