import React from 'react';
import { NavHashLink } from 'react-router-hash-link';
import './HomeTopBanner.css';

const HomeTopBanner = () => {
    return (
        <div className="home-top-banner-main-container">
            <div className="home-top-banner-text-container">
                <h1>Let's say HI to <span className="home-top-banner-nature-container">Nature</span>.</h1>
                <div className="home-top-banner-text-inner-container">
                    <p>Live every moment of your life.</p>
                </div>
                <NavHashLink  to='/home#tour-package'><div className="btn-regular-container">
                    <h3>Enjoy</h3>
                    <div className="btn-regular"></div>
                </div></NavHashLink>
            </div>
        </div>
    );
};

export default HomeTopBanner;