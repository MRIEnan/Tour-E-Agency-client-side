import { faBehance, faCcDiscover, faCcMastercard, faCcVisa, faFacebook, faInstagram, faStripe, faTwitter, faEnvira } from '@fortawesome/free-brands-svg-icons';
import { faDirections, faMailBulk, faPhone, faRocket } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavHashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <div className="footer-main-container">
            <div className="footer-tour-e-info">
                <h1><FontAwesomeIcon className="footer-tour-e-logo" icon={faEnvira}/>Tour<span className="footer-tour-e-title-word">E</span></h1>
                <p>Let's go through the adventure and feel the moment to live the life.</p>
                <h2>Foolow Us:</h2>
                <div className="footer-tour-e-icon-container">
                    <FontAwesomeIcon icon={faFacebook}/>
                    <FontAwesomeIcon icon={faInstagram}/>
                    <FontAwesomeIcon icon={faTwitter}/>
                    <FontAwesomeIcon icon={faBehance}/>
                </div>
            </div>
            <div className="footer-contact-us">
                <h1>Contact Us</h1>
                <div className="footer-contact-us-item-container">
                    <div className="footer-contact-us-item-container-icon">
                        <FontAwesomeIcon icon={faPhone}/>
                    </div>
                    <div>
                        <p>+017777777777</p>
                    </div>
                </div>
                <div className="footer-contact-us-item-container">
                    <div className="footer-contact-us-item-container-icon">
                        <FontAwesomeIcon icon={faMailBulk}/>
                    </div>
                    <div>
                        <p>support@mail.com</p>
                    </div>
                </div>
                <div className="footer-contact-us-item-container">
                    <div className="footer-contact-us-item-container-icon">
                        <FontAwesomeIcon icon={faDirections}/>
                    </div>
                    <div>
                        <p>1012,Feni,Bangladesh</p>
                    </div>
                </div>
            </div>
            <div className="footer-support">
                <h1>Support</h1>
                <div className="footer-support-pages-link">
                    <NavHashLink to="/home">Contact Us</NavHashLink>
                    <NavHashLink to="/home">About Us</NavHashLink>
                    <NavHashLink to="/home">Destination</NavHashLink>
                    <NavHashLink to="/home">Our Blogs</NavHashLink>
                    <NavHashLink to="/home">Package</NavHashLink>
                </div>
            </div>
            <div className="footer-payment">
                <h1>We Accepts:</h1>
                <div className="footer-payment-types-icon">
                    <FontAwesomeIcon className="footer-icon" icon={faCcVisa}/>
                    <FontAwesomeIcon className="footer-icon" icon={faCcMastercard}/>
                    <FontAwesomeIcon className="footer-icon" icon={faStripe}/>
                    <FontAwesomeIcon className="footer-icon" icon={faCcDiscover}/>
                    <FontAwesomeIcon className="footer-icon" icon={faRocket}/>
                </div>
            </div>
        </div>
    );
};

export default Footer;