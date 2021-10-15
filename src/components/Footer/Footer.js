import React from 'react';
import './Footer.css';
import logo from '../../images/logo2.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="row">
                <div className="col-md-4">
                    <div className="footer-logo logo d-flex">
                        <img src={logo} alt="" />
                        <h3>E-CODING</h3>
                    </div>
                    <div className="social-icons">
                        <a target="blank" href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a>
                        <a target="blank" href="https://www.twitter.com/"><i className="fab fa-twitter-square"></i></a>
                        <a target="blank" href="https://www.github.com/"><i className="fab fa-github"></i></a>
                        <a target="blank" href="https://www.linkedin.com/"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>
                <div className="col-md-4">
                    <h5 className="footer-menu">NAVIGATE</h5>
                    <div className="footer-nav">
                        <Link className="footer-nav-item" to="/home">Home</Link>
                        <Link className="footer-nav-item" to="/courses">Courses</Link>
                        <Link className="footer-nav-item" to="/aboutUs">About Us</Link>
                        <Link className="footer-nav-item" to="/ContactUs">Contact Us</Link>
                        
                    </div>
                </div>
                <div className="col-md-4">
                    <h5 className="footer-menu">SUBSCRIBE</h5>
                    <div className="footer-input">
                    <input type="email" placeholder="Enter Email" />
                    <button>Submit</button>
                    </div>
                </div>
            </div>
            <hr />
            <div>
                <p className="footer-bottom">Copyright ©2021 All rights reserved | E-Coding</p>
            </div>
        </div>
    );
};

export default Footer;