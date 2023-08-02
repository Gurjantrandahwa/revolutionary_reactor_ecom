import React from 'react';
import {AiFillFacebook, AiFillInstagram, AiFillTwitterCircle} from "react-icons/ai";
import "./footer.scss";

const Footer = () => {
    return  <footer className="footer">
        <div className="footer-content">
            <div className="footer-section">
                <h3>About Us</h3>
                <p>We provide the best products for your needs. Shop with confidence.</p>
            </div>
            <div className="footer-section">
                <h3>Contact Us</h3>
                <p>Email : contact@example.com</p>
                <p>Phone : 123-456-7890</p>
            </div>
            <div className="footer-section">
                <h3>Follow Us</h3>
                <div className="social-icons">
                    <a href="#" className="social-icon">
                        <AiFillFacebook/>
                    </a>
                    <a href="#" className="social-icon">
                        <AiFillTwitterCircle/>
                    </a>
                    <a href="#" className="social-icon">
                        <AiFillInstagram/>
                    </a>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <p>&copy; 2023 Your Ecommerce. All rights reserved.</p>
        </div>
    </footer>
};

export default Footer;
