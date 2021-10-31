import React from 'react';
import './WhyTourEContainer.css';
import SectionHeader from '../../../Shared/SectionHeader/SectionHeader';
import WhyTourECard from '../WhyTourECard/WhyTourECard';

const WhyTourEContainer = () => {
    const title = "Why TourE";
    const details = "Why You Are Travel With TourE";

    return (
        <div className="why-tour-e-main-container">
            <div className="why-tour-e-main-container-header">
            <SectionHeader title={title} details={details}></SectionHeader>
            </div>
            <div className="why-tour-e-main-card-container">
                <WhyTourECard uIcon='fas fa-street-view' title="2000+ Our worldwide guide"></WhyTourECard>
                <WhyTourECard uIcon='far fa-handshake' title="100% trusted travel agency"></WhyTourECard>
                <WhyTourECard uIcon='fas fa-running' title="10+ year of travel experience"></WhyTourECard>
                <WhyTourECard uIcon='far fa-laugh-beam' title="90% of our traveller happy"></WhyTourECard>
            </div>            
        </div>
    );
};

export default WhyTourEContainer;